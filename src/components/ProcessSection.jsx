import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Design & Tech Pack", desc: "Review specifications and technical requirements." },
  { num: "02", title: "Fabric Selection", desc: "Source premium materials for your garments." },
  { num: "03", title: "Sampling", desc: "Create prototypes for approval." },
  { num: "04", title: "Bulk Production", desc: "Full-scale manufacturing with quality controls." },
  { num: "05", title: "Quality Inspection", desc: "Multi-stage quality assurance checks." },
  { num: "06", title: "Packaging & Shipping", desc: "Careful packaging and global delivery." },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="How We Work" title="Production Process" />
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center w-44 md:w-auto group">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300">
                  <span className="gold-text font-heading text-lg font-bold">{s.num}</span>
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
