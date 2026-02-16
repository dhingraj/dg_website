"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Zap,
  ShieldCheck,
  Eye,
  Activity,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Zap,
  ShieldCheck,
  Eye,
  Activity,
};

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  items: string[];
  index: number;
  compact?: boolean;
}

export default function ServiceCard({
  id,
  title,
  shortDesc,
  icon,
  items,
  index,
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Server;

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          href={`/services#${id}`}
          className="group block p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-300 hover:-translate-y-1 h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4 group-hover:bg-accent-100 transition-colors">
            <Icon className="w-6 h-6 text-accent-500" />
          </div>
          <h3 className="text-lg font-bold text-navy-500 mb-2 group-hover:text-accent-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-navy-500/60 leading-relaxed mb-4">
            {shortDesc}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-500 group-hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="scroll-mt-24"
    >
      <div className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
            <Icon className="w-7 h-7 text-accent-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-navy-500 mb-2">{title}</h3>
            <p className="text-base text-navy-500/60 leading-relaxed mb-6">
              {shortDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-navy-500/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

