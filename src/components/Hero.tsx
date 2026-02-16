"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-800/10 via-transparent to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-300 uppercase tracking-wider border border-white/10">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Since 1995 — 30 Years of Innovation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Transform Ideas
            <br />
            <span className="gradient-text bg-gradient-to-r from-accent-400 to-accent-300">
              Into Reality
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            A technology-driven engineering company delivering end-to-end system
            integration across IT infrastructure, electrical automation, and
            fire safety solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/services" className="btn-primary text-base">
              Explore Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:text-white text-base">
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Value Chain Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 lg:mt-24"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-6">
            Our Value Chain
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            {[
              { label: "Plant + IT", color: "from-white/10 to-white/5" },
              { label: "Digital Plant", color: "from-accent-500/20 to-accent-500/10" },
              { label: "Smart Plant", color: "from-accent-500/30 to-accent-500/20" },
              { label: "Smart Compliant Plant", color: "from-accent-400/40 to-accent-400/30" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-0">
                <div
                  className={`px-5 py-3 rounded-xl bg-gradient-to-r ${step.color} border border-white/10 backdrop-blur-sm`}
                >
                  <span className="text-sm font-semibold text-white whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {i < 3 && (
                  <ChevronRight className="w-5 h-5 text-white/30 mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

