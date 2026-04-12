import SectionHeading from "./SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productShorts1 from "@/assets/product-shorts-1.jpg";
import productShorts2 from "@/assets/product-shorts-2.jpg";
import productPants from "@/assets/product-pants.jpg";

const categories = [
  { img: productShorts1, title: "Designer Shorts" },
  { img: productShorts2, title: "Athletic Shorts" },
  { img: productPants, title: "Track Pants" },
  { img: productShorts1, title: "Casual Wear" },
  { img: productPants, title: "Streetwear" },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <SectionHeading subtitle="Our Collection" title="Product Categories" description="We manufacture a wide range of premium apparel." />
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