"use client";

import { useEffect, useState } from "react";
import "@/lib/i18n";
import { useTranslation } from "react-i18next";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true);
    
    // Load saved language preference only on client
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang && ['en', 'ms', 'zh', 'ta'].includes(savedLang)) {
        i18n.changeLanguage(savedLang);
      }
    }
  }, [i18n]);

  return <>{children}</>;
}

