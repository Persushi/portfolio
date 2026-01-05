// @ts-nocheck
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontMode = "glitch" | "normal";

interface FontContextType {
  fontMode: FontMode;
  toggleFont: () => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: ReactNode }) {
  const [fontMode, setFontMode] = useState<FontMode>("normal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedFont = localStorage.getItem("fontMode") as FontMode;
    if (savedFont) {
      setFontMode(savedFont);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("fontMode", fontMode);

    if (fontMode === "glitch") {
      document.documentElement.classList.add("glitch-font");
    } else {
      document.documentElement.classList.remove("glitch-font");
    }
  }, [fontMode, mounted]);

  const toggleFont = () => {
    setFontMode((prev) => (prev === "glitch" ? "normal" : "glitch"));
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <FontContext.Provider value={{ fontMode, toggleFont }}>
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
