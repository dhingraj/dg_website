"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Center line - thinner */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-accent-300 to-accent-100 md:-translate-x-0.5" />

      <div className="space-y-8">
        {milestones.map((milestone, i) => {
          const isLeft = i % 2 === 0;
          const isFuture = milestone.year > new Date().getFullYear();

          return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className={`relative flex items-start md:items-center gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content - more compact */}
              <div
                className={`flex-1 ml-12 md:ml-0 ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-lg border transition-all hover:shadow-md ${
                    isFuture
                      ? "bg-accent-50/50 border-accent-200 border-dashed"
                      : "bg-white border-gray-100 shadow-sm"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isFuture ? "text-accent-400" : "text-accent-500"
                    }`}
                  >
                    {isFuture ? `${milestone.year} — Upcoming` : milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-navy-500 mt-1 mb-1.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-navy-500/60 leading-relaxed max-w-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Dot - slightly smaller */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                <div
                  className={`w-7 h-7 rounded-full border-4 flex items-center justify-center ${
                    isFuture
                      ? "border-accent-200 bg-accent-50"
                      : "border-accent-500 bg-white"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isFuture ? "bg-accent-300" : "bg-accent-500"
                    }`}
                  />
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
