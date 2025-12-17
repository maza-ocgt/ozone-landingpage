import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import AimSection from "@/components/AimSection";
import BottomSection from "@/components/BottomSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <AimSection />
        <BottomSection />
        <OfferSection />
        <FAQSection />
        <TeamSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
