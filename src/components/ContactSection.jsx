import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Get in Touch" title="Contact Us" description="Let's build your next collection together." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground font-body text-sm">Sialkot, Pakistan</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground font-body text-sm">downtown.wear1@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
              <p className="text-muted-foreground font-body text-sm">+92 314 3219807</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
    </section>
  );
};

export default ContactSection;
