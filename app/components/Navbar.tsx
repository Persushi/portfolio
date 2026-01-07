// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useFont } from "../contexts/FontContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { fontMode, toggleFont } = useFont();

  const handleThemeToggle = () => {
    const wasNormalMode = fontMode === "normal";
    toggleFont();

    if (wasNormalMode) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mt-2 flex justify-center navbar-reveal px-2 sm:px-0">
      {/* Notch container with glass effect */}
      <div className="relative w-full sm:w-auto">
        {/* Main notch bar */}
        <div className="glass-strong shadow-ios-strong rounded-[20px] sm:rounded-[30px] px-4 sm:px-6 py-2.5 sm:py-3 w-full sm:min-w-[800px] max-w-[1200px]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent">
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
              {/* Theme toggle - solo visible en móvil */}
              <button
                onClick={handleThemeToggle}
                className="md:hidden px-3 py-2 rounded-[14px] bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {fontMode === "normal" ? (
                  <svg
                    className="w-5 h-5 text-[#5AC8FA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-[#5AC8FA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
              </button>

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
