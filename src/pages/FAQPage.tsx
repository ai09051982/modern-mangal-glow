import PageLayout from "@/components/PageLayout";

const faqs = [
  {
    name: "Людмила Борисовна",
    question: "Какое количество мяса можно готовить одновременно на стандартной модели?",
    answer: "До 8 кг.",
  },
  {
    name: "Максим Николаевич",
    question: "Каков срок службы шашлыкю?",
    answer: "Срок службы шашлыкю 25 лет, но при бережном обращении прослужит дольше.",
  },
  {
    name: "Михаил",
    question: "Нужна ли специальная площадка для шашлыкю?",
    answer: "Никакой специальной площадки для шашлыкю не надо, ее можно установить даже на траве.",
  },
];

const FAQPage = () => {
  return (
    <PageLayout title="Вопрос-ответ">
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <p className="text-muted-foreground text-sm mb-2">{faq.name}</p>
            <p className="font-display text-lg font-semibold text-foreground mb-4">
              {faq.question}
            </p>
            <div className="pl-4 border-l-2 border-primary">
              <p className="text-sm text-muted-foreground mb-1">Консультант</p>
              <p className="text-secondary-foreground italic">{faq.answer}</p>
            </div>
          </div>
        ))}

        <div className="p-8 rounded-2xl bg-card border border-border">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Задать вопрос
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Все поля обязательны для заполнения
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Ф. И. О.</label>
              <input
                type="text"
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
              <label className="block text-sm font-medium text-foreground mb-1">Текст вопроса</label>
              <textarea
                rows={4}
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

export default FAQPage;
