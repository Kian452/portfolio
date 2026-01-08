"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Kanban } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript", "UX/UI-Design"],
    icon: Code,
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "Node.js", "Bash"],
    icon: Server,
  },
  {
    title: "Datenbanken",
    items: ["SQL", "MongoDB"],
    icon: Database,
  },
  {
    title: "Tools & Design",
    items: ["Figma", "Visio", "AI-Tools", "Bubble", "Excel"],
    icon: Wrench,
  },
  {
    title: "Workflow",
    items: ["Trello (Gruppenarbeiten)", "Teamarbeit", "Iteration", "saubere Dokumentation"],
    icon: Kanban,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-primary">
            Skills
          </h2>
          <p className="text-lg text-text-secondary">
            Technologien, Tools und Arbeitsweise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="professional-card h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1.5 bg-surface border border-border text-text-secondary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
