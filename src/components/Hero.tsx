"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="section flex items-center justify-center min-h-[90vh]"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-sm font-medium tracking-widest text-blue-500 dark:text-blue-400 uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300">
              Sadiksha
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-slate-400">
            Computer Engineering Student &bull; AWS Cloud Enthusiast &bull; ML
            Enthusiast
          </p>

          <p className="mt-3 text-gray-500 dark:text-slate-500 max-w-lg">
            Passionate about AWS cloud computing, building intelligent ML
            applications, and developing scalable systems.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-[360px] md:h-[440px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-slate-700">
            <Image
              src="/images/profile.png"
              alt="Sadiksha"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
