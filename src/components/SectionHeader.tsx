"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center mb-6" : "mb-6"}
    >
      {badge && (
        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 bg-accent-50 text-accent-600">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-navy-500 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm text-navy-500/60 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
