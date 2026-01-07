// @ts-nocheck
"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Bloquear scroll y ocultar scrollbar completamente
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    // Agregar clase para ocultar todo el contenido
    document.body.classList.add("splash-active");

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.classList.remove("splash-active");
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // Añadir clase para mantener scrollbar oculto durante transición
    document.body.classList.add("splash-exiting");
    // Esperar a que termine la animación antes de llamar onEnter
    setTimeout(() => {
      document.body.classList.remove("splash-exiting");
      document.body.classList.remove("splash-active");
      onEnter();
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className={`splash-screen ${isExiting ? "exiting" : ""}`}>
      {/* Fondo con grid cyber */}
      <div className="splash-grid" />

      {/* Scanlines */}
      <div className="splash-scanlines" />

      {/* Glitch lines animadas */}
      <div className="splash-glitch-lines" />

      {/* Contenido central */}
      <div className="splash-content">
        <h1 className="splash-title">
          <span className="splash-title-text" data-text="MATEO PERSICH">
            MATEO PERSICH
          </span>
        </h1>

        <p className="splash-subtitle">BACKEND DEVELOPER</p>

        <button
          onClick={handleEnter}
          className="splash-button"
        >
          <span className="splash-button-text">INICIAR</span>
          <span className="splash-button-glitch" aria-hidden="true">INICIAR</span>
          <span className="splash-button-glitch" aria-hidden="true">INICIAR</span>
        </button>
      </div>

      {/* Efecto de transición épica */}
      {isExiting && (
        <div className="splash-transition">
          <div className="splash-transition-flash" />
          <div className="splash-transition-scanlines" />
          <div className="splash-transition-glitch" />
        </div>
      )}
    </div>
  );
}
