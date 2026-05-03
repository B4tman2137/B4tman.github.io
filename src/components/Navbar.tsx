import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#uslugi", label: "Usługi" },
    { href: "#projekty", label: "Projekty" },
    { href: "#opinie", label: "Opinie" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card rounded-none border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-display font-bold gradient-text">
            Portfolio
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#kontakt"
              className="px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Rozpocznij
            </a>
          </div>

          {/* Mobilki menu buttonik */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobilki menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#kontakt"
              className="inline-block mt-4 px-5 py-2 rounded-lg font-semibold"
              style={{ background: 'var(--gradient-primary)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rozpocznij
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
