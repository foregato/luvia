"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import InstagramGrid from "./ui/InstagramGrid";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-28 text-ink">
      <div className="container-luvia">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="eyebrow mb-5 text-ash">Portfólio</p>
            <h2 className="text-balance font-display text-4xl leading-tight text-ink sm:text-5xl">
              Trabalhos recentes,{" "}
              <span className="italic text-violet">direto do Instagram</span>.
            </h2>
          </motion.div>

          <a
            href="https://www.instagram.com/luvia.digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ash/20 px-5 py-2.5 text-sm text-ink transition-colors duration-300 hover:border-violet hover:text-violet"
          >
            <Instagram size={16} />
            @luvia.digital
          </a>
        </div>

        <div className="mt-14">
          <InstagramGrid type="portfolio" variant="grid" />
        </div>
      </div>
    </section>
  );
}
