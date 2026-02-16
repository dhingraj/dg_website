"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-wider text-navy-500/30 mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all"
            >
              <span className="text-sm font-semibold text-navy-500/70 whitespace-nowrap">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

