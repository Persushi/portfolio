// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function ClientsCarousel() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clients = [
    { name: "Naranja X", logo: "/clients/naranjax.png" },
    { name: "Personal Pay", logo: "/clients/ppay.png" },
    { name: "Emergencias", logo: "/clients/emergencias.png" },
    { name: "CTrading", logo: "/clients/ctrading.png" },
    { name: "Acceleanation", logo: "/clients/Acceleanation.png" },
    { name: "Replace IT", logo: "/clients/replace.png" },
    { name: "Intermedia IT", logo: "/clients/intermedia.png" },
    { name: "Chubut IT", logo: "/clients/chubut.png" },
    { name: "Avenga Latam", logo: "/clients/avenga.png" },
    { name: "Phorus Group", logo: "/clients/phorus.png" },
    { name: "Sowy Producciones", logo: "/clients/logo1.webp" }
  ];

  // duplicamos para que el loop sea fluido
  const duplicatedClients = [...clients];

  return (
    <section className="py-16 overflow-hidden border-y border-white/10">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t.clients?.title || "Clientes & Colaboraciones"}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6 items-center"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 250 }}
            >
              <div className="relative w-80 h-80 rounded-[20px] p-4 transition-all duration-30">
                <div className="relative w-full h-full transition-all duration-300 opacity-80 hover:opacity-100">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
