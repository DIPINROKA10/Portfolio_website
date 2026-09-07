"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "AI for Sustainability Virtual Internship",
    org: "1M1B x AICTE x IBM",
    period: "May 2026 — June 2026",
    description:
      "Explored Responsible AI, Agentic AI, and Retrieval-Augmented Generation (RAG). Built RoadFix Bengaluru, a sustainable civic reporting and dispatch platform for SDG 11 with geo-pinning, dual-role portal, and a command & dispatch dashboard.",
    tags: ["Responsible AI", "Agentic AI", "RAG", "React 18", "TypeScript", "Leaflet", "Civic Tech"],
  },
  {
    title: "1M1B Green Internship — Batch 7",
    org: "1M1B x AICTE x Salesforce",
    period: "2025",
    description:
      "Learned sustainability, climate action, design thinking, and data visualization. Co-developed a Carbon Footprint Calculator for Students to help young individuals estimate daily carbon emissions and adopt environmentally responsible habits.",
    tags: ["Sustainability", "Climate Action", "Design Thinking", "Data Visualization", "Carbon Footprint"],
  },
  {
    title: "AICTE – 1M1B Internship",
    org: "AICTE",
    period: "2025",
    description:
      "Completed an innovation and entrepreneurship program focused on real-world problem solving, research methodologies, team collaboration, and project development.",
    tags: ["Innovation & Entrepreneurship", "Problem Solving", "Team Collaboration", "Project Development"],
  },
];

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

        <div className="space-y-6">
          {internships.map((internship, i) => (
            <motion.div
              key={internship.title}
              className="glass-card rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex-shrink-0">
                  <Briefcase size={22} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{internship.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {internship.period}
                    </span>
                  </div>
                  <p className="text-xs text-purple-400 mt-0.5">{internship.org}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {internship.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {internship.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}