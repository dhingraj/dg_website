"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPin,
  Quote,
  Target,
  Lightbulb,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { companyInfo, locations } from "@/lib/data";

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              Our Story
            </h1>
            <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
              From a microprocessor workshop in 1995 to a technology partner for India's largest industrial organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story - Compact */}
      <section className="section-padding-tight bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-navy-500 mb-3">
                Three Decades of
                <br />
                <span className="gradient-text">Engineering Excellence</span>
              </h2>
              <div className="space-y-3 text-sm text-navy-500/70 leading-relaxed">
                <p>
                  Founded in 1995 as <strong>Micropronix</strong>, born from a passion for microprocessors and electronic product innovation. We developed India's first in-house microprocessor-based testing kit for BSNL telephone exchanges.
                </p>
                <p>
                  Through the late '90s and early 2000s, we evolved — bridging technological gaps with indigenous solutions that powered communication networks across the country.
                </p>
                <p>
                  Over three decades, DG Micropronix has transformed into a comprehensive technology partner, delivering excellence in industrial IT, automation, IoT, surveillance, and fire safety systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Certifications - Compact */}
              <div>
                <h3 className="text-xs font-bold text-navy-500/50 uppercase tracking-wider mb-2">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="px-2.5 py-2 rounded-lg border border-accent-100 bg-accent-50/50 text-center"
                    >
                      <Award className="w-3.5 h-3.5 text-accent-500 mx-auto mb-1" />
                      <span className="text-xs font-bold text-navy-500 block">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations - Compact */}
              <div>
                <h3 className="text-xs font-bold text-navy-500/50 uppercase tracking-wider mb-2">Presence Across India</h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((loc) => (
                    <div
                      key={loc.abbr}
                      className="p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3 h-3 text-accent-500" />
                        <span className="text-xs font-bold text-navy-500">{loc.state}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {loc.cities.map((city) => (
                          <span
                            key={city}
                            className="text-xs text-navy-500/60"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Compact */}
      <section className="section-padding-tight bg-gray-50 border-b border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-lg bg-white border border-gray-200"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-500 mb-2">Vision</h3>
              <p className="text-sm text-navy-500/60 leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-lg bg-white border border-gray-200"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-500 mb-2">Mission</h3>
              <p className="text-sm text-navy-500/60 leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max">
          <SectionHeader
            badge="Journey"
            title="Our Milestones"
            subtitle="Key moments that shaped DG Micropronix over three decades"
          />
          <Timeline />
        </div>
      </section>

      {/* Founder's Message - Compact */}
      <section className="section-padding-tight bg-navy-500">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-accent-500/40 mx-auto mb-3" />
              <blockquote className="text-lg md:text-xl font-semibold text-white leading-relaxed mb-5">
                "{companyInfo.founderQuote}"
              </blockquote>
              <div>
                <div className="w-10 h-10 rounded-full bg-accent-500/20 border-2 border-accent-500/30 flex items-center justify-center mx-auto mb-2">
                  <span className="text-base font-bold text-accent-400">DD</span>
                </div>
                <p className="text-white font-semibold">
                  {companyInfo.founderName}
                </p>
                <p className="text-white/50 text-sm">
                  {companyInfo.founderTitle}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
