import { Hammer, ShieldCheck, Flame, Ruler, Factory, CircleDot } from "lucide-react";
import { ADVANTAGES } from "@/data/site";

const icons = {
  hammer: Hammer,
  shield: ShieldCheck,
  flame: Flame,
  ruler: Ruler,
  factory: Factory,
  wheel: CircleDot,
} as const;

const AdvantagesSection = () => (
  <section id="advantages" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-4xl font-bold uppercase text-center tracking-wide mb-10">
        Почему выбирают MANGAL<span className="text-primary">61</span>?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ADVANTAGES.map((a) => {
          const Icon = icons[a.icon];
          return (
            <div
              key={a.title}
              className="text-center p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">{a.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{a.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
