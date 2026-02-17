"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative bg-navy-500 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-accent-300 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
              Since 1995 — 30 Years of Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Industrial Technology
            <br />
            <span className="gradient-text bg-gradient-to-r from-accent-400 to-accent-300">
              That Works
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-white/60 max-w-2xl leading-relaxed"
          >
            End-to-end system integration across IT infrastructure, electrical automation, surveillance, fire safety, and IoT solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/services" className="btn-primary">
              Explore Services
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/contact" className="btn-cta">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative border-t border-white/10 bg-navy-600/50 backdrop-blur-sm"
      >
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-white/50 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
