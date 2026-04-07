import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#" },
  { label: "Продукция", href: "#products" },
  { label: "Статьи", href: "#articles" },
  { label: "Вопрос-ответ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-bold text-gradient-fire">
          Шашлыкю
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:89287639058"
          className="hidden md:flex items-center gap-2 bg-gradient-fire text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          8 (928) 763-90-58
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-foreground hover:text-primary transition-colors border-b border-border last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:89287639058"
            className="mt-4 flex items-center justify-center gap-2 bg-gradient-fire text-primary-foreground px-5 py-3 rounded-lg font-semibold"
          >
            <Phone className="w-4 h-4" />
            8 (928) 763-90-58
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
