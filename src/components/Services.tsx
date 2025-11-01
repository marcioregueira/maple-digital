import { Globe, Smartphone, Rocket, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description: "Sites modernos, responsivos e otimizados para conversão. Do institucional ao e-commerce, desenvolvemos a solução perfeita para sua marca.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Apps nativos e híbridos para iOS e Android. Transforme sua ideia em um aplicativo funcional e intuitivo.",
  },
  {
    icon: Rocket,
    title: "Landing Pages Otimizadas",
    description: "Páginas de alta conversão com design estratégico e otimização para SEO. Aumente suas vendas e capture mais leads.",
  },
  {
    icon: Briefcase,
    title: "Consultoria Digital",
    description: "Análise e estratégias personalizadas para fortalecer sua presença online. Da identidade visual ao marketing digital.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
