import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Eye } from "lucide-react";
import ecommerceImg from "@/assets/portfolio-ecommerce.png";
import appImg from "@/assets/portfolio-app.png";
import landingImg from "@/assets/portfolio-landing.png";
import realestateImg from "@/assets/portfolio-institutional.png";

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

interface PortfolioCategory {
  title: string;
  description: string;
  category: string;
  image: string;
  projects: Project[];
}

const portfolioData: PortfolioCategory[] = [
  {
    title: "E-commerce Personalizado",
    description: "Lojas virtuais completas com sistema de pagamento, gestão de estoque e painel administrativo",
    category: "Loja Virtual",
    image: ecommerceImg,
    projects: [
      {
        name: "Em breve",
        description: "Novos projetos serão adicionados em breve",
        url: "",
        image: ecommerceImg,
      },
    ],
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android com design moderno e funcionalidades avançadas",
    category: "Aplicativo",
    image: appImg,
    projects: [
      {
        name: "Em breve",
        description: "Novos projetos serão adicionados em breve",
        url: "",
        image: appImg,
      },
    ],
  },
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão para captura de leads e lançamentos de produtos ou serviços",
    category: "Marketing",
    image: landingImg,
    projects: [
      {
        name: "Em breve",
        description: "Novos projetos serão adicionados em breve",
        url: "",
        image: landingImg,
      },
    ],
  },
  {
    title: "Sites Institucionais",
    description: "Websites profissionais para empresas com design exclusivo e otimização para buscadores",
    category: "Website",
    image: realestateImg,
    projects: [
      {
        name: "Em breve",
        description: "Novos projetos serão adicionados em breve",
        url: "",
        image: realestateImg,
      },
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Soluções</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            O que podemos <span className="text-primary">criar para você</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções digitais personalizadas para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.map((category, index) => (
            <Card
              key={index}
              onClick={() => setSelectedCategory(category)}
              className="group relative overflow-hidden border border-border bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-background backdrop-blur-sm">
                    {category.category}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Eye className="w-8 h-8 text-background" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl text-foreground">
              {selectedCategory?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Confira alguns projetos que desenvolvemos nesta categoria
            </DialogDescription>
          </DialogHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {selectedCategory?.projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border bg-background/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">{project.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  {project.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Site
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;