"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-navy-500 mb-2">
          Message Sent!
        </h3>
        <p className="text-navy-500/60">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy-500 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-500 text-sm
              focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-400 transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-500 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-500 text-sm
              focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-400 transition-all"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-500 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-500 text-sm
              focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-400 transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-navy-500 mb-2"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-500 text-sm
              focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-400 transition-all"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-500 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-navy-500 text-sm resize-none
            focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-400 transition-all"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto text-base"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
}

