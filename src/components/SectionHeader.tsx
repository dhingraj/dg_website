"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`${centered ? "text-center" : ""} mb-10 lg:mb-12 ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
          uppercase tracking-wider mb-4 bg-accent-50 text-accent-700 border border-accent-100">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-500 tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base text-navy-500/60 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
