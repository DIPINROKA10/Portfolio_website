"use client";

import { motion } from "framer-motion";
import {
  Star,
  Code2,
  GitCommit,
  Award,
  Target,
} from "lucide-react";

const achievements = [
  {
    text: "Active participant in regional and national-level hackathons",
    icon: Award,
  },
  {
    text: "Built projects in Web Development, Data Science, and AI",
    icon: Code2,
  },
  {
    text: "Maintains active GitHub and HackerRank profiles",
    icon: GitCommit,
  },
  {
    text: "Passionate about becoming a professional Full Stack Web Developer",
    icon: Target,
  },
  {
    text: "Consistently improving DSA and problem-solving skills",
    icon: Star,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Achievements</span>
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.text}
              className="glass-card rounded-xl p-5 flex items-start gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex-shrink-0">
                <item.icon size={18} className="text-purple-400" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
