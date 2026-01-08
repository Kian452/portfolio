"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Über mich
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              <p>
                Als IMS-Schüler und angehender Fullstack Developer verbinde ich diszipliniertes Arbeiten 
                mit kreativen Lösungen. Meine Anpassungsfähigkeit ermöglicht es mir, mich schnell in neue 
                Technologien und Herausforderungen einzuarbeiten. Praxisnah lerne ich durch konkrete Projekte 
                und setze Wissen direkt um.
              </p>
              
              <div className="pl-6 border-l-4 border-accent/20 my-6">
                <p className="text-base sm:text-lg text-text-primary leading-relaxed italic">
                  "Ich bin überzeugt, dass Informatiker, die es sich zur Aufgabe gemacht haben, den Umgang 
                  mit künstlicher Intelligenz zu meistern, in Zukunft den größten Mehrwert schaffen werden."
                </p>
              </div>
            </div>

            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                2× Hackathon-Teilnahmen
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="professional-card">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Quick Facts</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-wider font-semibold">Rolle</p>
                  <p className="text-lg text-text-primary font-medium">Fullstack Developer (Praktikum)</p>
                </div>

                <div>
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-wider font-semibold">Status</p>
                  <p className="text-lg text-text-primary font-medium">IMS Schüler</p>
                </div>

                <div>
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-wider font-semibold">Eigenschaften</p>
                  <p className="text-lg text-text-primary font-medium">Diszipliniert · Kreativ · Anpassungsfähig</p>
                </div>

                <div>
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-wider font-semibold">Fokus</p>
                  <p className="text-lg text-text-primary font-medium">Web Apps · Fullstack · AI-Tooling</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
