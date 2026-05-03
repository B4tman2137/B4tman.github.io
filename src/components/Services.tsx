import { Code, Palette, Rocket, Smartphone, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Szablony Discord",
    description: "Estetyczne i gotowe do użycia szablony serwerów Discord z profesjonalnym wyglądem."
  },
  {
    icon: Code,
    title: "Bot Discord",
    description: "Tworzenie nowoczesnych i wydajnych botów Discord dopasowanych do Twojego serwera."
  },
  {
    icon: Globe,
    title: "Grafiki",
    description: "Profesjonalne grafiki dopasowane do Twojej marki lub serwera."
  },
  {
    icon: Rocket,
    title: "Strona",
    description: "Nowoczesne, szybkie i responsywne strony internetowe dopasowane do Twoich potrzeb."
  },
  {
    icon: Smartphone,
    title: "Pluginy",
    description: "Funkcjonalne pluginy rozszerzające możliwości Twojego serwera lub aplikacji."
  },
  {
    icon: Shield,
    title: "Paczki",
    description: "Zestawy gotowych rozwiązań i zasobów do Twojego projektu."
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Czym się <span className="gradient-text">zajmujemy?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi z zakresu tworzenia stron i aplikacji internetowych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
