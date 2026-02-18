"use client";

import { motion } from "framer-motion";
import { Heart, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { clients, partners, dedicationPoints } from "@/lib/data";

export default function ClientsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/15 via-transparent to-transparent" />
        
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-white/10 text-accent-300 border border-white/5">
              Clients & Partners
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Trusted Partnerships
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              Building strong, lasting relationships with India&apos;s leading 
              industrial organizations and global technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="section-standard bg-white border-b border-gray-100">
        <div className="container-max">
          <SectionHeader
            badge="Clientele"
            title="Our Esteemed Customers"
            subtitle="We are proud to serve India&apos;s premier industrial organizations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="group card-interactive text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-4 overflow-hidden
                  transition-colors duration-200 group-hover:bg-accent-100">
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <h3 className="text-sm font-bold text-navy-600 leading-snug">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Partners */}
      <section className="section-standard bg-gray-50/50 border-b border-gray-100">
        <div className="container-max">
          <SectionHeader
            badge="Strategic Alliances"
            title="OEM Partners"
            subtitle="We partner with the world&apos;s leading technology companies to deliver best-in-class solutions"
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.25, 1, 0.5, 1] }}
                className="group px-6 py-4 rounded-xl bg-white border border-gray-100 
                  transition-all duration-200 hover:border-accent-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-6 w-auto max-w-[100px] object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-base font-semibold text-navy-600">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication & Commitment */}
      <section className="section-standard bg-white border-b border-gray-100">
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
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50/50 border border-gray-100 
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

      {/* Trust CTA */}
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
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
              Join our growing list of satisfied partners and clients. We&apos;re 
              ready to deliver exceptional results for you.
            </p>
            <a 
              href="/contact" 
              className="btn-cta inline-flex"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
