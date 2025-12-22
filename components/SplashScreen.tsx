"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedPlayingRef = useRef(false);
  const hasCheckedStorageRef = useRef(false);

  const completeSplash = useCallback(() => {
    localStorage.setItem("splashPlayed", "true");
    setIsVisible(false);

    setTimeout(() => {
      onComplete();
    }, 500);
  }, [onComplete]);

  const fallbackComplete = useCallback(() => {
    setTimeout(completeSplash, 2000);
  }, [completeSplash]);

  useEffect(() => {
    // Only check localStorage once
    if (hasCheckedStorageRef.current) return;
    hasCheckedStorageRef.current = true;

    const hasPlayed = localStorage.getItem("splashPlayed");

    if (hasPlayed === "true") {
      // Skip splash if already played - hide immediately and complete
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 100);
      return;
    }

    // Keep splash visible (already set to true in useState)
  }, [onComplete]);

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) {
      // If video element doesn't exist, use fallback
      fallbackComplete();
      return;
    }

    hasStartedPlayingRef.current = false;

    // Fallback timeout - if video doesn't load in 5 seconds, skip it
    const timeoutId = setTimeout(() => {
      if (!hasStartedPlayingRef.current) {
        console.warn("Video loading timeout, using fallback");
        fallbackComplete();
      }
    }, 5000);

    const handleCanPlay = () => {
      if (!hasStartedPlayingRef.current) {
        hasStartedPlayingRef.current = true;
        clearTimeout(timeoutId);
        setIsVideoLoaded(true);
        video.play().catch((err) => {
          console.error("Video play failed:", err);
          fallbackComplete();
        });
      }
    };

    const handleEnded = () => {
      clearTimeout(timeoutId);
      completeSplash();
    };

    const handleError = (e: Event) => {
      clearTimeout(timeoutId);
      console.error("Video error:", e);
      fallbackComplete();
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    // Try to load and play the video
    video.load();

    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, [isVisible, fallbackComplete, completeSplash]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isVideoLoaded ? 1.15 : 0.8,
              opacity: isVideoLoaded ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-contain max-w-[95vw] max-h-[95vh]"
              playsInline
              muted
              autoPlay
              preload="auto"
            >
              <source src="/splash.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}



