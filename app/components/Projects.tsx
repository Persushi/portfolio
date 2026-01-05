// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007AFF] via-[#5AC8FA] to-[#AF52DE] transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 z-10">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] shadow-lg ring-4 ring-black"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5AC8FA] animate-ping opacity-20"></div>
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[calc(55%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-strong rounded-[24px] p-6 md:p-8 shadow-ios hover:shadow-ios-strong transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-6">
                <div className="flex flex-col gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      {job.company}
                    </h3>
                    {job.linkedIn && (
                      <a
                        href={job.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007AFF] hover:text-[#5AC8FA] transition-colors active:scale-95"
                        aria-label={`LinkedIn profile of ${job.company}`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-lg bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent font-semibold">
                    {job.position}
                  </p>
                  <span className="text-white/60 font-medium text-sm">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 glass text-white/90 rounded-[12px] text-xs font-medium hover:bg-white/20 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
