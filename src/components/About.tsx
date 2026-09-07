"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const details = [
  { label: "Name", value: "Dipin Roka", icon: User },
  { label: "Email", value: "dipinroka24@gmail.com", icon: Mail, href: "mailto:dipinroka24@gmail.com" },
  { label: "Phone", value: "+91 7085496678", icon: Phone, href: "tel:+917085496678" },
  { label: "Location", value: "Bengaluru, India", icon: MapPin },
];

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dipin-roka",
    color: "hover:border-blue-500/40",
  },
  {
    label: "GitHub",
    url: "https://github.com/DIPINROKA10",
    color: "hover:border-gray-400/40",
  },
  {
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/dipinroka24",
    color: "hover:border-emerald-500/40",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I am a Bachelor of Computer Applications (BCA) student at{" "}
              <span className="text-foreground font-medium">Alliance University, Bengaluru</span>,
              passionate about Web Development, Artificial Intelligence, Data Science, Problem
              Solving, and Innovation. I actively participate in hackathons, internships, and
              technical projects to gain real-world experience and build impactful technology
              solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details.map(({ label, value, icon: Icon, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg gradient-bg/20">
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium truncate block hover:text-purple-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-purple-500/30 mb-4">
                <img
                  src="/images/profile.jpeg"
                  alt="Dipin Roka"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Dipin Roka</h3>
              <p className="text-xs text-muted-foreground mt-1">
                BCA Student | Web Developer
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map(({ label, url, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between glass-card rounded-xl px-4 py-3.5 transition-all ${color} group`}
                  >
                    <span className="text-sm font-medium">{label}</span>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
