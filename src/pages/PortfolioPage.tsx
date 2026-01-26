import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Clock, CheckCircle2, MessageSquare, Palette, Code2, Rocket, Users, Zap, Shield, Heart, Sparkles } from "lucide-react";
import barbeariaHenriqueImg from "@/assets/portfolio-barbearia-henrique.png";
import flatRainhaImg from "@/assets/portfolio-flat-rainha.png";
import sorveteMuitoBomImg from "@/assets/portfolio-sorvete-muito-bom.png";
import lavajatoImg from "@/assets/portfolio-lavajato-brilho-maximo.png";
import heroDevicesImg from "@/assets/hero-portfolio-devices.png";
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
  const scrollToContact = () => {
    window.location.href = "/#contato";
  };
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Devices Image */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden min-h-[85vh]">
        {/* Clean Dark Background */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/5" />
        
        {/* Subtle Glow Behind Image Area */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />


        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-in">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>

          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
            
            {/* Left Column - Text Content */}
            <div className="text-left relative z-20 order-2 lg:order-1">
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
              <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-fade-in" style={{
              animationDelay: "300ms",
              animationFillMode: "both"
            }}>
                Iniciar Projeto
              </Button>
            </div>

            {/* Right Column - Devices Image with Enhanced Effects */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{
            animationDelay: "150ms",
            animationFillMode: "both"
          }}>
              
              {/* Tech Grid Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {/* Diagonal Grid Lines */}
                <svg className="absolute w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600">
                  {/* Vertical lines */}
                  <line x1="100" y1="0" x2="100" y2="600" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="200" y1="0" x2="200" y2="600" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="400" y1="0" x2="400" y2="600" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="500" y1="0" x2="500" y2="600" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  {/* Horizontal lines */}
                  <line x1="0" y1="100" x2="600" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="0" y1="200" x2="600" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="0" y1="300" x2="600" y2="300" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="0" y1="400" x2="600" y2="400" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="0" y1="500" x2="600" y2="500" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  {/* Diagonal accent lines */}
                  <line x1="0" y1="0" x2="600" y2="600" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  <line x1="600" y1="0" x2="0" y2="600" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </svg>

                {/* Concentric circles */}
                <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/[0.08]" />
                <div className="absolute w-[380px] h-[380px] rounded-full border border-primary/[0.06]" />
                <div className="absolute w-[260px] h-[260px] rounded-full border border-primary/[0.1]" />
                
                {/* Corner accent squares */}
                <div className="absolute -top-8 right-8 w-24 h-24 border border-primary/[0.08] rotate-45" />
                <div className="absolute bottom-12 -left-8 w-16 h-16 border border-primary/[0.06] rotate-[30deg]" />
                
                {/* Tech dots at intersections */}
                <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-primary/20" />
                <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-primary/25" />
                <div className="absolute bottom-[25%] left-[25%] w-2.5 h-2.5 rounded-full bg-primary/15" />
                <div className="absolute bottom-[35%] right-[30%] w-1.5 h-1.5 rounded-full bg-primary/20" />
              </div>

              {/* Devices Image */}
              <div className="relative z-10">
                
                <img alt="Maple Digital - Sites responsivos em múltiplos dispositivos" className="relative w-full max-w-2xl h-auto object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.85)]" src="/lovable-uploads/35a372ca-4493-4152-864a-5d814d210d97.png" />
                
                {/* Enhanced Projected Shadow - Stronger */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-black/80 blur-[50px] rounded-[100%]" />
                {/* Secondary Shadow Layer */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/70 blur-2xl rounded-[100%]" />
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
              <Sparkles className="w-3 h-3 mr-1" />
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