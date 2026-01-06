// @ts-nocheck
"use client";

import { useFont } from "../contexts/FontContext";
import { useEffect, useState } from "react";

export default function FontToggle() {
  const { fontMode, toggleFont } = useFont();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleFont}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 glass-strong rounded-full shadow-ios-strong hover:shadow-ios transition-all hover:scale-110 active:scale-95 group"
      aria-label="Toggle font style"
    >
      <div className="relative w-6 h-6 mx-auto">
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
      </div>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 glass-strong text-white/90 px-4 py-2 rounded-[12px] text-sm whitespace-nowrap opacity-90 group-hover:opacity-100 transition-all pointer-events-none shadow-ios font-medium">
        {fontMode === "normal" ? "Modo Cyber" : "Modo Normal"}
      </span>
    </button>
  );
}
