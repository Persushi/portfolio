// @ts-nocheck
"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { useFont } from "../contexts/FontContext";
import { useState, useRef } from "react";

const CLICKS_TO_TRIGGER = 5;
const CLICK_RESET_DELAY = 2000;

function MandarinaTrigger() {
  const { fontMode } = useFont();
  const [showImage, setShowImage] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowImage(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowImage(false);
  };

  return (
    <span
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`mandarina-text ${fontMode === "glitch" ? "cyber" : "normal"}`}>
        Mandarina
      </span>
      <span className={`mandarina-image-container ${showImage ? "visible" : ""}`}>
        <Image
          src="/mandarina.jpeg"
          alt="Mandarina"
          width={800}
          height={800}
          className="mandarina-image"
          unoptimized
        />
      </span>
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const { fontMode } = useFont();
  const [imageError, setImageError] = useState(false);
  const clickCountRef = useRef(0);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const profileImage = fontMode === "glitch" ? "me.png" : "me-normal.jpeg";

  const handleProfileClick = () => {
    clickCountRef.current += 1;

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    if (clickCountRef.current >= CLICKS_TO_TRIGGER) {
      clickCountRef.current = 0;
      window.dispatchEvent(new CustomEvent("triggerEasterEgg"));
    } else {
      resetTimeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, CLICK_RESET_DELAY);
    }
  };

  // Render description with Mandarina highlighted
  const renderDescription = () => {
    const description = t.hero.description;
    const parts = description.split("Mandarina");

    if (parts.length === 1) {
      return description;
    }

    return (
      <>
        {parts[0]}
        <MandarinaTrigger />
        {parts[1]}
      </>
    );
  };

  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image first on mobile, second on desktop */}
          <div className="flex justify-center order-1 md:order-2">
            <div
              className="hero-image-frame relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 cursor-pointer select-none"
              onClick={handleProfileClick}
            >
              <div className="w-full h-full rounded-[30px] md:rounded-[36px] overflow-hidden">
                {!imageError ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={profileImage}
                      alt="Mateo Persich"
                      fill
                      className="object-cover object-top"
                      priority
                      onError={() => setImageError(true)}
                      unoptimized
                    />
                    <div className="absolute inset-0 pointer-events-none hero-image-fade" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5AC8FA] to-[#007AFF] text-white text-4xl md:text-6xl font-bold">
                    MP
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80 font-medium">
              {t.hero.title}
            </h2>

            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              {renderDescription()}
            </p>

            <div className="flex gap-3 pt-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="btn-ios bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] text-white shadow-ios hover:shadow-ios-strong"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className="btn-ios glass text-white hover:bg-white/20"
              >
                {t.hero.contactMe}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
