import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid patternn */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(hsl(250 50% 50% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(250 50% 50% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Tworzymy przyszłość kodu</span>
        </div>

        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Portfolio
          <span className="block gradient-text">batcode</span>
        </h1>

        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Projektujemy i tworzymy nowoczesne rozwiązania, 
          które wyróżniają Twoją markę w świecie internetu.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="#projekty" 
            className="px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-effect"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Zobacz projekty
          </a>
          <a 
            href="#kontakt" 
            className="px-8 py-4 rounded-xl font-semibold glass-card hover-glow"
          >
            Skontaktuj się
          </a>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
