"use client";

import { motion } from "framer-motion";

const languages = ["Deutsch", "Englisch", "Französisch", "Persisch"];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="professional-card p-8 md:p-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-4 text-text-primary"
            >
              Kontakt
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent mb-6 font-medium"
            >
              Bewerbung für eine Praktikumsstelle als Fullstack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-text-secondary mb-10 leading-relaxed"
            >
              Ich bin motiviert, meine Kenntnisse in der Praxis einzusetzen und mich fachlich weiterzuentwickeln. 
              Über eine Kontaktaufnahme im Rahmen einer Praktikumsmöglichkeit freue ich mich sehr.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href="https://github.com/Kian452"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub ansehen
              </a>
              <a
                href="mailto:kiangray54@gmail.com"
                className="btn-secondary"
              >
                E-Mail schreiben
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <button
                disabled
                className="px-6 py-3 rounded-lg font-medium text-base border border-border text-text-muted opacity-50 cursor-not-allowed"
                title="Coming soon"
              >
                CV herunterladen (Coming soon)
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <span className="text-sm text-text-muted mb-2 w-full">Sprachen:</span>
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-surface border border-border text-text-secondary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  {language}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
