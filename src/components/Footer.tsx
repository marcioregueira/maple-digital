import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-maple-digital-new.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook"
  }, {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  }];
  const quickLinks = [{
    name: "Início",
    href: "#inicio"
  }, {
    name: "Serviços",
    href: "#servicos"
  }, {
    name: "Portfólio",
    href: "#portfolio"
  }, {
    name: "Sobre",
    href: "#sobre"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  return <footer className="relative bg-black/90 border-t border-border overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Maple Digital" className="h-12 w-auto" />
              <h3 className="text-3xl font-bold text-primary">
                Maple Digital
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais de sucesso. Criando sites, 
              landing pages e aplicativos para pequenos negócios e empreendedores.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@mapledigital.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>contato@mapledigital.com</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>(11) 99999-9999</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Recife, PE - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Redes Sociais</h4>
            <p className="text-muted-foreground mb-6">
              Siga-nos nas redes sociais e fique por dentro das novidades
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-xl bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 group">
                  <social.icon className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} <span className="text-primary font-semibold">Maple Digital</span> – Soluções Digitais. 
              Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;