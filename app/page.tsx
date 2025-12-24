"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import AimSection from "@/components/AimSection";
import BottomSection from "@/components/BottomSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import SurveyModal from "@/components/SurveyModal";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const openSurvey = () => setIsSurveyOpen(true);
  const closeSurvey = () => setIsSurveyOpen(false);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <div className="relative min-h-screen bg-black">
          {/* Animated Background */}
          <AnimatedBackground />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero onOpenSurvey={openSurvey} />
            <AimSection />
            <BottomSection onOpenSurvey={openSurvey} />
            <OfferSection />
            <FAQSection />
            <TeamSection />
            <ComingSoon onOpenSurvey={openSurvey} />
          </main>
          
          {/* Footer */}
          <Footer />

          <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} />
        </div>
      )}
    </>
  );
}
