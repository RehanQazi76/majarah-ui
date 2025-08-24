import HeroSection from '@/components/HeroSection';
import Services from "@/components/Services";
import FaceBehindMajarah from "@/components/FaceBehindMajarah";
//import Testimonials from "@/components/Testimonials"
import { StarsBackground } from "@/components/ui/stars-background";
import ContactReachUs from '@/components/ContactReachUs';
import  { Footer } from '@/components/Footer';
import Footersection from '@/components/Footersection';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen w-full bg-[#0e0e0e] text-white px-0 md:px-0 overflow-hidden relative">
       <HeroSection />
      <Services />
      <FaceBehindMajarah />
       {/* <Testimonials /> */}
       <div className="relative z-0">
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <StarsBackground />
        </div>
        <Footersection />
        <div id ="contact" className="mb-10">
          <ContactReachUs />
        </div>
        <Footer />
      </div>
      </div>
    </main>
  );
}