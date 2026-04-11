import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Store, Building2, Rocket } from "lucide-react";

const clients = [
  { icon: Store, title: "Clothing Brands", desc: "Partnering with established fashion labels worldwide." },
  { icon: Building2, title: "Retail Chains", desc: "Supplying quality garments to major retail stores." },
  { icon: Rocket, title: "Startups & Private Labels", desc: "Helping new brands bring their vision to life." },
];

const CollaborationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading
          subtitle="Partnerships"
          title="Client Collaboration"
          description="Our goal is to build long-term partnerships, not just transactions."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <div key={i} className="text-center p-8 bg-card border border-border hover-gold group transition-all duration-500">
              <c.icon className="w-8 h-8 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
