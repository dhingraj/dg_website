"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { stateNames } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "IT Infrastructure": "bg-blue-50 text-blue-700 border-blue-200",
  "Electrical Automation": "bg-amber-50 text-amber-700 border-amber-200",
  "Plant Safety": "bg-red-50 text-red-700 border-red-200",
  Surveillance: "bg-purple-50 text-purple-700 border-purple-200",
  "Condition Monitoring": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

interface ProjectCardProps {
  title: string;
  category: string;
  state: string;
  description: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  state,
  description,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold border ${
            categoryColors[category] || "bg-gray-50 text-gray-600 border-gray-200"
          }`}
        >
          {category}
        </span>
        <span className="flex items-center gap-1 text-xs text-navy-500/40 font-medium flex-shrink-0">
          <MapPin className="w-3 h-3" />
          {stateNames[state] || state}
        </span>
      </div>
      <h3 className="text-base font-bold text-navy-500 mb-2 group-hover:text-accent-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-navy-500/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}

