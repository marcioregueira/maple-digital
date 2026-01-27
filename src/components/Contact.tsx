import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      if (!data.success) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      toast({
        title: "✨ Mensagem enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "marciosregueira@gmail.com",
      link: "mailto:marciosregueira@gmail.com",
      description: "Resposta em até 24h",
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Contato</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Vamos <span className="text-primary">Conversar</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - CTA and Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {/* Main CTA Card */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur shadow-2xl shadow-primary/10 overflow-hidden relative">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl md:text-4xl text-foreground">
                  Pronto para começar?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Preencha o formulário ou entre em contato pelo WhatsApp. 
                  Responderemos o mais rápido possível com um orçamento personalizado.
                </p>
                
                {/* WhatsApp Button */}
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white text-lg py-7 shadow-lg shadow-[#25D366]/30"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=14383898465&text&type=phone_number&app_absent=0', '_blank')}
                >
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Falar no WhatsApp
                </Button>

                {/* Benefits */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Resposta em até 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Orçamento gratuito e sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Consultoria inicial gratuita</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border border-border bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="border border-border bg-card/50 backdrop-blur shadow-xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground flex items-center gap-2">
                <Send className="w-7 h-7 text-primary" />
                Envie sua mensagem
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Preencha o formulário abaixo e nossa equipe entrará em contato
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="João Silva"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="bg-background/50 border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-background/50 border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="bg-background/50 border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-foreground font-medium">Tipo de Projeto</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)} required>
                    <SelectTrigger className="bg-background/50 border-border h-12">
                      <SelectValue placeholder="Selecione o tipo de projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Site Institucional</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seu projeto e objetivos..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={6}
                    className="bg-background/50 border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-background text-lg py-6 shadow-lg shadow-primary/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
