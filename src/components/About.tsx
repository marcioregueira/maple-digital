import { Target, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenvolvido pensando no sucesso do seu negócio",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Entregas rápidas sem comprometer a qualidade",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Suporte dedicado e comunicação transparente",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Tecnologias modernas e boas práticas de desenvolvimento",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Soluc Digital
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos uma empresa brasileira especializada em criar soluções digitais que transformam negócios. 
              Com anos de experiência no mercado, ajudamos empresas de todos os tamanhos a conquistarem sua 
              presença online de forma profissional e eficiente.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é tornar a tecnologia acessível e trazer resultados concretos para nossos clientes. 
              Do planejamento à entrega, cada projeto recebe atenção personalizada e é desenvolvido com as 
              melhores práticas do mercado.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Tecnologias Modernas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium">Equipe Experiente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Projetos Personalizados</span>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
