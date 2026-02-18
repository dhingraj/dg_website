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
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-white/10 text-accent-300 border border-white/5">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Our Story
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              From a microprocessor workshop in 1995 to a technology partner for 
              India&apos;s largest industrial organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-standard bg-white border-b border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-500 tracking-tight mb-6">
                Three Decades of
                <br />
                <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
                  Engineering Excellence
                </span>
              </h2>
              <div className="space-y-4 text-navy-500/70 leading-relaxed">
                <p>
                  Founded in 1995 as <strong className="text-navy-500">Micropronix</strong>, 
                  born from a passion for microprocessors and electronic product innovation. 
                  We developed India&apos;s first in-house microprocessor-based testing kit for 
                  BSNL telephone exchanges.
                </p>
                <p>
                  Through the late &apos;90s and early 2000s, we evolved — bridging technological 
                  gaps with indigenous solutions that powered communication networks across the country.
                </p>
                <p>
                  Over three decades, DG Micropronix has transformed into a comprehensive 
                  technology partner, delivering excellence in industrial IT, automation, IoT, 
                  surveillance, and fire safety systems.
                </p>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Certifications */}
              <div>
                <h3 className="text-xs font-bold text-navy-500/50 uppercase tracking-wider mb-4">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="px-3 py-2.5 rounded-xl border border-accent-100 bg-accent-50/50 
                        text-center transition-colors duration-200 hover:bg-accent-50"
                    >
                      <Award className="w-4 h-4 text-accent-500 mx-auto mb-1" />
                      <span className="text-xs font-bold text-navy-600 block">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-xs font-bold text-navy-500/50 uppercase tracking-wider mb-4">
                  Presence Across India
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {locations.map((loc) => (
                    <div
                      key={loc.abbr}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 
                        transition-colors duration-200 hover:bg-accent-50/30 hover:border-accent-100"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent-500" />
                        <span className="text-sm font-bold text-navy-600">{loc.state}</span>
                      </div>
                      <div className="text-xs text-navy-500/60">
                        {loc.cities.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-standard bg-gray-50/50 border-b border-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-accent-600" />
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
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent-600" />
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
      <section className="section-standard bg-white border-b border-gray-100">
        <div className="container-max">
          <SectionHeader
            badge="Journey"
            title="Our Milestones"
            subtitle="Key moments that shaped DG Micropronix over three decades of growth and innovation."
          />
          <Timeline />
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-standard bg-navy-500">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mx-auto mb-6">
                <Quote className="w-7 h-7 text-accent-400" />
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-8">
                &ldquo;{companyInfo.founderQuote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent-500/20 border-2 border-accent-500/30 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-accent-400">DD</span>
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
    </>
  );
}
