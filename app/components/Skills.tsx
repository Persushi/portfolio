// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t.skills.categories.languages,
      skills: t.skills.items.languages
    },
    {
      category: t.skills.categories.databases,
      skills: t.skills.items.databases
    },
    {
      category: t.skills.categories.tools,
      skills: t.skills.items.tools
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed">
            {t.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-strong rounded-[24px] p-8 shadow-ios hover:shadow-ios-strong transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 glass text-white/90 rounded-[12px] text-sm font-medium hover:bg-white/20 transition-all duration-200 active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
