"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AICTE – 1M1B Internship",
    description:
      "Innovation and entrepreneurship program focusing on problem solving, research, team collaboration, and project development.",
    image: "/images/aictce-intership.png",
  },
  {
    title: "Bengaluru Zonals Hackathon 2026",
    description:
      "Regional-level hackathon where TraceRelief was developed as an emergency disaster response platform.",
    image: "/images/hackathonzonals.jpg",
  },
  {
    title: "GreenHack Sustainability Hackathon",
    description:
      "Sustainability-focused hackathon participation for EcoWise AI project.",
    image: "/images/greenhack.jpg",
  },
  {
    title: "CSTC SAU Hackathon",
    description:
      "Technical hackathon participation demonstrating problem-solving and innovation skills.",
    image: "/images/hackathon-cstc.jpg",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Certificates</span>
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass-card rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Award size={16} className="text-purple-400" />
                  <h3 className="font-semibold text-sm">{cert.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
