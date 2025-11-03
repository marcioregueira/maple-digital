import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import appImg from "@/assets/project-app.jpg";
import landingImg from "@/assets/project-landing.jpg";
import realestateImg from "@/assets/project-realestate.jpg";

const projects = [
  {
    title: "E-commerce Moda",
    description: "Plataforma completa de vendas online com sistema de pagamento integrado e gestão de estoque",
    tags: ["React", "Node.js", "Stripe"],
    category: "Loja Virtual",
    image: ecommerceImg,
    stats: "+150% vendas",
  },
  {
    title: "App Delivery",
    description: "Aplicativo de delivery com rastreamento em tempo real e notificações push",
    tags: ["React Native", "Firebase"],
    category: "Aplicativo Mobile",
    image: appImg,
    stats: "10k+ downloads",
  },
  {
    title: "Landing Page SaaS",
    description: "Página de conversão otimizada para startup de tecnologia com foco em leads",
    tags: ["Next.js", "Tailwind"],
    category: "Marketing",
    image: landingImg,
    stats: "45% conversão",
  },
  {
    title: "Portal Imobiliário",
    description: "Sistema completo de gestão e divulgação de imóveis com busca avançada",
    tags: ["React", "PostgreSQL"],
    category: "Website",
    image: realestateImg,
    stats: "2k+ imóveis",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Projetos que <span className="text-primary">Transformam</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos desenvolvidos com excelência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-background backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Stat Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30">
                    {project.stats}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-background" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-primary/30 text-xs">
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
