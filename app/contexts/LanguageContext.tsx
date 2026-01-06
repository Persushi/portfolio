"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKeys } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    // Iniciar transición
    setIsTransitioning(true);
    document.documentElement.classList.add("lang-transitioning");

    // Cambiar idioma después de un pequeño delay
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }, 150);

    // Terminar transición
    setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove("lang-transitioning");
    }, 400);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isTransitioning
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={`lang-transition-overlay ${isTransitioning ? 'active' : ''}`} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
