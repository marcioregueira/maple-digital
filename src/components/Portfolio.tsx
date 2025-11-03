import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Moda",
    description: "Plataforma completa de vendas online com sistema de pagamento integrado",
    tags: ["React", "Node.js", "Stripe"],
    category: "Loja Virtual",
    image: "https://source.unsplash.com/600x400/?ecommerce,fashion"
  },
  {
    title: "App Delivery",
    description: "Aplicativo de delivery com rastreamento em tempo real",
    tags: ["React Native", "Firebase"],
    category: "Aplicativo Mobile",
    image: "https://source.unsplash.com/600x400/?app,delivery"
  },
  {
    title: "Landing Page SaaS",
    description: "Página de conversão otimizada para startup de tecnologia",
    tags: ["Next.js", "Tailwind"],
    category: "Marketing",
    image: "https://source.unsplash.com/600x400/?website,saas"
  },
  {
    title: "Portal Imobiliário",
    description: "Sistema completo de gestão e divulgação de imóveis",
    tags: ["React", "PostgreSQL"],
    category: "Website",
    image: "https://source.unsplash.com/600x400/?real-estate,property"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Projetos <span className="text-primary">Recentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-border bg-card/50 backdrop-blur overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-background">{project.category}</Badge>
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
                    <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30">
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
