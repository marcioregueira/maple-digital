import { Target, Zap, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenvolvido pensando no sucesso do seu negócio",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Entregamos soluções rápidas sem comprometer a qualidade",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Suporte dedicado e acompanhamento em todas as etapas",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Tecnologias modernas e código limpo em todos os projetos",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Sobre a <span className="text-primary">Soluc Digital</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="text-primary font-semibold">Soluc Digital</span> nasceu com o propósito de democratizar 
              o acesso às soluções digitais de qualidade. Criamos sites, landing pages e aplicativos 
              personalizados para pequenos negócios, pousadas e empreendedores.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Utilizamos as tecnologias mais modernas do mercado para garantir que sua presença 
              digital seja profissional, segura e escalável. Nossa equipe experiente está pronta 
              para transformar suas ideias em realidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que cada projeto é único e merece atenção personalizada. Por isso, 
              trabalhamos em parceria com nossos clientes do início ao fim, garantindo que 
              o resultado final supere as expectativas.
            </p>
          </div>

          {/* Image Column */}
          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <img 
                src="https://source.unsplash.com/800x600/?team,technology" 
                alt="Equipe Soluc Digital"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border bg-card/50 backdrop-blur hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
