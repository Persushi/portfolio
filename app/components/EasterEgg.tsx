// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AUTO_DISMISS_DELAY = 3500;
const CLICK_BLOCK_DURATION = 1500;

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isClickBlocked, setIsClickBlocked] = useState(true);
  const dismissTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    if (isClickBlocked || isExiting) return;

    setIsExiting(true);
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
    }
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 600);
  };

  useEffect(() => {
    const handleTrigger = () => {
      setIsVisible(true);
      setIsExiting(false);
      setIsClickBlocked(true);

      // Desbloquear clicks después del período de bloqueo
      setTimeout(() => {
        setIsClickBlocked(false);
      }, CLICK_BLOCK_DURATION);

      // Auto-dismiss
      dismissTimeoutRef.current = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsExiting(false);
        }, 600);
      }, AUTO_DISMISS_DELAY);
    };

    window.addEventListener("triggerEasterEgg", handleTrigger);
    return () => {
      window.removeEventListener("triggerEasterEgg", handleTrigger);
      if (dismissTimeoutRef.current) {
        clearTimeout(dismissTimeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`easter-egg-takeover ${isExiting ? "exiting" : ""}`}
      onClick={handleClose}
    >
      <div className="easter-egg-glitch-overlay" />
      <Image
        src="/easteregg.png"
        alt="Easter Egg"
        fill
        className={`easter-egg-image-takeover ${isExiting ? "exiting" : ""}`}
        priority
      />
      <div className="easter-egg-scanlines" />
    </div>
  );
}
