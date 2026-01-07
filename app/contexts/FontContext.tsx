// @ts-nocheck
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontMode = "glitch" | "normal";

interface FontContextType {
  fontMode: FontMode;
  toggleFont: () => void;
  isTransitioning: boolean;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: ReactNode }) {
  const [fontMode, setFontMode] = useState<FontMode>("normal");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (fontMode === "glitch") {
      document.documentElement.classList.add("glitch-font");
    } else {
      document.documentElement.classList.remove("glitch-font");
    }
  }, [fontMode, mounted]);

  const toggleFont = () => {
    // Activar animación de transición
    setIsTransitioning(true);
    document.documentElement.classList.add("cyber-transitioning");

    // Cambiar el modo después de un pequeño delay para el efecto
    setTimeout(() => {
      setFontMode((prev) => (prev === "glitch" ? "normal" : "glitch"));
    }, 100);

    // Desactivar la transición después de la animación
    setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove("cyber-transitioning");
    }, 600);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <FontContext.Provider value={{ fontMode, toggleFont, isTransitioning }}>
      {/* Overlay de transición glitch */}
      <div className={`cyber-transition-overlay ${isTransitioning ? 'active' : ''}`} />
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
