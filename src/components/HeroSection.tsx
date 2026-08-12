import { MessageCircle, Images } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
    <img
      src={heroBg}
      alt="Мангал-смокер ручной работы с горящими углями"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

    <div className="relative z-10 container mx-auto px-4 py-20">
      <p className="text-primary font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-5">
        Ручная работа. Надёжность на годы.
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[1.05] max-w-2xl">
        Грили и смокеры
        <br />
        <span className="text-primary">на угле</span>
        <br />
        <span className="text-primary">по индивидуальным</span>
        <br />
        <span className="text-primary">размерам</span>
      </h1>
      <p className="mt-6 text-base md:text-lg text-secondary-foreground max-w-lg leading-relaxed">
        Мангалы, смокеры, коптильни и барбекю от производителя. Идеальны для дома, дачи,
        гастрономии, мероприятий и настоящего вкуса.
      </p>
      <div className="mt-9 flex flex-col sm:flex-row gap-4">
        <a
          href="#form"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-bold uppercase text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-warm"
        >
          <MessageCircle className="w-4 h-4" />
          Продукт на заказ
        </a>
        <a
          href="#gallery"
          className="inline-flex items-center justify-center gap-2 border border-border bg-card/60 backdrop-blur-sm px-6 py-3.5 rounded-md font-bold uppercase text-sm tracking-wide hover:border-primary/50 transition-colors"
        >
          <Images className="w-4 h-4" />
          Смотреть галерею
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
