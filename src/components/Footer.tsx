const Footer = () => (
  <footer className="py-12 px-6 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-heading text-lg gold-text tracking-wider">DOWNTOWN MANUFACTURE</span>
      <p className="text-muted-foreground font-body text-xs tracking-wider">
        © {new Date().getFullYear()} Downtown Manufacture. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
