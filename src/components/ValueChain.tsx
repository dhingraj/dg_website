"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Monitor, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Factory,
    title: "Plant + IT",
    description: "Traditional infrastructure with basic networking",
  },
  {
    icon: Monitor,
    title: "Digital Plant",
    description: "Connected operations with data management",
  },
  {
    icon: Cpu,
    title: "Smart Plant",
    description: "Intelligent automation with PLC, SCADA, IoT",
  },
  {
    icon: ShieldCheck,
    title: "Smart Compliant Plant",
    description: "Safe, monitored, compliant with predictive maintenance",
  },
];

export default function ValueChain() {
  return (
    <section className="section-padding-minimal bg-white border-b border-gray-100">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 bg-accent-50 text-accent-600">
            Our Approach
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-500 mb-2">
            Transformation Pathway
          </h2>
          <p className="text-sm text-navy-500/60 max-w-2xl mx-auto">
            Step-by-step evolution from traditional plants to smart, compliant facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="h-full p-4 rounded-lg border border-gray-200 bg-white hover:border-accent-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-50">
                    <step.icon className="w-4 h-4 text-accent-500" />
                  </div>
                  <span className="text-xs font-bold text-navy-500/40">
                    STEP {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-500 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-navy-500/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-1.5 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-3 h-3 text-accent-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
