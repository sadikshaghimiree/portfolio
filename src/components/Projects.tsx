"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group block bg-white/80 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all cursor-pointer shadow-sm dark:shadow-none"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium bg-blue-100 dark:bg-slate-700/60 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-4 text-sm font-medium">
              <span className="text-gray-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                GitHub &rarr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
