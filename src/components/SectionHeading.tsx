interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <div className="text-center mb-16 max-w-3xl mx-auto">
    {subtitle && (
      <span className="gold-text text-sm font-body uppercase tracking-[0.3em] font-semibold mb-4 block">
        {subtitle}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-5xl font-bold mb-6 ${light ? "text-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
    <div className="w-20 h-[2px] gold-gradient mx-auto mt-8" />
  </div>
);

export default SectionHeading;
