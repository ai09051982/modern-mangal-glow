import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="leading-none">
          <span className="font-display text-2xl font-bold tracking-wide">
            MANGAL<span className="text-primary">61</span>
          </span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-primary/80">
            грили от производителя
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#form"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Отправить заявку
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-border last:border-0 text-sm font-semibold uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-bold"
          >
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
