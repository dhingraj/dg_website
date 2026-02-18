"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Server, Zap, ShieldCheck, Eye, Activity, CheckCircle2, Heart } from "lucide-react";
import { services, stats, clients, partners, dedicationPoints } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Zap,
  ShieldCheck,
  Eye,
  Activity,
};

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-500 pt-28 pb-0 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />

        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold 
                  text-accent-300 uppercase tracking-wider border border-white/5">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Since 1995 — 30 Years of Innovation
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Industrial Technology
                <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  That Works
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed"
              >
                End-to-end system integration across IT infrastructure, electrical automation, 
                surveillance, fire safety, and IoT solutions for India&apos;s leading industries.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link 
                  href="/services" 
                  className="btn-primary group"
                >
                  Explore Services
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-cta"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-16 border-t border-white/10 bg-navy-600/50 backdrop-blur-sm"
        >
          <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-white/50 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Customer Logos Marquee */}
      <section className="py-10 bg-gray-50/80 border-b border-gray-100 overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 mb-6" />
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/80 to-transparent z-10" />
          
          {/* Scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex overflow-hidden"
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
              className="flex gap-8 items-center"
            >
              {/* Double the logos for seamless loop */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm opacity-90 hover:opacity-100 transition-all duration-300"
                  title={client.name}
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-6 w-auto max-w-[110px] object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-xs font-semibold text-navy-600 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-standard bg-gray-50/50 border-b border-gray-100">
        <div className="container-max">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
                uppercase tracking-wider mb-4 bg-accent-50 text-accent-700 border border-accent-100">
                What We Do
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-500 tracking-tight">
                Five Pillars of Excellence
              </h2>
            </div>
            <Link 
              href="/services" 
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 
                hover:text-accent-700 transition-all duration-200 group"
            >
              View All Services
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Server;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="group card-interactive h-full flex flex-col"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center mb-4 
                      transition-colors duration-200 group-hover:bg-accent-100">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-500 mb-2 
                      group-hover:text-accent-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy-500/60 leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent-600 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/services" 
              className="btn-primary"
            >
              View All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OEM Partners Section */}
      <section className="section-standard bg-white border-b border-gray-100">
        <div className="container-max">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-accent-50 text-accent-700 border border-accent-100">
              Strategic Alliances
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-500 tracking-tight mb-3">
              OEM Partners
            </h2>
            <p className="text-navy-500/60 leading-relaxed">
              We partner with the world&apos;s leading technology companies to deliver best-in-class solutions
            </p>
          </div>

          {/* Partners Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.25, 1, 0.5, 1] }}
                className="group px-6 py-4 rounded-xl bg-gray-50/50 border border-gray-100 
                  transition-all duration-200 hover:border-accent-200 hover:shadow-md hover:bg-white"
                title={partner.name}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-6 w-auto max-w-[96px] object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-sm font-semibold text-navy-600 max-w-[220px]">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication & Commitment Section */}
      <section className="section-standard bg-gray-50/50 border-b border-gray-100">
        <div className="container-max">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-accent-50 text-accent-700 border border-accent-100">
              Our Values
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-500 tracking-tight mb-3">
              Dedication & Commitment
            </h2>
            <p className="text-navy-500/60 leading-relaxed">
              The principles that guide every customer interaction
            </p>
          </div>

          {/* Dedication Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {dedicationPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 
                  transition-colors duration-200 hover:bg-accent-50/30 hover:border-accent-100"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-600" />
                </div>
                <p className="text-sm text-navy-500/70 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA Section */}
      <section className="section-standard bg-navy-500">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with DG Micropronix to leverage three decades of engineering excellence 
              and deliver solutions that drive real business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-cta group"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link 
                href="/about" 
                className="btn-ghost"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
