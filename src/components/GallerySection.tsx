import { useState } from "react";
import { Images } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/data/site";

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? GALLERY : GALLERY.slice(0, 8);

  return (
    <div id="gallery" className="rounded-xl bg-card border border-border p-6 md:p-8 scroll-mt-20">
      <SectionHeading title="Галерея работ" subtitle="Примеры наших мангалов, смокеров и барбекю." />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((src, i) => (
          <a
            key={src + i}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="aspect-[4/3] overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={src}
              alt={`Мангал ручной работы MANGAL61, фото ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </a>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide hover:border-primary/50 transition-colors"
          >
            <Images className="w-4 h-4 text-primary" />
            Смотреть все фото
          </button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
