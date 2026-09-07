"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Internship() {
  return (
    <section id="internship" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Internship <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          className="glass-card rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10">
              <Briefcase size={22} className="text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold">AICTE – 1M1B Internship</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Completed an innovation and entrepreneurship program focused on
                real-world problem solving, research methodologies, team
                collaboration, and project development.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Innovation & Entrepreneurship",
                  "Problem Solving",
                  "Team Collaboration",
                  "Project Development",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
