import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading
          subtitle="Who We Are"
          title="About Downtown Manufacture"
          description="Downtown Manufacture is a premium clothing manufacturing company based in Pakistan with strong international connections through Dubai. We specialize in producing high-end apparel for global brands, delivering exceptional quality, precision, and reliability."
        />
        <p className="text-center text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
          With years of industry experience, we have built trusted partnerships with well-known clothing brands and retail stores across the USA, UK, and Canada.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
