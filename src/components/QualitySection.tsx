import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Multi-stage inspection system",
  "Premium fabric testing",
  "Final product quality checks",
  "International export standards compliance",
];

const QualitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Excellence Guaranteed" title="Quality Assurance" description="At Downtown Manufacture, quality is our priority." />
        <div className="space-y-5 max-w-xl mx-auto">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
