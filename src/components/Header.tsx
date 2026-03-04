import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuLinks = isHomePage ? (
    <>
      <a href="#inicio" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Início
      </a>
      <a href="#servicos" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Serviços
      </a>
      <Link to="/portfolio" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Portfólio
      </Link>
      <a href="#sobre" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Sobre
      </a>
      <a href="#contato" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Contato
      </a>
    </>
  ) : (
    <>
      <Link to="/" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Início
      </Link>
      <Link to="/#servicos" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Serviços
      </Link>
      <Link to="/portfolio" className="text-xl text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Portfólio
      </Link>
      <Link to="/#sobre" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Sobre
      </Link>
      <Link to="/#contato" className="text-xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/30" onClick={() => setIsMenuOpen(false)}>
        Contato
      </Link>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img alt="Maple Digital - Soluções Digitais" className="h-16 w-auto transition-opacity group-hover:opacity-80" src="/lovable-uploads/e49d8d50-769f-440f-bd25-4ea29beb3d08.png" />
              <span className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                Maple Digital
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {isHomePage ? (
                <>
                  <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">Início</a>
                  <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">Serviços</a>
                  <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Portfólio</Link>
                  <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">Sobre</a>
                  <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">Contato</a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Início</Link>
                  <Link to="/#servicos" className="text-foreground hover:text-primary transition-colors font-medium">Serviços</Link>
                  <Link to="/portfolio" className="text-primary font-medium">Portfólio</Link>
                  <Link to="/#sobre" className="text-foreground hover:text-primary transition-colors font-medium">Sobre</Link>
                  <Link to="/#contato" className="text-foreground hover:text-primary transition-colors font-medium">Contato</Link>
                </>
              )}
            </div>

            <div className="hidden md:block">
              <Button
                className="bg-primary hover:bg-primary/90 text-background shadow-lg shadow-primary/30"
                size="sm"
                onClick={() => {
                  if (isHomePage) {
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contato";
                  }
                }}
              >
                Solicitar Orçamento
              </Button>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - fora do header para não herdar transparência */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 z-[60]" onClick={() => setIsMenuOpen(false)} />
      )}
      <div
        className={`md:hidden fixed top-[88px] left-0 right-0 bottom-0 z-[70] bg-[#0A0A0A] border-t border-primary/20 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-0 p-8">
          {menuLinks}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-background mt-6"
            onClick={() => {
              setIsMenuOpen(false);
              if (isHomePage) {
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#contato";
              }
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
