"use client";

import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, Eye, Activity } from "lucide-react";

const pillars = [
  {
    icon: Server,
    label: "IT Infrastructure",
    sub: ["Servers", "Networking", "Switches", "Storage"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    label: "Electrical Automation",
    sub: ["PLC", "SCADA", "LT/HT"],
    color: "bg-amber-50 border-amber-200 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: ShieldCheck,
    label: "Plant Safety",
    sub: ["Fire Detection", "Suppression", "Compliance"],
    color: "bg-red-50 border-red-200 text-red-700",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Eye,
    label: "Surveillance",
    sub: ["CCTV", "IP Networks", "Analytics"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Activity,
    label: "Condition Monitoring",
    sub: ["IoT Sensors", "Asset Monitoring", "O₂/Gas"],
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function ServiceFlow() {
  return (
    <div className="relative">
      {/* Center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-12"
      >
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-xl shadow-accent-500/30">
            <div className="text-center">
              <span className="block text-xl font-bold text-white">DG</span>
              <span className="block text-[9px] font-medium text-white/70 uppercase tracking-wider">
                Micropronix
              </span>
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent-200 animate-[spin_30s_linear_infinite]" />
        </div>
      </motion.div>

      {/* Service pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-5 rounded-2xl border-2 ${pillar.color} text-center hover:shadow-lg transition-all hover:-translate-y-1`}
          >
            <div
              className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mx-auto mb-3`}
            >
              <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
            </div>
            <h3 className="font-bold text-sm mb-3">{pillar.label}</h3>
            <div className="space-y-1.5">
              {pillar.sub.map((s) => (
                <div
                  key={s}
                  className="text-xs font-medium opacity-70 bg-white/60 rounded-lg py-1 px-2"
                >
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

