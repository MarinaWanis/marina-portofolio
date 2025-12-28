"use client";

import { motion } from "framer-motion";

export function CurrentFocus() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Future Focus (2026)</h2>
            <p className="text-foreground/80 dark:text-foreground/85 leading-relaxed mb-4">
              In 2026, I will be leading an internal AI Shared Services initiative, helping business units identify, assess, and implement AI-enabled automations with clear ROI and fast delivery cycles.
            </p>
            <p className="text-foreground/80 dark:text-foreground/85 leading-relaxed mb-4">
              This work focuses on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 dark:text-foreground/85 mb-4 ml-4">
              <li>Feasibility assessments and prioritization</li>
              <li>Rapid automation and workflow orchestration</li>
              <li>Adoption support (tools, training, and usage patterns)</li>
            </ul>
            <p className="text-foreground/80 dark:text-foreground/85 leading-relaxed">
              This complements — not replaces — my hands-on background in analytics, automation, and backend engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

