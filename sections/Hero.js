"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingTexts = [
  "Ich baue moderne Web-Apps.",
  "Ich verbinde Frontend, Backend und Daten.",
  "Ich mastere AI als Werkzeug für echten Mehrwert.",
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-spacing bg-surface">
      <div className="section-container w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-text-primary"
          >
            Kian Gray
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl text-text-secondary mb-8 font-medium"
          >
            Fullstack Developer (Praktikum) · IMS Schüler
          </motion.p>

          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="h-20 sm:h-24 mb-8 flex items-center justify-center"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary">
              {rotatingTexts[currentTextIndex]}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Als angehender Fullstack Developer verbinde ich Frontend und Backend zu modernen Lösungen. 
            Meine Leidenschaft gilt innovativen Projekten, Hackathons und dem strategischen Einsatz von AI-Tooling für echten Mehrwert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-primary"
            >
              Projekte ansehen
            </a>
            <a
              href="https://github.com/Kian452"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["Python", "TypeScript", "Next.js", "Flask", "MongoDB"].map((badge, index) => (
              <span
                key={badge}
                className="px-4 py-2 bg-surface border border-border text-text-secondary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
