import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import factoryEmbroidery from "@/assets/factory-embroidery.jpg";
import factorySewing from "@/assets/factory-sewing.jpg";
import factoryQuality from "@/assets/factory-quality.jpg";
import logoDT from "@/assets/logo-dt.png";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const images = [
    {
      src: factoryEmbroidery,
      alt: "Embroidery and Screen Printing",
      label: "Embroidery & Printing"
    },
    {
      src: factorySewing,
      alt: "Garment Production Line",
      label: "Production Line"
    },
    {
      src: factoryQuality,
      alt: "Quality Control Inspection",
      label: "Quality Control"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading
          subtitle="Who We Are"
          title="About Downtown Manufacture"
          description="Downtown Manufacture is a premium clothing manufacturing company based in Pakistan with strong international connections through Dubai. We specialize in producing high-end apparel for global brands, delivering exceptional quality, precision, and reliability."
        />
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-primary font-heading text-lg tracking-wide">
                  {image.label}
                </span>
              </div>
              <div className="p-4 bg-card/50 backdrop-blur-sm">
                <p className="text-center text-sm text-muted-foreground font-body">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mt-10">
          With years of industry experience, we have built trusted partnerships with well-known clothing brands and retail stores across the USA, UK, and Canada.
        </p>
        <div className="flex justify-center mt-4">
          <div className="px-6 py-3 border border-primary/30 rounded-lg bg-card">
            <p className="text-primary font-heading text-sm md:text-base tracking-wide">Minimum Order Quantity: <span className="font-semibold">25 Pieces</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;