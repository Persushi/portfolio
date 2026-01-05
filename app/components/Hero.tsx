// @ts-nocheck
"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-white/80 font-medium">
              {t.hero.title}
            </h2>

            <p className="text-lg text-white/60 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex gap-3 pt-4">
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

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#5AC8FA] to-[#007AFF] shadow-ios-strong p-1">
              <div className="w-full h-full rounded-[36px] overflow-hidden">
                {!imageError ? (
                  <Image
                    src="https://i.imgur.com/hVFaKyo.jpeg"
                    alt="Mateo Persich"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5AC8FA] to-[#007AFF] text-white text-6xl font-bold">
                    MP
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
