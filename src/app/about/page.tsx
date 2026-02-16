"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPin,
  Quote,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { companyInfo, locations } from "@/lib/data";

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              From a microprocessor workshop in 1995 to a technology partner for
              India&apos;s largest industrial organizations — this is the DG
              Micropronix journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">
                Three Decades of
                <br />
                <span className="gradient-text">Engineering Excellence</span>
              </h2>
              <div className="space-y-4 text-navy-500/70 leading-relaxed">
                <p>
                  Founded in 1995 as <strong>Micropronix</strong>, born from a
                  passion for microprocessors and electronic product innovation.
                  We developed India&apos;s first in-house microprocessor-based
                  testing kit for BSNL telephone exchanges.
                </p>
                <p>
                  Through the late &apos;90s and early 2000s, we evolved —
                  bridging technological gaps with indigenous solutions that
                  powered communication networks across the country.
                </p>
                <p>
                  Over three decades, DG Micropronix has transformed into a
                  comprehensive technology partner, delivering excellence in
                  industrial IT, automation, IoT, surveillance, and fire safety
                  systems — trusted by corporates, heavy industries, and
                  government organizations nationwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Target,
                  label: "Projects Delivered",
                  value: "200+",
                },
                {
                  icon: Award,
                  label: "Years in Industry",
                  value: "30+",
                },
                {
                  icon: CheckCircle2,
                  label: "Client Satisfaction",
                  value: "100%",
                },
                {
                  icon: Lightbulb,
                  label: "Revenue Till Date",
                  value: "₹170 Cr",
                },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-2xl border border-gray-100 bg-gray-50/50 ${
                    i % 2 === 1 ? "mt-6" : ""
                  }`}
                >
                  <stat.icon className="w-8 h-8 text-accent-500 mb-3" />
                  <div className="text-2xl font-bold text-navy-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-navy-500/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Purpose"
            title="Vision & Mission"
            subtitle="What drives us every day"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">Vision</h3>
              <p className="text-navy-500/60 leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">Mission</h3>
              <p className="text-navy-500/60 leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="Journey"
            title="Our Milestones"
            subtitle="Key moments that shaped DG Micropronix over three decades"
          />
          <Timeline />
        </div>
      </section>

      {/* Founder&apos;s Message */}
      <section className="relative section-padding bg-navy-500 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        <div className="relative container-max">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-12 h-12 text-accent-500/40 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-8">
                &ldquo;{companyInfo.founderQuote}&rdquo;
              </blockquote>
              <div>
                <div className="w-16 h-16 rounded-full bg-accent-500/20 border-2 border-accent-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-400">DD</span>
                </div>
                <p className="text-white font-semibold text-lg">
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

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="Quality"
            title="Our Certifications"
            subtitle="Standards that define our commitment to excellence"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {companyInfo.certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-8 py-6 rounded-2xl border-2 border-accent-100 bg-accent-50/30 text-center hover:border-accent-300 hover:shadow-lg transition-all"
              >
                <Award className="w-8 h-8 text-accent-500 mx-auto mb-3" />
                <span className="text-lg font-bold text-navy-500">{cert}</span>
                <p className="text-xs text-navy-500/50 mt-1">Certified</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Presence"
            title="Our Locations Across India"
            subtitle="Delivering solutions at industrial sites across multiple states"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.abbr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500">{loc.state}</h3>
                    <span className="text-xs text-navy-500/40 font-medium">
                      {loc.abbr}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {loc.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 text-xs font-medium bg-gray-50 text-navy-500/70 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

