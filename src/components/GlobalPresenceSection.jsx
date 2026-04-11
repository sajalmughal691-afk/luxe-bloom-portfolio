import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

const locations = [
  { region: "USA", desc: "Serving major fashion brands across the United States." },
  { region: "United Kingdom", desc: "Trusted partner for UK-based retail chains." },
  { region: "Canada", desc: "Reliable manufacturing partner for Canadian brands." },
  { region: "Middle East", desc: "Operational support through our Dubai office." },
  { region: "Europe", desc: "Expanding presence across European fashion markets." },
];

const GlobalPresenceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Worldwide Reach" title="Our Global Presence" description="With operational support through Dubai, we ensure smooth communication and international business handling." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((l, i) => (
            <div key={i} className="flex items-start gap-4 p-6 border border-border hover-gold transition-all duration-500 group">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{l.region}</h3>
                <p className="text-muted-foreground font-body text-sm">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
