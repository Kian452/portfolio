"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Sparkles } from "lucide-react";

const experience = [
  {
    title: "Gymnasium Schillerstraße (Österreich)",
    period: "4 Jahre",
    description: "Fundament für strukturiertes Lernen und Disziplin.",
    type: "education",
    icon: GraduationCap,
  },
  {
    title: "3. Sek (Übergangsjahr)",
    period: "1 Jahr",
    description: "Übergang und Fokus auf Orientierung & Grundlagen.",
    type: "education",
    icon: School,
  },
  {
    title: "IMS (aktuell)",
    period: "3 Jahre (aktuell im 2. Jahr)",
    description: "Praxisnahe Informatikausbildung mit Fokus auf Webentwicklung, Projekte und Teamarbeit.",
    type: "education",
    icon: School,
  },
  {
    title: "Hackathons",
    period: "2× Teilnahme",
    description: "Schnelles Prototyping unter Zeitdruck, Zusammenarbeit im Team, iterative Umsetzung.",
    type: "event",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-spacing bg-surface">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-text-primary text-center"
        >
          Erfahrung
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {experience.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20 md:pl-24"
                >
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-accent border-4 border-white z-10 hidden md:block"></div>

                  <div className="professional-card">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                          {exp.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/20">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed ml-0 md:ml-14">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
