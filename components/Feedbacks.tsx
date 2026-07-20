"use client";

import { motion } from "framer-motion";
import InstagramGrid from "./ui/InstagramGrid";
import GradientOrb from "./ui/GradientOrb";

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="relative overflow-hidden bg-ink py-28">
      <GradientOrb variant="lilac" className="-right-32 bottom-0" size={600} />

      <div className="container-luvia relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="eyebrow mb-5">Feedbacks</p>
          <h2 className="text-balance font-display text-4xl leading-tight text-paper sm:text-5xl">
            Histórias de marcas que{" "}
            <span className="italic text-lilac">cresceram com a gente</span>.
          </h2>
        </motion.div>

        <div className="mt-14">
          <InstagramGrid type="feedbacks" variant="cards" />
        </div>
      </div>
    </section>
  );
}
