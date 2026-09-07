"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Shield, Undo2, BarChart3, Leaf } from "lucide-react";

const projects = [
  {
    title: "TraceRelief",
    description:
      "AI-assisted disaster response and emergency management platform. Developed during Bengaluru Zonals Hackathon.",
    features: [
      "Emergency disaster reporting system",
      "Location and pincode-based assistance",
      "Relief coordination workflow",
      "User-friendly emergency support interface",
    ],
    icon: Shield,
    color: "from-purple-500/20 to-purple-600/10",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
  },
  {
    title: "Smart Text Editor",
    description:
      "Implemented using Stack and Heap data structures with undo-redo functionality and word frequency analysis.",
    icon: Undo2,
    color: "from-cyan-500/20 to-cyan-600/10",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
  },
  {
    title: "Statistics for Data Science",
    description:
      "Performed data cleaning, visualization, and statistical analysis using Python.",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/10",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
  },
  {
    title: "EcoWise AI",
    description:
      "Sustainability-focused solution developed during hackathon participation.",
    icon: Leaf,
    color: "from-green-500/20 to-green-600/10",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6 sm:p-8">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}
                >
                  <project.icon
                    size={22}
                    className="text-purple-400"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="space-y-1.5 mb-5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  <GitBranch size={14} />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
