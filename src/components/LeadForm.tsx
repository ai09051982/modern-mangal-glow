import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PRODUCTS } from "@/data/site";

const LeadForm = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div id="form" className="rounded-xl bg-card border border-border p-6 md:p-8 scroll-mt-20">
      <SectionHeading
        title="Отправить заявку"
        subtitle="Расскажите нам о своих пожеланиях и мы свяжемся с вами в ближайшее время."
      />

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold mb-1.5">
              Ваше имя <span className="text-primary">*</span>
            </label>
            <input id="name" name="name" required placeholder="Введите имя" className={field} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold mb-1.5">
              Телефон <span className="text-primary">*</span>
            </label>
            <input id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" className={field} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold mb-1.5">
                E-mail
              </label>
              <input id="email" name="email" type="email" placeholder="Введите e-mail" className={field} />
            </div>
            <div>
              <label htmlFor="model" className="block text-xs font-semibold mb-1.5">
                Желаемая модель
              </label>
              <select id="model" name="model" className={field} defaultValue="">
                <option value="">Выберите модель</option>
                {PRODUCTS.map((p) => (
                  <option key={p.title} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold mb-1.5">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Опишите ваши пожелания, размеры, материалы..."
              className={`${field} resize-none h-[calc(100%-1.75rem)]`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md text-sm font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          Отправить заявку
        </button>

        {sent && (
          <p className="text-center text-sm text-primary">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
