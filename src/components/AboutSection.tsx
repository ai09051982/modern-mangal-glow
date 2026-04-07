import { Flame, Home, Shield } from "lucide-react";

const features = [
  { icon: Flame, text: "Мангалы, коптильни, гриль, барбекю, жаровня" },
  { icon: Home, text: "Для дома, дачи, кафе, ресторана" },
  { icon: Shield, text: "Удобно, практично, долговечно" },
];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Что такое <span className="text-gradient-fire">Шашлыкю</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-fire flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium text-lg">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-secondary-foreground leading-relaxed text-lg">
          <p>
            <strong className="text-foreground">«Шашлыкю»</strong> рады предложить различное оборудование для приготовления ароматного шашлыка! К Вашим услугам{" "}
            <strong className="text-foreground">мангалы, коптильни, гриль, барбекю, жаровня, шашлычница от производителя.</strong>
          </p>
          <p>
            Что может быть аппетитнее и вкуснее мяса, приготовленного на открытом огне и пропитанного дымком?! Для того, чтобы облегчить приготовление шашлыка, мы предлагаем Вам обзавестись специальными приспособлениями.
          </p>
          <p>
            <strong className="text-foreground">«Шашлыкю»</strong> предлагает Вашему вниманию разнообразные виды шашлычного оборудования от производителя: мангалами можно воспользоваться для жарки мяса на шампурах, также угольными, электрическими и газовыми грилями, коптильней для горячего и холодного копчения.
          </p>
          <p>
            Также мы специализируемся на барбекю с жаровней и решеткой в оригинальном дизайне, которое особенно удобно использовать для выездов на природу. Делайте свой выбор и наслаждайтесь вкусным и ароматным мясом!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
