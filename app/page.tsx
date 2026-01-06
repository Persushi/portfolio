"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsCarousel from "./components/ClientsCarousel";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import { useLanguage } from "./contexts/LanguageContext";

const FontToggle = dynamic(() => import("./components/FontToggle"), {
  ssr: false,
});

const CyberParticles = dynamic(() => import("./components/CyberParticles"), {
  ssr: false,
});

const SplashScreen = dynamic(() => import("./components/SplashScreen"), {
  ssr: false,
});

export default function Home() {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterSite = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onEnter={handleEnterSite} />;
  }

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <CyberParticles />
      <Navbar />
      <div className="glitch-reveal glitch-reveal-1">
        <Hero />
      </div>
      <div className="glitch-reveal glitch-reveal-2">
        <ClientsCarousel />
      </div>
      <div className="glitch-reveal glitch-reveal-3">
        <About />
      </div>
      <div className="glitch-reveal glitch-reveal-4">
        <Skills />
      </div>
      <div className="glitch-reveal glitch-reveal-5">
        <Projects />
      </div>
      <div className="glitch-reveal glitch-reveal-6">
        <Contact />
      </div>
      <FontToggle />
      <footer className="glitch-reveal glitch-reveal-7 border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-[24px] p-8 shadow-ios text-center">
            <p className="text-white/70 font-medium">
              © {new Date().getFullYear()} Mateo Persich - Backend Developer. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
