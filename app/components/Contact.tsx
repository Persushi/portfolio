// @ts-nocheck
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: t.contact.email,
      value: "mateopersich@gmail.com",
      link: "mailto:mateopersich@gmail.com"
    },
    {
      icon: <Github className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: t.contact.github,
      value: "github.com/persushi",
      link: "https://github.com/persushi"
    },
    {
      icon: <Linkedin className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: t.contact.linkedin,
      value: "linkedin.com/in/mateo-persich",
      link: "https://www.linkedin.com/in/mateo-persich/"
    },
    {
      icon: <Phone className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: t.contact.phone,
      value: "+54 351 786 2723",
      link: "tel:+543517862723"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-white/70 mb-12 text-lg">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-strong rounded-[20px] p-6 shadow-ios hover:shadow-ios-strong transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <div className="text-[#007AFF] mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {info.title}
                </h3>
                <p className="text-white/60 text-xs break-words">
                  {info.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 glass px-8 py-4 rounded-[16px] shadow-ios">
              <MapPin className="w-5 h-5 text-[#5AC8FA]" />
              <p className="text-white/90 font-medium">
                {t.about.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
