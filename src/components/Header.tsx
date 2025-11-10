import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-maple-digital.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Maple Digital - Soluções Digitais" 
              className="h-14 w-auto transition-opacity group-hover:opacity-80"
            />
            <span className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              Soluc Digital
            </span>
          </a>

          {/* Desktop Menu - Centralizado */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Portfólio
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Botão CTA - Direita */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-background shadow-lg shadow-primary/30" 
              size="sm"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-8">
          <a
            href="#inicio"
            className="text-xl text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="#servicos"
            className="text-xl text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="text-xl text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfólio
          </a>
          <a
            href="#sobre"
            className="text-xl text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-xl text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
          <Button className="w-full bg-primary hover:bg-primary/90 text-background" onClick={() => setIsMenuOpen(false)}>
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
