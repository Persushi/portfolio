// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-2">
      {/* Notch container with glass effect */}
      <div className="relative">
        {/* Main notch bar */}
        <div className="glass-strong shadow-ios-strong rounded-[30px] px-6 py-3 min-w-[90vw] md:min-w-[800px] max-w-[1200px]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-semibold bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent">
              Mateo Persich
            </div>

            {/* Center navigation links */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-2 rounded-[14px] bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] text-white hover:opacity-90 transition-all duration-200 font-semibold text-sm active:scale-95 shadow-ios"
                aria-label="Toggle language"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
