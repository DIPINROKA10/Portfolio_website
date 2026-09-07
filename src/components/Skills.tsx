"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  GitBranch,
  Cpu,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C", "SQL"],
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    title: "Core Subjects",
    icon: Cpu,
    skills: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning Fundamentals",
      "Networking & Security",
      "Probability & Statistics",
    ],
    color: "from-pink-500/20 to-pink-600/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}
              >
                <category.icon
                  size={22}
                  className="text-purple-400 group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-base font-semibold mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
