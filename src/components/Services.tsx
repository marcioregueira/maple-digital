import { Globe, Rocket, Headphones, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites institucionais e portais personalizados com design moderno e responsivo.",
    features: ["SEO Otimizado", "Design Responsivo", "Alta Performance"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de conversão estratégicas focadas em capturar leads e maximizar resultados.",
    features: ["Alta Conversão", "A/B Testing", "Analytics Integrado"],
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Manutenção, atualizações e suporte técnico para garantir o sucesso do seu projeto.",
    features: ["Backup Diário", "Atualizações", "Suporte 24/7"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Soluções <span className="text-primary">Completas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Do planejamento à execução, oferecemos tudo que você precisa para ter sucesso no digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4 text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur">
            <CardContent className="p-6 md:p-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Entre em contato e receba uma proposta personalizada em até 24 horas
              </p>
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-10 py-5 md:py-6 bg-primary hover:bg-primary/90 text-background w-full md:w-auto"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar Orçamento Gratuito
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
