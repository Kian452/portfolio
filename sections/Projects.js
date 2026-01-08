"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "MyTraderJournal",
    description: "Trading-Journal Web-App zum Tracken, Analysieren und Reflektieren von Trades.",
    tech: ["TypeScript", "Next.js", "MongoDB"],
    repoLink: "https://github.com/Kian452/MyTraderJournal.git",
    liveLink: null,
    featured: true,
    stats: ["Hackathon-ready", "Fullstack", "Iterativ erweiterbar"],
  },
];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-spacing bg-background">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-text-primary text-center"
        >
          Projekte
        </motion.h2>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="professional-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  {featuredProject.title}
                </h3>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/20">
                  Featured
                </span>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              {featuredProject.stats && featuredProject.stats.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.stats.map((stat, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface border border-border text-text-secondary rounded-full text-xs font-medium"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {featuredProject.repoLink && (
                  <a
                    href={featuredProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Repository
                  </a>
                )}
                {featuredProject.liveLink && (
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="professional-card h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {project.stats && project.stats.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stats.map((stat, statIndex) => (
                        <span
                          key={statIndex}
                          className="px-2 py-1 bg-surface border border-border text-text-secondary rounded-full text-xs font-medium"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full text-center"
                      >
                        Repository
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
