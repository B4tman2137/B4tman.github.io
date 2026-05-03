import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ile trwa realizacja szablonu Discord?",
    answer: "Od 1 do 24 godzin."
  },
  {
    question: "Ile trwa realizacja bota Discord?",
    answer: "Od 12 do 48 godzin."
  },
  {
    question: "Ile trwa wykonanie grafik?",
    answer: "Od 1 do 24 godzin."
  },
  {
    question: "Ile trwa stworzenie strony internetowej?",
    answer: "Od 48 do 72 godzin."
  },
  {
    question: "Ile trwa realizacja pluginów?",
    answer: "Od 1 tygodnia do 4 tygodni."
  },
  {
    question: "Ile trwa realizacja paczek?",
    answer: "Od 2 tygodni do 6 tygodni."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Często zadawane <span className="gradient-text">pytania</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania o nasze usługi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
