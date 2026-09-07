"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  Shield,
  Waves,
  Brain,
  MapPin,
  Wind,
  Leaf,
  Globe,
} from "lucide-react";

const projects = [
  {
    title: "Prakasam Waterhole Sentinel",
    description:
      "AI-powered drowning prevention and rescue coordination system integrating police drone/CCTV feeds for real-time safety monitoring.",
    features: [
      "Real-time drowning detection using YOLOv8 and MediaPipe",
      "Drone and CCTV feed integration",
      "Rescue coordination with instant alerts",
      "Streamlit dashboard with PostgreSQL backend",
    ],
    icon: Waves,
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    live: false,
    links: {
      github: "https://github.com/ch-irax/waterhole_sentinal",
    },
    tags: ["YOLOv8", "MediaPipe", "Streamlit", "PostgreSQL", "Telegram"],
  },
  {
    title: "ASTRA",
    description:
      "Sovereign crime intelligence system built for Karnataka State Police as a Datathon submission with live deployment.",
    features: [
      "Crime data analysis and pattern detection",
      "Intelligence dashboard for law enforcement",
      "Built for Karnataka State Police Datathon",
      "Live production deployment",
    ],
    icon: Shield,
    color: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
    live: true,
    liveUrl: "https://astra-ksp-datathon-zrufprox.onslate.in/",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
    tags: ["AI/ML", "Data Systems", "Python"],
  },
  {
    title: "TraceRelief",
    description:
      "Full-stack AI disaster response and emergency coordination platform developed during Bengaluru Zonals Hackathon.",
    features: [
      "Emergency disaster reporting system",
      "Location and pincode-based assistance",
      "Relief coordination workflow",
      "User-friendly emergency support interface",
    ],
    icon: Shield,
    color: "from-red-500/20 to-red-600/10",
    iconColor: "text-red-400",
    live: false,
    links: {
      github: "https://github.com/neerajcoder1/tracelief-hackathon",
    },
    tags: ["React", "Firebase", "Gemini AI"],
  },
  {
    title: "Pothole & Road Damage Reporter",
    description:
      "AI-based civic reporting tool for road damage detection, built for the 1M1B x IBM SkillsBuild AI for Sustainability internship (SDG 11).",
    features: [
      "AI-powered road damage detection",
      "Civic issue reporting interface",
      "Built for SDG 11 - Sustainable Cities",
      "Live deployed application",
    ],
    icon: MapPin,
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
    live: true,
    liveUrl: "https://1m1b-ai-for-sustainiblity-intership.vercel.app/",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
    tags: ["React", "AI/ML", "IBM SkillsBuild"],
  },
  {
    title: "AirSense AI",
    description:
      "Hyperlocal air quality assistant built on IBM Granite and WatsonX for real-time environmental monitoring.",
    features: [
      "Hyperlocal air quality monitoring",
      "IBM Granite and WatsonX integration",
      "Environmental data visualization",
      "Intelligent air quality recommendations",
    ],
    icon: Wind,
    color: "from-cyan-500/20 to-cyan-600/10",
    iconColor: "text-cyan-400",
    live: false,
    links: {
      github: "https://github.com/DIPINROKA10",
    },
    tags: ["WatsonX", "Python", "IBM Granite"],
  },
  {
    title: "CarbonTrace",
    description:
      "Carbon footprint tracker with India-specific context for tracking and reducing personal environmental impact.",
    features: [
      "India-specific carbon footprint calculation",
      "Personal emissions tracking dashboard",
      "Actionable reduction recommendations",
      "Live deployed application",
    ],
    icon: Leaf,
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-400",
    live: true,
    liveUrl: "https://carbontracev2.netlify.app",
    links: {
      github: "https://github.com/DIPINROKA10",
    },
    tags: ["React", "Firebase", "Sustainability"],
  },
  {
    title: "Vision X Portfolio",
    description:
      "Team portfolio website for Vision X, the student innovation team at Alliance University building AI-powered projects.",
    features: [
      "Modern responsive team portfolio",
      "Showcases Vision X innovation projects",
      "Built with React and deployed on Vercel",
      "Live production site",
    ],
    icon: Globe,
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
    live: true,
    liveUrl: "https://visionx-v1.vercel.app/",
    links: {
      github: "https://github.com/DIPINROKA10/Visionx",
    },
    tags: ["React", "Vercel", "CSS"],
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
                  <project.icon size={22} className={project.iconColor} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.live && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      LIVE
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="space-y-1.5 mb-4">
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

                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-full glass text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
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
                  {project.live && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-emerald-400 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
