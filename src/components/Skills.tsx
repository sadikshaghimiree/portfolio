"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C", "C++"],
  },
  {
    title: "Backend",
    skills: ["Django", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Tools & ML",
    skills: ["Git", "Docker", "Scikit-learn", "Linux"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Cloud Computing"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Skills</h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-gray-700 dark:text-slate-200 mb-4">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="bg-white/80 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm text-gray-600 dark:text-slate-300 shadow-sm dark:shadow-none"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
