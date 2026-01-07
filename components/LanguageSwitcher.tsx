"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use 'en' as default during SSR to avoid hydration mismatch
  const currentLanguage = languages.find((lang) => lang.code === (mounted ? i18n.language : 'en')) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Handle both mouse and touch events for better mobile support
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", langCode);
    }
  };

  // Remove this useEffect to avoid hydration mismatch
  // Language loading is now handled in I18nProvider

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Button - Glass Style */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden rounded-full border border-white/20 bg-white/8 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 transition-all duration-300 hover:border-white/30 hover:bg-white/12 active:scale-95"
      >
        {/* Glass effect layers */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/14 via-white/8 to-transparent" />
        <div className="pointer-events-none absolute inset-[-1px] rounded-full border border-white/10" />

        {/* Content */}
        <span className="relative z-10 text-base sm:text-lg">{currentLanguage.flag}</span>
        <span className="relative z-10 text-xs sm:text-sm md:text-base font-semibold text-white">
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.svg
          className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-[180px] sm:w-[200px] md:min-w-[200px] rounded-xl sm:rounded-2xl border border-white/12 bg-white/8 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.35)] overflow-hidden z-50"
          >
            {/* Glass effect for dropdown */}
            <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/14 via-white/8 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl border border-white/10" />

            {/* Top highlight */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

            <div className="relative z-10 p-1.5 sm:p-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-200 touch-manipulation ${
                    i18n.language === lang.code
                      ? "bg-white/15 border border-white/20"
                      : "hover:bg-white/10 active:bg-white/10"
                  }`}
                >
                  <span className="text-lg sm:text-xl">{lang.flag}</span>
                  <span className="flex-1 text-left text-xs sm:text-sm font-medium text-white">
                    {lang.name}
                  </span>
                  {i18n.language === lang.code && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

