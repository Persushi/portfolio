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
    { name: "Emergencias", logo: "/clients/emergencias.jpg" },
    { name: "CTrading", logo: "/clients/ctrading.png" },
    { name: "Acceleanation", logo: "/clients/Acceleanation.png" },
    { name: "Replace IT", logo: "/clients/replace.jpg" },
    { name: "Intermedia IT", logo: "/clients/intermedia.png" },
    { name: "Flow", logo: "/clients/flow.png" },
    { name: "Chubut IT", logo: "/clients/logo1.webp" },
    { name: "Avenga Latam", logo: "/clients/avenga.webp" },
    { name: "Phorus Group", logo: "/clients/phorus.svg" },
    { name: "Sowy Producciones", logo: "/clients/303268627_776740187026926_5440637150905546151_n.png" }
  ];

  // Triplicar el array para asegurar un loop verdaderamente infinito
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 overflow-hidden border-y border-white/10">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t.clients?.title || "Clientes & Colaboraciones"}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#5AC8FA] to-[#007AFF] mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Gradientes en los bordes para efecto fade sutil */}

        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: [0, -(clients.length * (222 + 24))]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="relative w-48 h-32 glass-strong rounded-[20px] p-4 hover:bg-white/20 transition-all duration-300 shadow-ios">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
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
