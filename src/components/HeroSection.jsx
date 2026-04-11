import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Luxury fabric texture"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
      <img
        src={logo}
        alt="Downtown Manufacture logo"
        className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-full border-2 border-primary/30 object-cover"
        width={128}
        height={128}
      />
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
        Downtown <span className="gold-text">Manufacture</span>
      </h1>
      <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 tracking-wide">
        Luxury Apparel Manufacturing & Global Export
      </p>
      <p className="font-body text-sm text-muted-foreground italic mb-10 tracking-wider">
        Crafting Excellence. Delivering Globally.
      </p>
      <a
        href="#products"
        className="inline-block gold-gradient text-primary-foreground font-body text-sm uppercase tracking-[0.2em] px-10 py-4 hover:opacity-90 transition-opacity duration-300"
      >
        View Portfolio
      </a>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-[1px] h-12 bg-primary/40" />
    </div>
  </section>
);

export default HeroSection;
