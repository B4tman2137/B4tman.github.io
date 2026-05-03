import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nowoczesna strona www",
    category: "Strona www",
    description: "Responsywna i szybka strona internetowa stworzona z myślą o nowoczesnym designie i użytkownikach.",
    image: "https://cdn.discordapp.com/attachments/1492323033942196394/1499480684325109810/image.png?ex=69f59c76&is=69f44af6&hm=17000b4a1d4feb0b1ce5c86dde672a60da760105d09ba8fe4dc2906a3f89a24f&"
  },
];

const Projects = () => {
  return (
    <section id="projekty" className="py-24 relative">
      {/* Backgroundy */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nasze <span className="gradient-text">Projekty</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zobacz wybrane realizacje, które stworzyliśmy dla naszych klientów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden group cursor-pointer hover-glow"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <button className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
