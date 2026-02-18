"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";

export default function Timeline() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-accent-300 to-transparent 
        md:-translate-x-px" />

      <div className="space-y-10 md:space-y-12">
        {milestones.map((milestone, i) => {
          const isLeft = i % 2 === 0;
          const isFuture = milestone.year > currentYear;

          return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
              className={`relative flex items-start md:items-center gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`flex-1 ml-12 md:ml-0 ${
                  isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}
              >
                <div
                  className={`inline-block p-5 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    isFuture
                      ? "bg-accent-50/30 border-accent-200 border-dashed"
                      : "bg-white border-gray-100 shadow-sm"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isFuture ? "text-accent-500" : "text-accent-600"
                    }`}
                  >
                    {isFuture ? `${milestone.year} — Upcoming` : milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-navy-500 mt-1.5 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed max-w-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isFuture
                      ? "border-accent-200 bg-accent-50"
                      : "border-accent-500 bg-white shadow-md"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isFuture ? "bg-accent-300" : "bg-accent-500"
                    }`}
                  />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
