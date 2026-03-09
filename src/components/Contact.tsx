"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b30046f7-26b8-4dac-91c0-621b090962ee",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Get In Touch</h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-4" />
        <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-md">
          Have a project idea or just want to say hello? Feel free to reach
          out.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <textarea
            placeholder="Your message..."
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <span className="text-green-400 text-sm">Message sent successfully!</span>
            )}
            {status === "error" && (
              <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
