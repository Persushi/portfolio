// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import { useFont } from "../contexts/FontContext";

interface Particle {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  color: string;
  char: string;
}

export default function CyberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { fontMode } = useFont();

  useEffect(() => {
    if (fontMode !== "glitch") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    // Caracteres cyberpunk/matrix style
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    // Colores cyberpunk
    const colors = [
      "rgba(0, 255, 255, ",   // Cyan
      "rgba(255, 0, 128, ",   // Pink
      "rgba(0, 255, 200, ",   // Teal
      "rgba(128, 0, 255, ",   // Purple
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor(canvas.width / 20); // Una partícula cada 20px aprox

      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      speed: Math.random() * 3 + 1,
      length: Math.floor(Math.random() * 15) + 5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      char: chars[Math.floor(Math.random() * chars.length)],
    });

    const drawParticle = (particle: Particle) => {
      ctx.font = "14px 'Orbitron', monospace";

      // Dibujar trail de caracteres
      for (let i = 0; i < particle.length; i++) {
        const charY = particle.y - i * 16;
        if (charY < 0 || charY > canvas.height) continue;

        // El primer caracter es más brillante
        const fadeOpacity = particle.opacity * (1 - i / particle.length);
        ctx.fillStyle = particle.color + fadeOpacity + ")";

        // Cambiar el caracter aleatoriamente para efecto matrix
        const displayChar = i === 0
          ? chars[Math.floor(Math.random() * chars.length)]
          : particle.char;

        ctx.fillText(displayChar, particle.x, charY);

        // Glow effect para el primer caracter
        if (i === 0) {
          ctx.shadowColor = particle.color + "0.8)";
          ctx.shadowBlur = 10;
          ctx.fillStyle = particle.color + (fadeOpacity * 2) + ")";
          ctx.fillText(displayChar, particle.x, charY);
          ctx.shadowBlur = 0;
        }
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.y += particle.speed;

      // Reset cuando sale de la pantalla
      if (particle.y - particle.length * 16 > canvas.height) {
        particle.y = -particle.length * 16;
        particle.x = Math.random() * canvas.width;
        particle.speed = Math.random() * 3 + 1;
        particle.char = chars[Math.floor(Math.random() * chars.length)];
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [fontMode]);

  // Solo renderizar cuando está en modo glitch
  if (fontMode !== "glitch") return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.4 }}
    />
  );
}
