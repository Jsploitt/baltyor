'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from '@/lib/content';

interface LanguageContextType {
  lang:           Language;
  isArabic:       boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang:           'ar',
  isArabic:       true,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const html = document.documentElement;
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang;
  }, [lang]);

  const toggleLanguage = () =>
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));

  return (
    <LanguageContext.Provider value={{ lang, isArabic: lang === 'ar', toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
