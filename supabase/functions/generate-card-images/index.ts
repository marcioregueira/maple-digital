import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CardPrompt {
  id: string;
  title: string;
  prompt: string;
}

const cardPrompts: CardPrompt[] = [
  {
    id: "foco-resultados",
    title: "Foco em Resultados",
    prompt: "Abstract dark tech background with target bullseye icon centered, glowing red accent lines radiating outward, minimalist corporate style, deep dark blue and black tones with vibrant red highlights, ultra high resolution, 512x512"
  },
  {
    id: "entregas-rapidas",
    title: "Entregas Rápidas",
    prompt: "Abstract dark tech background with lightning bolt and speed motion blur effect, glowing red streaks of light, futuristic minimalist style, deep dark blue and black tones with vibrant red energy trails, ultra high resolution, 512x512"
  },
  {
    id: "suporte-dedicado",
    title: "Suporte Dedicado",
    prompt: "Abstract dark tech background with connected network nodes representing people, glowing red connection lines forming a web pattern, minimalist corporate style, deep dark blue and black tones with vibrant red network connections, ultra high resolution, 512x512"
  },
  {
    id: "qualidade-premium",
    title: "Qualidade Premium",
    prompt: "Abstract dark tech background with elegant award trophy silhouette or premium badge, glowing red luxury elements and sparkles, minimalist high-end style, deep dark blue and black tones with vibrant red premium accents, ultra high resolution, 512x512"
  },
  {
    id: "codigo-escalavel",
    title: "Código Escalável",
    prompt: "Abstract dark tech background with code brackets curly braces and upward growth arrows, glowing red tech circuit elements, minimalist developer style, deep dark blue and black tones with vibrant red code highlights, ultra high resolution, 512x512"
  },
  {
    id: "seguranca-first",
    title: "Segurança First",
    prompt: "Abstract dark tech background with shield and lock icon centered, glowing red security circuit patterns, minimalist cybersecurity style, deep dark blue and black tones with vibrant red protection elements, ultra high resolution, 512x512"
  }
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase credentials not configured");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const body = await req.json().catch(() => ({}));
    const cardId = body.cardId as string | undefined;

    const promptsToProcess = cardId 
      ? cardPrompts.filter(p => p.id === cardId)
      : cardPrompts;

    if (promptsToProcess.length === 0) {
      return new Response(
        JSON.stringify({ error: "Card ID not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: { id: string; title: string; url: string | null; error?: string }[] = [];

    for (const card of promptsToProcess) {
      try {
        console.log(`Generating image for: ${card.title}`);

        const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-image-preview",
            messages: [
              {
                role: "user",
                content: card.prompt
              }
            ],
            modalities: ["image", "text"]
          }),
        });

        if (!aiResponse.ok) {
          const errorText = await aiResponse.text();
          console.error(`AI Error for ${card.id}:`, aiResponse.status, errorText);
          
          if (aiResponse.status === 429) {
            results.push({ id: card.id, title: card.title, url: null, error: "Rate limit exceeded" });
            continue;
          }
          if (aiResponse.status === 402) {
            results.push({ id: card.id, title: card.title, url: null, error: "Payment required" });
            continue;
          }
          
          results.push({ id: card.id, title: card.title, url: null, error: `AI error: ${aiResponse.status}` });
          continue;
        }

        const aiData = await aiResponse.json();
        const imageData = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

        if (!imageData) {
          console.error(`No image data for ${card.id}`);
          results.push({ id: card.id, title: card.title, url: null, error: "No image generated" });
          continue;
        }

        // Extract base64 data from data URL
        const base64Match = imageData.match(/^data:image\/(png|jpeg|jpg|webp);base64,(.+)$/);
        if (!base64Match) {
          results.push({ id: card.id, title: card.title, url: null, error: "Invalid image format" });
          continue;
        }

        const imageFormat = base64Match[1];
        const base64Data = base64Match[2];

        // Convert base64 to Uint8Array
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        // Upload to Supabase Storage
        const fileName = `${card.id}.${imageFormat}`;
        const { error: uploadError } = await supabase.storage
          .from("card-images")
          .upload(fileName, bytes, {
            contentType: `image/${imageFormat}`,
            upsert: true
          });

        if (uploadError) {
          console.error(`Upload error for ${card.id}:`, uploadError);
          results.push({ id: card.id, title: card.title, url: null, error: `Upload failed: ${uploadError.message}` });
          continue;
        }

        // Get public URL
        const { data: publicUrlData } = supabase.storage
          .from("card-images")
          .getPublicUrl(fileName);

        console.log(`Successfully generated and uploaded: ${card.title}`);
        results.push({ id: card.id, title: card.title, url: publicUrlData.publicUrl });

      } catch (cardError) {
        console.error(`Error processing ${card.id}:`, cardError);
        results.push({ 
          id: card.id, 
          title: card.title, 
          url: null, 
          error: cardError instanceof Error ? cardError.message : "Unknown error" 
        });
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        results,
        generated: results.filter(r => r.url !== null).length,
        failed: results.filter(r => r.url === null).length
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("generate-card-images error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
