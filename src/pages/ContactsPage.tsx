import PageLayout from "@/components/PageLayout";
import { Phone } from "lucide-react";

const ContactsPage = () => {
  return (
    <PageLayout title="Контакты">
      <div className="max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl bg-card border border-border mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            По вопросам приобретения мангалов обращайтесь по телефонам:
          </h2>
          <div className="space-y-3">
            <a
              href="tel:89287639058"
              className="flex items-center gap-3 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              8-928-763-90-58 — Москва
            </a>
            <a
              href="tel:89287639058"
              className="flex items-center gap-3 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              8-928-763-90-58
            </a>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card border border-border">
          <h2 className="font-display text-2xl font-bold text-gradient-fire mb-2">
            Отправка сообщения в компанию
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Все поля являются обязательными для заполнения
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">ФИО</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Телефон</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Текст сообщения</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="button"
              className="bg-gradient-fire text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactsPage;
