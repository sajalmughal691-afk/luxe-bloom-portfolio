import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Our Purpose" title="Mission & Vision" />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver luxury-quality garments to global brands with consistency, reliability, and excellence.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become a leading global apparel manufacturer, known for premium quality and long-term partnerships.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border p-10 md:p-12 hover-gold transition-all duration-500 group"
            >
              <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
