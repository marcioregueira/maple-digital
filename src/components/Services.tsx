import { Globe, Smartphone, Rocket, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para conversão. Do institucional ao e-commerce, desenvolvemos a solução perfeita para sua marca.",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    description: "Páginas de alta conversão com design estratégico e otimização para SEO. Aumente suas vendas e capture mais leads.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Apps nativos e híbridos para iOS e Android. Transforme sua ideia em um aplicativo funcional e intuitivo.",
  },
  {
    icon: Headphones,
    title: "Suporte e Manutenção",
    description: "Acompanhamento contínuo do seu projeto digital. Garantimos atualizações, segurança e suporte técnico especializado.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Serviços <span className="text-primary">Digitais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-border bg-card/50 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-background" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
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
