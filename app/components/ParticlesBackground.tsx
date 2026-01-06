// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let scrollSpeed = 0;
    let targetScrollSpeed = 0;
    let lastScrollY = 0;
    let lastScrollTime = Date.now();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Colores vibrantes y saturados para las estelas de luz
    const vibrantColors = [
      { r: 255, g: 20, b: 147, name: "rosa fuerte" },      // Rosa fuerte/magenta
      { r: 0, g: 191, b: 255, name: "azul profundo" },     // Azul cielo profundo
      { r: 138, g: 43, b: 226, name: "púrpura" },          // Púrpura vibrante
      { r: 255, g: 105, b: 180, name: "rosa caliente" },   // Rosa caliente
      { r: 0, g: 255, b: 200, name: "cyan" },              // Cyan brillante
      { r: 255, g: 69, b: 0, name: "naranja rojizo" },     // Naranja rojizo
      { r: 75, g: 0, b: 130, name: "índigo" },             // Índigo
      { r: 255, g: 215, b: 0, name: "dorado" }             // Dorado vibrante
    ];

    // Sistema de estelas (light trails)
    class LightTrail {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: { r: number; g: number; b: number };
      phase: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 400 + 300; // Estelas más grandes (300-700px)
        this.color = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.3 + 0.2;
      }

      update(deltaTime: number, scrollVelocity: number) {
        // Movimiento orgánico usando funciones sinusoidales
        const flowSpeed = this.speed * (1 + scrollVelocity * 2);

        this.x += this.vx * deltaTime * flowSpeed;
        this.y += this.vy * deltaTime * flowSpeed;

        // Añadir ondulación suave
        this.phase += 0.001 * deltaTime * flowSpeed;
        const wave = Math.sin(this.phase) * 0.5;

        this.x += wave * deltaTime * 0.1;
        this.y += Math.cos(this.phase * 0.7) * deltaTime * 0.1;

        // Wrap around
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw(alpha: number) {
        if (!ctx) return;

        // Crear gradiente radial con distorsión
        const distortion = Math.sin(time * 0.0005 + this.phase) * 80;

        const gradient = ctx.createRadialGradient(
          this.x + distortion,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );

        const baseAlpha = 0.18 * alpha; // Opacidad sutil para integración suave

        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${baseAlpha * 0.6})`);
        gradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${baseAlpha * 0.4})`);
        gradient.addColorStop(0.7, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${baseAlpha * 0.2})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          this.x - this.size,
          this.y - this.size,
          this.size * 2,
          this.size * 2
        );
      }
    }

    // Crear estelas de luz
    const trails: LightTrail[] = [];
    const trailCount = 12; // Más estelas para mayor prominencia

    for (let i = 0; i < trailCount; i++) {
      trails.push(new LightTrail());
    }

    // Manejar scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastScrollTime;

      if (deltaTime > 0) {
        const scrollDelta = currentScrollY - lastScrollY;
        // Calcular velocidad de scroll normalizada
        const velocity = Math.abs(scrollDelta) / deltaTime;
        targetScrollSpeed = Math.min(velocity * 10, 3); // Limitar a 3x velocidad
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      time = currentTime;

      // Easing suave para la velocidad de scroll (inercia)
      const ease = 0.92; // Factor de suavizado (más cerca de 1 = más suave)
      scrollSpeed += (targetScrollSpeed - scrollSpeed) * (1 - ease);

      // Reducir gradualmente la velocidad objetivo
      targetScrollSpeed *= 0.95;

      // Si la velocidad es muy baja, ponerla a cero
      if (Math.abs(scrollSpeed) < 0.01) scrollSpeed = 0;
      if (Math.abs(targetScrollSpeed) < 0.01) targetScrollSpeed = 0;

      // Fondo oscuro sutil que coincide con las cards
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "#12131a");      // Tono similar a cards
      bgGradient.addColorStop(0.5, "#0f1019");    // Tono medio oscuro
      bgGradient.addColorStop(1, "#14151c");      // Tono oscuro azulado
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar estelas
      trails.forEach((trail) => {
        trail.update(deltaTime, scrollSpeed);
        trail.draw(1.0);
      });

      // Aplicar capa de mezcla sutil
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.3;

      trails.forEach((trail) => {
        trail.draw(0.4);
      });

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.5 }}
    />
  );
}
