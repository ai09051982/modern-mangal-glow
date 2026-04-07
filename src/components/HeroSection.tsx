import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Мангал с горящими углями"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Мангал, барбекю,
          <br />
          <span className="text-gradient-fire">шашлычница</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-foreground max-w-2xl mx-auto mb-4">
          гриль, жаровня, коптильня в Москве
        </p>
        <p className="text-muted-foreground text-lg mb-10">
          Оборудование от производителя для дома, дачи, кафе и ресторана
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-gradient-fire text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-warm"
          >
            Смотреть продукцию
          </a>
          <a
            href="tel:89287639058"
            className="inline-flex items-center justify-center gap-2 border border-border bg-card/50 backdrop-blur-sm text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:border-primary/40 transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            8 (928) 763-90-58
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
