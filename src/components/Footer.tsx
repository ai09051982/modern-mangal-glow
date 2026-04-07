const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-gradient-fire">Шашлыкю</span>
        <p className="text-muted-foreground text-sm">
          Мангал, барбекю, шашлычница, гриль, жаровня, коптильня в Москве
        </p>
        <a href="tel:89287639058" className="text-primary font-semibold text-sm">
          8 (928) 763-90-58
        </a>
      </div>
    </footer>
  );
};

export default Footer;
