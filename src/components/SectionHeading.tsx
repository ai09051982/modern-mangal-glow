interface Props {
  title: string;
  subtitle?: string;
  highlight?: string;
}

const SectionHeading = ({ title, subtitle, highlight }: Props) => (
  <div className="text-center mb-10">
    <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-wide">
      {title} {highlight && <span className="text-primary">{highlight}</span>}
      <span className="text-primary ml-2 tracking-[0.3em] text-lg align-middle">---</span>
    </h2>
    {subtitle && <p className="mt-3 text-muted-foreground text-sm md:text-base">{subtitle}</p>}
  </div>
);

export default SectionHeading;
