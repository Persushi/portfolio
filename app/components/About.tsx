// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto glass-strong rounded-[30px] p-8 md:p-12 shadow-ios-strong">
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            {t.about.paragraph1}
          </p>

          <p className="text-lg text-white/80 leading-relaxed mb-6">
            {t.about.paragraph2}
          </p>

          <p className="text-lg text-white/80 leading-relaxed mb-10">
            {t.about.paragraph3}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glass px-6 py-4 rounded-[16px] shadow-ios">
              <p className="text-sm font-medium text-white/90">📍 {t.about.location}</p>
            </div>
            <div className="glass px-6 py-4 rounded-[16px] shadow-ios">
              <p className="text-sm font-medium text-white/90">💼 {t.about.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
