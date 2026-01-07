// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { MapPin, Briefcase } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            {t.about.title}
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto glass-strong rounded-[20px] md:rounded-[30px] p-6 md:p-12 shadow-ios-strong">
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4 md:mb-6 text-center md:text-left">
            {t.about.paragraph1}
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4 md:mb-6 text-center md:text-left">
            {t.about.paragraph2}
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 text-center md:text-left">
            {t.about.paragraph3}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-[16px] shadow-ios flex items-center gap-2 sm:gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#5AC8FA]" />
              <p className="text-xs sm:text-sm font-medium text-white/90">{t.about.location}</p>
            </div>
            <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-[16px] shadow-ios flex items-center gap-2 sm:gap-3">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#5AC8FA]" />
              <p className="text-xs sm:text-sm font-medium text-white/90">{t.about.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
