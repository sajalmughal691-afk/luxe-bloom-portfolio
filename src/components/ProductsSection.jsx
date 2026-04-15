import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoDT from "@/assets/logo-dt.png";
import productHoodies from "@/assets/product-hoodies.jpg";
import productShorts2 from "@/assets/product-shorts-2.jpg";
import productPants from "@/assets/product-pants.jpg";
import productCaps from "@/assets/product-caps.jpg";
import productCasual from "@/assets/product-casual.jpg";

const categories = [
  { img: productHoodies, title: "Hoodie Spot" },
  { img: productShorts2, title: "Athletic Shorts" },
  { img: productPants, title: "Track Pants" },
  { img: productCasual, title: "Casual Wear" },
  { img: productCaps, title: "Cap Corner" },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Our Collection" title="Product Categories" description="We manufacture a wide range of premium apparel." />
        <div className="flex items-center justify-center gap-4 mb-8">
          <img src={logoDT} alt="Downtown Manufacture Logo" className="w-16 h-16 object-contain" />
          <div className="px-5 py-2 border border-primary/30 rounded-lg bg-card">
            <p className="text-primary font-heading text-sm tracking-wide">MOQ: <span className="font-semibold">25 Pieces</span></p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-heading text-lg md:text-2xl font-semibold text-foreground">{c.title}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-primary">{c.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;