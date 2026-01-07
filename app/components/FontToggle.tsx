// @ts-nocheck
"use client";

import { useFont } from "../contexts/FontContext";
import { useEffect, useState } from "react";

export default function FontToggle() {
  const { fontMode, toggleFont } = useFont();
  const [mounted, setMounted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Mostrar el hint después de un pequeño delay
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const wasNormalMode = fontMode === "normal";
    toggleFont();

    // Si estaba en modo normal y va a cambiar a glitch, hacer scroll al top
    if (wasNormalMode) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Ocultar el hint cuando se hace click
    if (showHint) {
      setShowHint(false);
      setHintDismissed(true);
    }
  };

  const dismissHint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHint(false);
    setHintDismissed(true);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-center">
      {/* Hint con flecha animada - solo en modo normal y si no fue dismissed - solo desktop */}
      {showHint && fontMode === "normal" && !hintDismissed && (
        <div
          className="cyber-hint-container"
          onClick={dismissHint}
        >
          <div className="cyber-hint-bubble">
            <span className="cyber-hint-text">Try Cyber Mode!</span>
            <span className="cyber-hint-subtext">It's more fun</span>
          </div>
          <div className="cyber-hint-arrow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
            >
              <path
                d="M12 4L12 20M12 20L6 14M12 20L18 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className="relative w-14 h-14 glass-strong rounded-full shadow-ios-strong hover:shadow-ios transition-all hover:scale-110 active:scale-95 group flex items-center justify-center"
        aria-label="Toggle font style"
      >
        {fontMode === "normal" ? (
          <svg
            className="w-6 h-6 text-[#007AFF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-[#007AFF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 glass-strong text-white/90 px-4 py-2 rounded-[12px] text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-ios font-medium">
          {fontMode === "normal" ? "Cyber Mode" : "Normal Mode"}
        </span>
      </button>
    </div>
  );
}
