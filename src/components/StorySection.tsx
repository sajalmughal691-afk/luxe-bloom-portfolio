import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { title: "The Beginning", text: "Founded with a passion for excellence, starting as a small-scale production unit." },
  { title: "Commitment to Quality", text: "Built our reputation through unwavering attention to detail in every garment." },
  { title: "Strong Relationships", text: "Forged lasting partnerships with international brands through trust and reliability." },
  { title: "Modern Evolution", text: "Combining modern manufacturing techniques with premium craftsmanship to lead the industry." },
];

const StorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Our Journey" title="Our Story" />
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-primary/20 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 text-center md:text-right">
                  {i % 2 === 0 && (
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{m.text}</p>
                    </div>
                  )}
                </div>
                <div className="w-4 h-4 rounded-full gold-gradient shrink-0 ring-4 ring-background" />
                <div className="flex-1 text-center md:text-left">
                  {i % 2 === 1 && (
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{m.text}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
