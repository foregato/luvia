"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import GradientOrb from "./ui/GradientOrb";

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-ink py-28">
      <GradientOrb variant="azure" className="left-1/2 top-0 -translate-x-1/2" size={700} />

      <div className="container-luvia relative z-10">
        <div className="max-w-xl">
          <p className="eyebrow mb-5">O que fazemos</p>
          <h2 className="text-balance font-display text-4xl leading-tight text-paper sm:text-5xl">
            Serviços pensados para{" "}
            <span className="italic text-lilac">cada etapa</span> do
            crescimento da sua marca.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-midnight/50 p-8 transition-colors duration-300 hover:border-violet/50"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet/0 blur-2xl transition-colors duration-500 group-hover:bg-violet/30" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet/25 to-lilac/15 text-lilac transition-transform duration-300 ease-silk group-hover:scale-110 group-hover:text-paper">
                  <Icon size={22} />
                </div>

                <h3 className="relative mt-6 font-display text-xl text-paper">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-paper/60">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
