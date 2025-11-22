import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyMonCallPro } from "@/components/WhyMonCallPro";
import { WhyMorocco } from "@/components/WhyMorocco";
import { Storytelling } from "@/components/Storytelling";
import { InvestmentPacks } from "@/components/InvestmentPacks";
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
      <WhyMonCallPro />
      <WhyMorocco />
      <Storytelling />
      <InvestmentPacks />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
