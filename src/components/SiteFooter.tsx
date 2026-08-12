import { Phone, MessageCircle, Instagram } from "lucide-react";
import { NAV_ITEMS, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

const SiteFooter = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <span className="font-display text-2xl font-bold tracking-wide">
          MANGAL<span className="text-primary">61</span>
        </span>
        <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
          Ручная работа. Высокое качество. Грили, смокеры, мангалы и коптильни для вашего отдыха и
          удовольствия.
        </p>
        <div className="flex gap-4 mt-5 text-muted-foreground">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href={`tel:${PHONE_TEL}`} aria-label="Телефон" className="hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href="https://mangal61.ru" target="_blank" rel="noreferrer" aria-label="Профиль" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-wide mb-4">Навигация</h3>
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-wide mb-4">Правовая информация</h3>
        <ul className="space-y-2">
          <li>
            <a href="#contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a href="#contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-10 pt-6 border-t border-border text-center md:text-right">
      <p className="text-xs text-muted-foreground">© 2026 MANGAL61. Все права защищены.</p>
    </div>
  </footer>
);

export default SiteFooter;
