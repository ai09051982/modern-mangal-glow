const categories = [
  {
    title: "СТАНДАРТ",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_5_v2.jpg",
    href: "https://mangal61.ru/catalog/s/5",
  },
  {
    title: "Мангал коптильня",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_2_v1.jpg",
    href: "https://mangal61.ru/catalog/s/2",
  },
  {
    title: "Мангал большой",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_3_v2.jpg",
    href: "https://mangal61.ru/catalog/s/3",
  },
  {
    title: "Мангал в виде паровоза",
    image: "https://mangal61.ru/_files/Moduls/catalog/images/T_catalog_sections_F_image1_I_4_v2_0.jpg",
    href: "https://mangal61.ru/catalog/s/4",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Наша <span className="text-gradient-fire">продукция</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg">
          Мангалы, коптильни, гриль, барбекю, жаровня от производителя
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl shadow-card bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <span className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-1 inline-block">
                  Подробнее →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
