import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import barbeariaHenriqueImg from "@/assets/portfolio-barbearia-henrique.png";
import flatRainhaImg from "@/assets/portfolio-flat-rainha.png";
import sorveteMuitoBomImg from "@/assets/portfolio-sorvete-muito-bom.png";
import lavajatoImg from "@/assets/portfolio-lavajato-brilho-maximo.png";

export type ProjectCategory = "landing" | "institutional";

export interface ProjectRow {
  id: string;
  name: string;
  description: string;
  url: string;
  image_path: string;
  category: ProjectCategory;
  display_order: number;
}

const SEED_IMAGES: Record<string, string> = {
  "seed:portfolio-barbearia-henrique": barbeariaHenriqueImg,
  "seed:portfolio-flat-rainha": flatRainhaImg,
  "seed:portfolio-sorvete-muito-bom": sorveteMuitoBomImg,
  "seed:portfolio-lavajato-brilho-maximo": lavajatoImg,
};

export function resolveImageUrl(image_path: string): string {
  if (SEED_IMAGES[image_path]) return SEED_IMAGES[image_path];
  if (image_path.startsWith("http")) return image_path;
  const { data } = supabase.storage.from("project-images").getPublicUrl(image_path);
  return data.publicUrl;
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<ProjectRow[]> => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("category", { ascending: true })
        .order("display_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as ProjectRow[];
    },
  });
}
