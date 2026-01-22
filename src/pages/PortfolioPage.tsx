import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParallax } from "@/hooks/use-parallax";
import { ArrowLeft, ExternalLink, Clock, CheckCircle2, MessageSquare, Palette, Code2, Rocket, Users, Award, Zap, Shield, Heart, Sparkles } from "lucide-react";
import barbeariaHenriqueImg from "@/assets/portfolio-barbearia-henrique.png";
import flatRainhaImg from "@/assets/portfolio-flat-rainha.png";
import sorveteMuitoBomImg from "@/assets/portfolio-sorvete-muito-bom.png";
import lavajatoImg from "@/assets/portfolio-lavajato-brilho-maximo.png";
interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
  duration: string;
  technologies: string[];
}
const projects: Project[] = [{
  name: "Barbearia Henrique Dias",
  description: "Sistema web completo para uma barbearia, combinando uma landing page elegante com um sistema de gestão administrativa robusto. Design moderno com foco na experiência do usuário.",
  url: "https://henriquediasbarber.lovable.app",
  image: barbeariaHenriqueImg,
  category: "Landing Page",
  duration: "2 semanas",
  technologies: ["React", "Tailwind CSS", "TypeScript"]
}, {
  name: "Sorvete Muito Bom",
  description: "Landing page moderna para sorveteria artesanal, com design vibrante, animações suaves e integração com redes sociais. Foco em destacar os produtos e atrair clientes.",
  url: "https://site-sorvete-muito-bom.lovable.app",
  image: sorveteMuitoBomImg,
  category: "Landing Page",
  duration: "1 semana",
  technologies: ["React", "Tailwind CSS", "Framer Motion"]
}, {
  name: "Lavajato Brilho Máximo",
  description: "Landing page premium para lavajato automotivo, com design moderno em azul e amarelo, animações elegantes e integração com WhatsApp para agendamentos.",
  url: "https://lavajato-brilho-maximo.vercel.app/",
  image: lavajatoImg,
  category: "Landing Page",
  duration: "1 semana",
  technologies: ["React", "Tailwind CSS", "TypeScript"]
}, {
  name: "Flat Rainha da Serra",
  description: "Plataforma institucional e de reservas para o Flat Rainha da Serra, oferecendo uma experiência completa para hóspedes com sistema de reservas integrado e galeria de fotos.",
  url: "https://flatrainhadaserra.com.br",
  image: flatRainhaImg,
  category: "Site Institucional",
  duration: "3 semanas",
  technologies: ["React", "Tailwind CSS", "Supabase"]
}];
const processSteps = [{
  icon: MessageSquare,
  title: "Briefing",
  description: "Entendemos seu negócio, objetivos e público-alvo para criar uma solução sob medida."
}, {
  icon: CheckCircle2,
  title: "Planejamento",
  description: "Definimos escopo, estrutura e cronograma do projeto de forma transparente."
}, {
  icon: Palette,
  title: "Design",
  description: "Criamos layouts modernos e funcionais, sempre com sua aprovação antes de codificar."
}, {
  icon: Code2,
  title: "Desenvolvimento",
  description: "Codificamos com tecnologias modernas, garantindo qualidade e performance."
}, {
  icon: Rocket,
  title: "Entrega",
  description: "Publicamos seu projeto e oferecemos treinamento para você gerenciar o conteúdo."
}];
const services = [{
  title: "Sites Institucionais",
  description: "Websites profissionais que representam sua marca na internet, com design exclusivo e otimizados para buscadores.",
  features: ["Design responsivo", "SEO otimizado", "Páginas ilimitadas", "Formulário de contato", "Integração com redes sociais"],
  timeline: "2-4 semanas"
}, {
  title: "Landing Pages",
  description: "Páginas de alta conversão focadas em capturar leads e converter visitantes em clientes.",
  features: ["Design focado em conversão", "Carregamento rápido", "CTA estratégicos", "Integração WhatsApp", "Analytics integrado"],
  timeline: "1-2 semanas"
}, {
  title: "Manutenção e Suporte",
  description: "Mantemos seu site sempre atualizado, seguro e funcionando perfeitamente.",
  features: ["Atualizações de segurança", "Backup regular", "Suporte prioritário", "Alterações de conteúdo", "Monitoramento 24/7"],
  timeline: "Contrato mensal"
}];
const differentials = [{
  icon: Users,
  title: "Atendimento Personalizado",
  description: "Cada projeto é único. Trabalhamos lado a lado com você em todas as etapas."
}, {
  icon: Zap,
  title: "Entrega Rápida",
  description: "Cumprimos prazos rigorosamente, sem sacrificar a qualidade do trabalho."
}, {
  icon: Shield,
  title: "Código de Qualidade",
  description: "Utilizamos as melhores práticas e tecnologias modernas em todos os projetos."
}, {
  icon: Heart,
  title: "Suporte Contínuo",
  description: "Não abandonamos você após a entrega. Estamos aqui para ajudar sempre."
}];

// Stats removed - using floating image instead

const PortfolioPage = () => {
  const scrollY = useParallax();
  
  const scrollToContact = () => {
    window.location.href = "/#contato";
  };
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Two Column Layout with Conveyor Belt */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden min-h-[85vh]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-in">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>

          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center min-h-[60vh]">
            
            {/* Left Column - Text Content */}
            <div className="text-left relative z-20">
              <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 animate-fade-in">
                <Sparkles className="w-3 h-3 mr-1" />
                Portfólio Completo
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-slide-up" style={{
                animationDelay: "100ms",
                animationFillMode: "both"
              }}>
                Transformamos <span className="text-primary">ideias</span> em realidade digital
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{
                animationDelay: "200ms",
                animationFillMode: "both"
              }}>
                Conheça nosso trabalho, processo de desenvolvimento e os diferenciais que fazem da Maple Digital a escolha certa para seu projeto.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-fade-in"
                style={{ animationDelay: "300ms", animationFillMode: "both" }}
              >
                Iniciar Projeto
              </Button>
            </div>

            {/* Right Column - Static Floating Cards */}
            <div 
              className="relative h-[400px] md:h-[500px] lg:h-[600px]"
              style={{ perspective: "1500px" }}
            >
              {/* Card 1 - Top Left - Large */}
              <div 
                className="absolute top-4 left-0 md:left-4 lg:left-8 w-[160px] md:w-[200px] lg:w-[260px] z-30 hover:scale-105 transition-transform duration-300"
                style={{ 
                  transform: `rotateY(-8deg) rotateX(5deg) translateY(${scrollY * 0.02}px)`,
                  transformStyle: "preserve-3d",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 25px -8px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                  <div className="bg-muted/80 px-2 py-1.5 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <img src={barbeariaHenriqueImg} alt="Barbearia Henrique Dias" className="w-full h-[120px] md:h-[150px] lg:h-[180px] object-cover object-top" />
                </div>
              </div>

              {/* Card 2 - Top Right - Medium */}
              <div 
                className="absolute top-8 md:top-12 right-4 md:right-8 lg:right-12 w-[140px] md:w-[180px] lg:w-[220px] z-20 hover:scale-105 transition-transform duration-300"
                style={{ 
                  transform: `rotateY(12deg) rotateX(-3deg) translateY(${scrollY * 0.03}px)`,
                  transformStyle: "preserve-3d",
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 10px 20px -6px rgba(0, 0, 0, 0.35), 0 4px 10px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                  <div className="bg-muted/80 px-2 py-1.5 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <img src={sorveteMuitoBomImg} alt="Sorvete Muito Bom" className="w-full h-[100px] md:h-[130px] lg:h-[160px] object-cover object-top" />
                </div>
              </div>

              {/* Card 3 - Center Right - Large (Main Focus) */}
              <div 
                className="absolute top-1/3 right-0 md:right-4 w-[170px] md:w-[220px] lg:w-[280px] z-40 hover:scale-105 transition-transform duration-300"
                style={{ 
                  transform: `rotateY(15deg) rotateX(8deg) translateY(${scrollY * 0.025}px)`,
                  transformStyle: "preserve-3d",
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.55), 0 15px 30px -10px rgba(0, 0, 0, 0.45), 0 8px 15px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                  <div className="bg-muted/80 px-2 py-1.5 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <img src={lavajatoImg} alt="Lavajato Brilho Máximo" className="w-full h-[130px] md:h-[160px] lg:h-[200px] object-cover object-top" />
                </div>
              </div>

              {/* Card 4 - Bottom Left - Medium */}
              <div 
                className="absolute bottom-16 md:bottom-20 left-8 md:left-16 lg:left-20 w-[130px] md:w-[170px] lg:w-[200px] z-10 hover:scale-105 transition-transform duration-300"
                style={{ 
                  transform: `rotateY(-5deg) rotateX(10deg) translateY(${scrollY * 0.035}px)`,
                  transformStyle: "preserve-3d",
                  boxShadow: "0 18px 35px -8px rgba(0, 0, 0, 0.4), 0 8px 18px -5px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)"
                }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                  <div className="bg-muted/80 px-2 py-1.5 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <img src={flatRainhaImg} alt="Flat Rainha da Serra" className="w-full h-[90px] md:h-[120px] lg:h-[140px] object-cover object-top" />
                </div>
              </div>

              {/* Card 5 - Bottom Right - Small */}
              <div 
                className="absolute bottom-8 md:bottom-12 right-12 md:right-20 lg:right-24 w-[120px] md:w-[150px] lg:w-[180px] z-25 hover:scale-105 transition-transform duration-300"
                style={{ 
                  transform: `rotateY(20deg) rotateX(5deg) translateY(${scrollY * 0.04}px)`,
                  transformStyle: "preserve-3d",
                  boxShadow: "0 22px 45px -12px rgba(0, 0, 0, 0.48), 0 10px 22px -7px rgba(0, 0, 0, 0.38), 0 5px 10px rgba(0, 0, 0, 0.18)"
                }}
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                  <div className="bg-muted/80 px-2 py-1.5 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <img src={sorveteMuitoBomImg} alt="Sorvete Muito Bom" className="w-full h-[80px] md:h-[100px] lg:h-[120px] object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img alt="Fundador Maple Digital" className="relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl" src="/lovable-uploads/fb47dce4-c14c-448b-b19a-5474fef998a5.png" />
            </div>

            <div>
              <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
                Sobre Nós
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Quem é a <span className="text-primary">Maple Digital</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Sou Márcio Regueira, fundador e desenvolvedor da Maple Digital. Ajudo pequenos negócios e empreendedores a conquistarem uma presença digital profissional, moderna e eficiente.</p>
                <p>A Maple Digital surgiu da vontade de tornar a tecnologia acessível, sem complicação e sem soluções genéricas. Cada projeto é pensado de forma estratégica, respeitando a identidade e os objetivos do seu negócio.</p>
                <p>Aqui, você tem atendimento personalizado e soluções feitas sob medida do planejamento à entrega final, tudo é desenvolvido com foco em resultado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Metodologia
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Nosso <span className="text-primary">Processo</span> de Trabalho
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um fluxo de trabalho transparente e colaborativo para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => <div key={index} className="relative">
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2">Etapa {index + 1}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              O que <span className="text-primary">Oferecemos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => <Card key={index} className="bg-card/50 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-primary mb-6">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.timeline}</span>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Projetos <span className="text-primary">Desenvolvidos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que já desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => <Card key={index} className="group overflow-hidden bg-card/50 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-background">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-background" onClick={() => window.open(project.url, "_blank")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visitar Site
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Diferenciais
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Por que <span className="text-primary">nos escolher</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna a escolha ideal para o seu projeto digital
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {differentials.map((diff, index) => <Card key={index} className="bg-card/50 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <diff.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground">{diff.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              <Award className="w-3 h-3 mr-1" />
              Vamos Conversar
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Pronto para transformar sua <span className="text-primary">ideia em realidade</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Entre em contato agora e vamos começar a construir o projeto dos seus sonhos. 
              O primeiro passo é uma conversa sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background shadow-lg shadow-primary/30" onClick={scrollToContact}>
                Solicitar Orçamento Gratuito
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open("https://wa.me/5581999999999", "_blank")}>
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PortfolioPage;