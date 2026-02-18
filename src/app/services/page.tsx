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
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-28 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-white/10 text-accent-300 border border-white/5">
              Services
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              What We Do
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              Five interconnected pillars of expertise, transforming traditional plants into 
              smart, compliant, and future-ready facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-standard bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Our Expertise"
            title="Comprehensive Industrial Solutions"
            subtitle="Deep technical capabilities across five core service domains, delivering integrated solutions for modern industrial operations."
          />
          
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Server;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                  className="scroll-mt-28"
                >
                  <div className="card-elevated">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-accent-600" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-navy-500 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-navy-500/60 leading-relaxed mb-5 max-w-3xl">
                          {service.shortDesc}
                        </p>
                        
                        {/* Service Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 
                                border border-gray-100 transition-colors duration-200 hover:bg-accent-50/30 hover:border-accent-100"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-navy-500/80">{item}</span>
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

      {/* CTA Section */}
      <section className="section-standard bg-navy-500">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/60 leading-relaxed">
                Partner with DG Micropronix to leverage three decades of technical expertise.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Link 
                href="/contact" 
                className="btn-cta group"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link 
                href="/projects" 
                className="btn-ghost"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
