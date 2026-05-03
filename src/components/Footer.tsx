import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontakt" className="py-16 border-t border-border/50">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brandy */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Portfolio batcode
            </h3>
            <p className="text-muted-foreground mb-6">
              Tworzymy nowoczesne rozwiązania cyfrowe, które pomagają Twojej marce wyróżnić się w sieci.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-card hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* linkibroski */}
          <div>
            <h4 className="font-display font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-3">
              <li><a href="#uslugi" className="text-muted-foreground hover:text-primary transition-colors">Usługi</a></li>
              <li><a href="#projekty" className="text-muted-foreground hover:text-primary transition-colors">Projekty</a></li>
              <li><a href="#opinie" className="text-muted-foreground hover:text-primary transition-colors">Opinie</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Servics */}
          <div>
            <h4 className="font-display font-semibold mb-4">Usługi</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Strony internetowe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aplikacje webowe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* kontakt */}
          <div>
            <h4 className="font-display font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                batcode.pl@gmail.com
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Warszawa, Polska
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 batcode Portfolio. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
