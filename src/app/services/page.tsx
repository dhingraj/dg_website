"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Server, Zap, ShieldCheck, Eye, Activity } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Zap,
  ShieldCheck,
  Eye,
  Activity,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header - Compact */}
      <section className="relative bg-navy-500 pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-white/10 text-accent-300">
              Services
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              What We Do
            </h1>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              Five interconnected pillars of expertise, transforming traditional plants into smart, compliant, and future-ready facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Cards - Compact */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <SectionHeader
            badge="Our Expertise"
            title="Comprehensive Industrial Solutions"
            subtitle="Deep technical capabilities across five core service domains"
          />
          <div className="space-y-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Server;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="scroll-mt-24"
                >
                  <div className="p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy-500 mb-2">{service.title}</h3>
                        <p className="text-sm text-navy-500/60 leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 text-sm text-navy-500/70"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="section-padding-tight bg-navy-500">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/60 text-sm max-w-xl">
                Partner with DG Micropronix to leverage three decades of technical expertise.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-cta">
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/projects" className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:text-white">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
