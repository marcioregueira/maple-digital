import { Target, Zap, Users, Award, Code, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import teamImage from "@/assets/team-work.jpg";

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenvolvido pensando no sucesso e crescimento do seu negócio",
  },
  {
    icon: Zap,
    title: "Entregas Rápidas",
    description: "Agilidade sem comprometer a qualidade, cumprindo prazos estabelecidos",
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Acompanhamento personalizado em todas as etapas do projeto",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Tecnologias modernas e código limpo seguindo as melhores práticas",
  },
  {
    icon: Code,
    title: "Código Escalável",
    description: "Desenvolvemos pensando no crescimento futuro da sua aplicação",
  },
  {
    icon: Shield,
    title: "Segurança First",
    description: "Proteção de dados e segurança integradas desde o início",
  },
];

const stats = [
  { number: "5+", label: "Anos de Experiência" },
  { number: "100+", label: "Projetos Concluídos" },
  { number: "50+", label: "Clientes Ativos" },
  { number: "98%", label: "Satisfação" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Sobre Nós</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Conheça a <span className="text-primary">Soluc Digital</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Column */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <img 
                src={teamImage} 
                alt="Equipe Soluc Digital"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="grid grid-cols-2 gap-4 p-8 w-full">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Column */}
          <div className="space-y-6 animate-fade-in order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Transformando ideias em soluções digitais de sucesso
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="text-primary font-semibold">Soluc Digital</span> nasceu com o propósito de 
              democratizar o acesso às soluções digitais de qualidade. Criamos sites, landing pages e aplicativos 
              personalizados para pequenos negócios, pousadas e empreendedores que desejam crescer no digital.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Utilizamos as tecnologias mais modernas do mercado, como React, Node.js, TypeScript e outras 
              ferramentas de ponta para garantir que sua presença digital seja profissional, segura e escalável.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe experiente trabalha em parceria com você do início ao fim, garantindo que cada 
              detalhe seja cuidadosamente planejado e executado para superar suas expectativas.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Tecnologias Modernas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Equipe Experiente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Projetos Personalizados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border bg-card/50 backdrop-blur hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
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
