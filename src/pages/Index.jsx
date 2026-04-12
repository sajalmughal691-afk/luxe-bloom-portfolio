import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ProcessSection from "@/components/ProcessSection";
import QualitySection from "@/components/QualitySection";
import CollaborationSection from "@/components/CollaborationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <StorySection />
    <MissionVisionSection />
    <ServicesSection />
    <ProductsSection />
    <WhyChooseUsSection />
    <GlobalPresenceSection />
    <ProcessSection />
    <QualitySection />
    <CollaborationSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
