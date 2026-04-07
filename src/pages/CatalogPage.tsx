import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const categories = [
  {
    title: 'Мангал - «СТАНДАРТ»',
    subtitle: "СТАНДАРТ",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_5_v2.jpg",
    href: "https://mangal61.ru/catalog/s/5",
  },
  {
    title: 'Мангал «С КОПТИЛЬНЕЙ»',
    subtitle: "Мангал коптильня",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_2_v1.jpg",
    href: "https://mangal61.ru/catalog/s/2",
  },
  {
    title: 'Мангал "Большой"',
    subtitle: "Мангал большой",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_3_v2.jpg",
    href: "https://mangal61.ru/catalog/s/3",
  },
  {
    title: "Мангал - Паровоз",
    subtitle: "Мангал в виде паровоза",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_4_v2_0.jpg",
    href: "https://mangal61.ru/catalog/s/4",
  },
];

const CatalogPage = () => {
  return (
    <PageLayout title="Купить мангал, коптильню в Москве">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.href}
            className="group flex gap-6 items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-warm"
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
              <img
                src={cat.image}
                alt={cat.subtitle}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">{cat.subtitle}</p>
              <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {cat.title}
              </h2>
              <span className="text-sm text-primary font-medium">подробнее →</span>
            </div>
          </a>
        ))}
      </div>
    </PageLayout>
  );
};

export default CatalogPage;
