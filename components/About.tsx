"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative bg-paper py-28 text-ink">
      <div className="container-luvia grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Foto da fundadora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-xl2 bg-gradient-to-br from-violet/25 via-lilac/20 to-transparent blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-ash/10 shadow-card">
            <Image
              src="/fundadoraluana.png"
              alt="Luana - Fundadora da Luvia"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-ash/10 bg-ink px-5 py-4 shadow-card">
            <p className="font-display text-lg italic text-paper">Luana</p>
            <p className="text-xs text-paper/60">
              Fundadora &amp; Diretora de Criação
            </p>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5 text-ash">Sobre a Luvia</p>

          <h2 className="text-balance font-display text-4xl leading-tight text-ink sm:text-5xl">
            Nascemos para dar forma e voz a marcas com{" "}
            <span className="italic text-violet">personalidade</span>.
          </h2>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ash">
            <p>
              A Luvia nasceu em 2019 da vontade de fazer marketing digital de um
              jeito diferente: menos fórmula pronta, mais estratégia construída
              sob medida para cada marca. O nome carrega essa ideia — um caminho
              iluminado por clareza e consistência.
            </p>

            <p>
              Hoje somos um time multidisciplinar que combina design, redação,
              tráfego pago e análise de dados para criar presenças digitais que
              não apenas parecem bonitas, mas geram resultado de verdade.
            </p>
          </div>

          <div className="mt-9 flex items-start gap-4 rounded-2xl border border-ash/10 bg-white/60 p-6">
            <Quote className="mt-1 shrink-0 text-violet" size={28} />
            <p className="font-display text-lg italic leading-snug text-ink">
              Acredito que toda marca tem uma história única para contar — nosso
              trabalho é encontrar essa história e traduzi-la em estratégia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}