import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Tag, Package, FlaskConical, Palette, Stamp } from "lucide-react";

const services = [
  { icon: Scissors, title: "Custom Manufacturing", desc: "Bespoke garment production tailored to your brand's specifications." },
  { icon: Tag, title: "Private Label", desc: "Complete private label solutions from design to delivery." },
  { icon: Package, title: "Bulk Orders", desc: "Large-scale production with consistent quality standards." },
  { icon: FlaskConical, title: "Sampling & Development", desc: "Prototype creation and product development services." },
  { icon: Palette, title: "Fabric Sourcing", desc: "Premium fabric sourcing and consultation expertise." },
  { icon: Stamp, title: "Print & Embroidery", desc: "DTF, puff, screen printing, embroidery, and sublimation." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="What We Do" title="Our Services" description="Complete end-to-end apparel manufacturing solutions." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border p-8 hover-gold group transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <s.icon className="w-7 h-7 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
