import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DelayedModal from "@/components/DelayedModal";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Advantages />
        <Timeline />
        <Pricing />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Dynamic Popups/Overlays */}
      <DelayedModal />
      <StickyMobileCTA />
    </>
  );
}
