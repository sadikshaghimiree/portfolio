"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/sadikshaghimiree" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sadikshaghimiree" },
  { label: "Medium", href: "https://medium.com/@sadikshaghimire29" },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=info.sadiksha@gmail.com" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-gray-200 dark:border-slate-800 bg-gray-100 dark:bg-[#070d1a] py-10 text-center text-sm text-gray-500 dark:text-slate-500 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-gray-400 dark:text-slate-600">
          &copy; {new Date().getFullYear()} Sadiksha. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
