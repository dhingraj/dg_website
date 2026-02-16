"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ValueChain from "@/components/ValueChain";
import ServiceCard from "@/components/ServiceCard";
import ClientLogos from "@/components/ClientLogos";
import SectionHeader from "@/components/SectionHeader";
import { services, companyInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero + Stats */}
      <Hero />
      <Stats />

      {/* Value Chain */}
      <ValueChain />

      {/* Services Overview */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="What We Do"
            title="Five Pillars of Excellence"
            subtitle="We deliver interconnected solutions across five core domains, transforming traditional operations into smart, safe, and efficient systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                {...service}
                index={i}
                compact
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-primary">
              View All Services
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Vision CTA */}
      <section className="relative section-padding bg-navy-500 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        <div className="relative container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-white/10 text-white/70">
              Our Vision
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-snug mb-6">
              &ldquo;{companyInfo.vision}&rdquo;
            </blockquote>
            <p className="text-white/50 text-sm mb-10">
              — {companyInfo.founderName}, {companyInfo.founderTitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-cta">
                Partner With Us
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
