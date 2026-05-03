import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Reilyy",
    content: "Stronka działa super płynnie, wszystko jest czytelne i intuicyjne. Bardzo dobra robota!",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  },
  {
    name: "KacperX",
    content: "Grafiki są absolutnie świetne, nowoczesne i idealnie dopasowane do marki.",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  },
  {
    name: "MajaDev",
    content: "Strona wygląda profesjonalnie i ładuje się bardzo szybko, klienci to zauważają.",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  },
  {
    name: "TomekPro",
    content: "Grafiki na stronie są mega estetyczne, wszystko ma spójny i nowoczesny styl.",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  },
  {
    name: "KasiaNova",
    content: "Stronka jest dobrze zaprojektowana i bardzo wygodna w użytkowaniu.",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  },
  {
    name: "MichalZ",
    content: "Grafiki robią ogromne wrażenie, widać dbałość o każdy szczegół wizualny.",
    rating: 5,
            avatar: "https://cdn.discordapp.com/attachments/1499723361259880488/1499760881276293180/ChatGPT_Image_1_maj_2026_15_14_06.png?ex=69f5f8aa&is=69f4a72a&hm=45b9a3cb45ae586d48011f4f316a7066c6f5609305080bc84e5cef0febbeec94&"
  }
];

const Testimonials = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="opinie" className="py-24 relative overflow-hidden">
      <div className="container px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Co mówią <span className="gradient-text">klienci</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Opinie naszych zadowolonych klientów mówią same za siebie.
          </p>
        </div>
      </div>

      {/* cos */}
      <div className="relative">
        <div className="flex animate-slide-left">
          {doubledTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 mx-3 min-w-[350px] max-w-[350px] flex-shrink-0"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradienty */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
