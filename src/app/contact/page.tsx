"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              Ready to transform your operations? Let&apos;s discuss how DG Micropronix 
              can deliver the right solutions for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-standard bg-gray-50/50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="card-elevated">
                <h2 className="text-2xl font-bold text-navy-500 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-navy-500/60 mb-8">
                  Fill out the form below and our team will reach out within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Quick Contact */}
              <div className="card-elevated">
                <h3 className="text-lg font-bold text-navy-500 mb-5">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0 
                      transition-colors duration-200 group-hover:bg-accent-100">
                      <Phone className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-500/50 font-medium mb-0.5">
                        Phone
                      </p>
                      <p className="text-sm font-semibold text-navy-600 group-hover:text-accent-600 transition-colors duration-200">
                        {companyInfo.phone}
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0 
                      transition-colors duration-200 group-hover:bg-accent-100">
                      <Mail className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-500/50 font-medium mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-navy-600 group-hover:text-accent-600 transition-colors duration-200">
                        {companyInfo.email}
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-500/50 font-medium mb-0.5">
                        Website
                      </p>
                      <a
                        href={companyInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-navy-600 hover:text-accent-600 transition-colors duration-200"
                      >
                        www.dgmpl.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-xs text-navy-500/50 font-medium mb-0.5">
                        Working Hours
                      </p>
                      <p className="text-sm font-semibold text-navy-600">
                        Mon – Sat, 9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              {companyInfo.offices.map((office, i) => (
                <motion.div
                  key={office.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="card-elevated"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-600 mb-1">
                        {office.type}
                      </h4>
                      <p className="text-sm text-navy-500/60 leading-relaxed">
                        {office.address}
                        <br />
                        {office.city}, {office.state} - {office.pin}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
