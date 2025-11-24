import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { InteractiveWhyTable } from "@/components/InteractiveWhyTable";
import { WhyMorocco } from "@/components/WhyMorocco";
import { Storytelling } from "@/components/Storytelling";
import { InteractivePacksTable } from "@/components/InteractivePacksTable";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <InteractiveWhyTable />
      <WhyMorocco />
      <Storytelling />
      <InteractivePacksTable />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
