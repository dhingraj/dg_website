"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Handshake,
  Heart,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { clients, partners, dedicationPoints } from "@/lib/data";

export default function ClientsPage() {
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
              Clients & Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Trusted Partnerships
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Building strong, lasting relationships with India&apos;s leading
              industrial organizations and global technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="Clientele"
            title="Our Esteemed Customers"
            subtitle="We are proud to serve India's premier industrial organizations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-accent-200 hover:shadow-lg hover:bg-white transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-100 transition-colors">
                  <Building2 className="w-7 h-7 text-accent-500" />
                </div>
                <h3 className="text-sm font-bold text-navy-500 leading-snug">
                  {client}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Partners */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Strategic Alliances"
            title="OEM Partners"
            subtitle="We partner with the world's leading technology companies to deliver best-in-class solutions"
          />
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group px-8 py-5 rounded-2xl bg-white border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-accent-400 group-hover:text-accent-500 transition-colors" />
                  <span className="text-base font-semibold text-navy-500">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication & Commitment */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="Our Values"
            title="Dedication & Commitment"
            subtitle="The principles that guide every customer interaction"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {dedicationPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50/50 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                </div>
                <p className="text-sm text-navy-500/70 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="section-padding bg-navy-500">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-accent-500/40 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join our growing list of satisfied partners and clients. We&apos;re
              ready to deliver for you.
            </p>
            <a href="/contact" className="btn-cta text-base">
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

