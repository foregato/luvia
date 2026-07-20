"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MessageCircle, Send, TrendingUp, Sparkles } from "lucide-react";
import GradientOrb from "./ui/GradientOrb";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-luvia-aurora" />
      <GradientOrb variant="violet" className="-left-40 top-10" size={520} />
      <GradientOrb variant="lilac" className="right-0 top-1/3" size={420} />

      <div className="container-luvia relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Coluna de texto */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow mb-6"
          >
            Agência de marketing digital
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance font-display text-[2.75rem] leading-[1.05] text-paper sm:text-6xl lg:text-[4.2rem]"
          >
            Marcas que{" "}
            <span className="italic text-lilac">brilham</span> começam
            com estratégia.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-lg text-lg leading-relaxed text-paper/70"
          >
            A Luvia une design, conteúdo e performance para transformar
            presença digital em resultado real. Do posicionamento à
            conversão, construímos marcas com identidade, consistência
            e propósito.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-paper shadow-glow transition-transform duration-300 ease-silk hover:-translate-y-0.5 hover:bg-violet-soft"
            >
              Ver portfólio
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-paper/60 hover:bg-white/5"
            >
              Solicitar orçamento
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="font-display text-2xl text-paper">+80</p>
              <p className="mt-1 text-xs text-paper/50">marcas atendidas</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl text-paper">6 anos</p>
              <p className="mt-1 text-xs text-paper/50">de estratégia digital</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl text-paper">4.9/5</p>
              <p className="mt-1 text-xs text-paper/50">satisfação média</p>
            </div>
          </motion.div>
        </div>

        {/* Composição visual: mockups */}
        <div className="relative mx-auto h-[520px] w-full max-w-md lg:h-[600px]">
          {/* Celular */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 h-[440px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[2.4rem] border-[6px] border-midnight/80 bg-gradient-to-b from-azure to-ink p-2 shadow-card sm:h-[480px] sm:w-[250px]"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-ink">
              {/* header perfil */}
              <div className="flex items-center gap-2 px-4 pt-5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-lilac to-violet" />
                <div>
                  <p className="text-[11px] font-medium text-paper">luvia.digital</p>
                  <p className="text-[9px] text-paper/50">Agência parceira</p>
                </div>
              </div>
              {/* post */}
              <div className="mx-4 mt-4 aspect-square rounded-xl bg-gradient-to-br from-violet/70 via-azure to-midnight" />
              <div className="flex items-center gap-3 px-4 pt-3 text-paper/70">
                <Heart size={14} />
                <MessageCircle size={14} />
                <Send size={14} />
              </div>
              <div className="px-4 pt-2">
                <p className="text-[10px] text-paper/60">
                  <span className="font-medium text-paper">+1.240</span> curtidas
                </p>
              </div>
              <div className="mt-auto grid grid-cols-3 gap-0.5 p-0.5">
                {["from-violet to-midnight", "from-lilac to-violet", "from-azure to-violet-soft"].map(
                  (g, i) => (
                    <div key={i} className={`aspect-square bg-gradient-to-br ${g}`} />
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Card flutuante: alcance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-8 w-44 rounded-2xl border border-white/10 bg-midnight/80 p-4 shadow-card backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-lilac">
              <TrendingUp size={16} />
              <span className="text-[11px] font-medium">Alcance mensal</span>
            </div>
            <p className="mt-2 font-display text-2xl text-paper">+248%</p>
          </motion.div>

          {/* Card flutuante: engajamento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 right-0 w-48 rounded-2xl border border-white/10 bg-midnight/80 p-4 shadow-card backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-violet-soft">
              <Sparkles size={16} />
              <span className="text-[11px] font-medium">Campanha ativa</span>
            </div>
            <p className="mt-2 text-xs text-paper/70">
              Lançamento de coleção — engajamento 3x acima da média
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
