import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gem, ShieldCheck, Factory, Truck, DollarSign, Award } from "lucide-react";

const features = [
  { icon: Gem, title: "Premium Quality Materials" },
  { icon: ShieldCheck, title: "Strict Quality Control" },
  { icon: Factory, title: "Modern Production Facilities" },
  { icon: Truck, title: "On-Time Global Delivery" },
  { icon: DollarSign, title: "Competitive Luxury Pricing" },
  { icon: Award, title: "Trusted by International Brands" },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Our Advantage" title="Why Choose Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-5 p-6 bg-card border border-border hover-gold group transition-all duration-500">
              <f.icon className="w-6 h-6 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-foreground font-medium">{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
