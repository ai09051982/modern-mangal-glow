import { Phone, MessageCircle, BadgeRussianRuble } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/data/site";

const ContactsSection = () => (
  <section id="contacts" className="py-16 md:py-24 bg-gradient-warm scroll-mt-16">
    <div className="container mx-auto px-4">
      <SectionHeading title="Свяжитесь с нами" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl bg-card border border-border p-6 md:p-8 space-y-7">
          <a href={`tel:${PHONE_TEL}`} className="flex gap-4 group">
            <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span>
              <span className="block font-display text-xl font-bold group-hover:text-primary transition-colors">
                {PHONE_DISPLAY}
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Звоните нам или пишите в WhatsApp
              </span>
            </span>
          </a>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex gap-4 group">
            <MessageCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span>
              <span className="block font-display text-lg font-bold group-hover:text-primary transition-colors">
                WhatsApp
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                Нажмите на кнопку и напишите нам в WhatsApp
              </span>
            </span>
          </a>

          <div className="flex gap-4">
            <BadgeRussianRuble className="w-6 h-6 text-primary shrink-0 mt-1" />
            <span>
              <span className="block font-display text-lg font-bold">Цена индивидуальная</span>
              <span className="block text-sm text-muted-foreground mt-1">
                Стоимость зависит от размера, комплектации и ваших пожеланий.
              </span>
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border min-h-[260px]">
          <img
            src="https://mangal61.ru/_files/Image/img_1494_k.jpg"
            alt="Шашлык на мангале MANGAL61"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactsSection;
