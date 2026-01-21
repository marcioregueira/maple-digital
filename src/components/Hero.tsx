import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-landing-pages.png";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />

      {/* Animated Accent Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: "1s"
    }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Transformando Ideias em Realidade Digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in text-white">
            Criamos sua{" "}
            <span className="text-primary">Presença Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>Sites e Landing Pages personalizados que impulsionam seu negócio para o próximo nível</p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{
          animationDelay: "0.15s"
        }}>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm md:text-base">Design Moderno</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm md:text-base">100% Responsivo</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm md:text-base">SEO Otimizado</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm md:text-base">Entrega Rápida</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-background shadow-2xl shadow-primary/30" onClick={() => document.getElementById("contato")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Começar Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10" onClick={() => document.getElementById("portfolio")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Ver Portfólio
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;