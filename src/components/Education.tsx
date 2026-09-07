"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Alliance University, Bengaluru",
    period: "Expected 2027",
    icon: GraduationCap,
    details: [
      { label: "Semester IV SGPA", value: "8.2" },
      { label: "Semester III SGPA", value: "7.8" },
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "CBSE Board",
    period: "Completed",
    icon: School,
    details: [],
  },
  {
    degree: "Secondary School Education (Class X)",
    institution: "CBSE Board",
    period: "Completed",
    icon: BookOpen,
    details: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(118,75,162,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-6 relative">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="absolute left-0 p-2.5 rounded-full glass-card z-10">
                  <item.icon size={20} className="text-purple-400" />
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.degree}</h3>
                      <p className="text-sm text-purple-400 mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-white/5 rounded-full px-3 py-1 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  {item.details.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {item.details.map((detail) => (
                        <span
                          key={detail.label}
                          className="text-xs glass rounded-full px-3 py-1.5 text-muted-foreground"
                        >
                          {detail.label}:{" "}
                          <span className="text-emerald-400 font-medium">
                            {detail.value}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
