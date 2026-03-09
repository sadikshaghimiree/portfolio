"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-8" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-gray-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am a Computer Engineering student with a deep interest in
              AWS cloud computing, machine learning, and scalable system
              design. I enjoy building intelligent applications that sit at
              the intersection of software engineering and artificial
              intelligence.
            </p>
            <p>
              I am particularly drawn to research opportunities and
              developing impactful technology solutions that solve real-world
              problems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects", value: "4+", href: "#projects" },
              { label: "Technologies", value: "10+", href: "#skills" },
              { label: "Focus", value: "AWS" },
              { label: "Interest", value: "ML / AI", href: undefined as string | undefined },
            ].map((item) => {
              const content = (
                <>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{item.label}</p>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-white/80 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-5 text-center hover:border-blue-500/40 transition-colors shadow-sm dark:shadow-none"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="bg-white/80 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-5 text-center shadow-sm dark:shadow-none"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
