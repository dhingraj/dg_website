"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Monitor, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Factory,
    title: "Plant + IT",
    subtitle: "Traditional Infrastructure",
    description: "Industrial plant with basic IT and networking setup",
    color: "bg-navy-400/10 border-navy-300/20 text-navy-500",
    iconColor: "text-navy-400",
  },
  {
    icon: Monitor,
    title: "Digital Plant",
    subtitle: "Connected Operations",
    description: "Digitized operations with enterprise networking and data management",
    color: "bg-accent-50 border-accent-200 text-accent-700",
    iconColor: "text-accent-500",
  },
  {
    icon: Cpu,
    title: "Smart Plant",
    subtitle: "+ PLC, SCADA, IoT",
    description: "Intelligent automation with real-time monitoring and control systems",
    color: "bg-accent-100 border-accent-300 text-accent-800",
    iconColor: "text-accent-600",
  },
  {
    icon: ShieldCheck,
    title: "Smart Compliant Plant",
    subtitle: "+ Safety & Surveillance",
    description: "Fully safe, monitored, and compliant facility with predictive maintenance",
    color: "bg-gradient-to-br from-accent-500 to-accent-600 border-accent-500 text-white",
    iconColor: "text-white",
  },
];

export default function ValueChain() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-accent-50 text-accent-600">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight mb-4">
            How We Transform Your Operations
          </h2>
          <p className="text-base md:text-lg text-navy-500/60 max-w-2xl mx-auto">
            We take traditional industrial plants and transform them into smart,
            compliant facilities — step by step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col"
            >
              <div
                className={`flex-1 p-6 rounded-2xl border-2 ${step.color} transition-all hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      i === 3 ? "bg-white/20" : "bg-white"
                    } shadow-sm`}
                  >
                    <step.icon className={`w-6 h-6 ${i === 3 ? "text-accent-600" : step.iconColor}`} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      i === 3 ? "text-white/60" : "text-navy-500/40"
                    }`}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    i === 3 ? "text-white" : "text-navy-500"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs font-semibold mb-3 ${
                    i === 3 ? "text-white/70" : "text-accent-500"
                  }`}
                >
                  {step.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 3 ? "text-white/80" : "text-navy-500/60"
                  }`}
                >
                  {step.description}
                </p>
              </div>
              {/* Arrow between cards */}
              {i < 3 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-accent-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

