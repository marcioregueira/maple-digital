import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Criação de Sites Profissionais",
    description: "Sites modernos, responsivos e otimizados para conversão. Transforme sua presença digital com tecnologia de ponta.",
    cta: "Solicitar Orçamento"
  },
  {
    title: "Landing Pages de Alta Conversão",
    description: "Páginas estratégicas desenvolvidas para maximizar seus resultados e capturar mais leads para o seu negócio.",
    cta: "Começar Agora"
  },
  {
    title: "Desenvolvimento de Aplicativos",
    description: "Apps nativos e híbridos para iOS e Android. Leve sua ideia do papel para a realidade digital.",
    cta: "Fale Conosco"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero content with slider */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 absolute inset-0 translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                {slide.title.split(" ").map((word, i) => {
                  const isHighlight = word === "Profissionais" || word === "Conversão" || word === "Aplicativos";
                  return (
                    <span key={i}>
                      {isHighlight ? (
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {word}
                        </span>
                      ) : (
                        word
                      )}{" "}
                    </span>
                  );
                })}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:shadow-glow" onClick={scrollToContact}>
                  {slide.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2" onClick={() => {
                  const element = document.getElementById("portfolio");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}>
                  Ver Portfólio
                </Button>
              </div>
            </div>
          ))}

          {/* Slide navigation dots */}
          <div className="flex justify-center gap-3 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-primary"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
