"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Server, Zap, ShieldCheck, Eye, Activity, Award, Target } from "lucide-react";
import { services, companyInfo, stats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Zap,
  ShieldCheck,
  Eye,
  Activity,
};

export default function Home() {
  return (
    <>
      {/* Hero - Compact, impactful */}
      <section className="relative bg-navy-500 pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold text-accent-300 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                Since 1995 — 30 Years of Innovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Industrial Technology
              <br />
              <span className="gradient-text bg-gradient-to-r from-accent-400 to-accent-300">
                That Works
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base text-white/60 max-w-2xl leading-relaxed"
            >
              End-to-end system integration across IT infrastructure, electrical automation, surveillance, fire safety, and IoT solutions for India's leading industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Link href="/services" className="btn-primary">
                Explore Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/contact" className="btn-cta">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats bar - integrated, compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative border-t border-white/10 bg-navy-600/50 backdrop-blur-sm"
        >
          <div className="container-max px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-white/50 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services - Compact grid */}
      <section className="section-padding-tight bg-gray-50 border-b border-gray-100">
        <div className="container-max">
          <div className="flex items-end justify-between mb-5">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 bg-accent-50 text-accent-600">
                What We Do
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-500">
                Five Pillars of Excellence
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-accent-500 hover:gap-2 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Server;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="group block p-4 rounded-lg border border-gray-200 bg-white hover:border-accent-300 hover:shadow-md transition-all h-full"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center mb-3 group-hover:bg-accent-100 transition-colors">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <h3 className="text-base font-bold text-navy-500 mb-2 group-hover:text-accent-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy-500/60 leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 text-center md:hidden">
            <Link href="/services" className="btn-primary">
              View All Services
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props - Two column */}
      <section className="section-padding-tight bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg bg-gradient-to-br from-accent-50 to-white border border-accent-100"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-2">Our Mission</h3>
              <p className="text-sm text-navy-500/70 leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg bg-gradient-to-br from-cta-50 to-white border border-cta-100"
            >
              <div className="w-10 h-10 rounded-lg bg-cta-500 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-2">Certified Excellence</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {companyInfo.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-navy-500"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-tight bg-navy-500">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/60 text-sm max-w-xl">
                Partner with DG Micropronix to leverage three decades of engineering excellence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-cta">
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/about" className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:text-white">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
