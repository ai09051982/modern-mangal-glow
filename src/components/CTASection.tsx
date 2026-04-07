import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contacts" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Купить мангал от <span className="text-gradient-fire">производителя</span>
        </h2>
        <p className="text-secondary-foreground text-lg max-w-2xl mx-auto mb-10">
          Купить мангал, купить коптильню и гриль от производителя можно позвонив по контактным телефонам
        </p>
        <a
          href="tel:89287639058"
          className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground px-8 py-4 rounded-xl font-bold text-xl hover:opacity-90 transition-opacity shadow-warm"
        >
          <Phone className="w-6 h-6" />
          8 (928) 763-90-58
        </a>
      </div>
    </section>
  );
};

export default CTASection;
