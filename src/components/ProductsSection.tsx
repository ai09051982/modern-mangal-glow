import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PRODUCTS } from "@/data/site";

const ProductsSection = () => (
  <section id="products" className="py-16 md:py-24 bg-gradient-warm">
    <div className="container mx-auto px-4">
      <SectionHeading title="Наша продукция" subtitle="Качество, проверенное временем и огнём." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {PRODUCTS.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors shadow-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.slug}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-base font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{p.text}</p>
              <ul className="mt-4 space-y-1.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-secondary-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className="mt-5 block text-center bg-primary text-primary-foreground py-2.5 rounded-md text-[11px] font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
              >
                Отправить заявку
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
