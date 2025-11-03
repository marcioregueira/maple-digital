import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Moda",
    description: "Plataforma completa de vendas online com sistema de pagamento integrado",
    tags: ["React", "Node.js", "Stripe"],
    category: "Loja Virtual",
  },
  {
    title: "App Delivery",
    description: "Aplicativo de delivery com rastreamento em tempo real",
    tags: ["React Native", "Firebase"],
    category: "Aplicativo Mobile",
  },
  {
    title: "Landing Page SaaS",
    description: "Página de conversão otimizada para startup de tecnologia",
    tags: ["Next.js", "Tailwind"],
    category: "Marketing",
  },
  {
    title: "Portal Imobiliário",
    description: "Sistema completo de gestão e divulgação de imóveis",
    tags: ["React", "PostgreSQL"],
    category: "Website",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projetos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
