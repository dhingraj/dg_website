"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceFlow from "@/components/ServiceFlow";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/15 via-transparent to-transparent" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-white/10 text-accent-300">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              What We Do
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Five interconnected pillars of expertise, transforming traditional
              plants into smart, compliant, and future-ready facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Flow Diagram */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="Service Ecosystem"
            title="Our Integrated Approach"
            subtitle="DG Micropronix sits at the center of five interconnected service domains, delivering holistic solutions."
          />
          <ServiceFlow />
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="In Detail"
            title="Our Service Pillars"
            subtitle="Deep dive into each of our core service offerings"
          />
          <div className="space-y-8">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                {...service}
                index={i}
                compact={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-500">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Partner with DG Micropronix to leverage three decades of technical
              expertise, innovation, and unwavering commitment to excellence.
            </p>
            <Link href="/contact" className="btn-cta text-base">
              Get in Touch
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

