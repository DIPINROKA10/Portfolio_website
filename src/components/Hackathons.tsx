"use client";

import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const hackathons = [
  {
    name: "Bengaluru Zonals Hackathon 2026",
    description:
      "Co-developed TraceRelief, an emergency disaster response platform designed to improve communication and assistance during natural disasters.",
    icon: "🏆",
  },
  {
    name: "GreenHack Sustainability Hackathon",
    description:
      "Developed EcoWise AI, a sustainability-focused solution addressing environmental challenges.",
    icon: "🌿",
  },
  {
    name: "MSME Idea Hackathon 5.0",
    description:
      "Participated in this national-level hackathon, presenting innovative ideas for business and technology challenges.",
    icon: "💡",
  },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,126,234,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-6 relative">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hackathons &{" "}
          <span className="gradient-text">Competitions</span>
        </motion.h2>

        <div className="space-y-5">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.name}
              className="glass-card rounded-2xl p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{hack.icon}</span>
                <div>
                  <h3 className="font-semibold text-base">{hack.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {hack.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
