"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "5519982782509"; // TODO: atualizar com o número real da agência

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-midnight py-28">
      <div className="container-luvia grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info de contato */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">Contato</p>
          <h2 className="text-balance font-display text-4xl leading-tight text-paper sm:text-5xl">
            Vamos construir a próxima fase{" "}
            <span className="italic text-lilac">da sua marca</span>.
          </h2>
          <p className="mt-6 max-w-md text-paper/65">
            Conte um pouco sobre o seu projeto e retornamos em até 1 dia
            útil com os próximos passos.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-300 hover:border-violet/50"
            >
              <span className="flex items-center gap-3 text-paper">
                <MessageCircle className="text-lilac" size={20} />
                WhatsApp
              </span>
              <ArrowUpRight
                size={16}
                className="text-paper/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
              />
            </a>

            <a
              href="https://www.instagram.com/luvia.mdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-300 hover:border-violet/50"
            >
              <span className="flex items-center gap-3 text-paper">
                <Instagram className="text-lilac" size={20} />
                @luvia.mdigital
              </span>
              <ArrowUpRight
                size={16}
                className="text-paper/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
              />
            </a>

            <a
              href="mailto:ola@luvia.mdigital"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-300 hover:border-violet/50"
            >
              <span className="flex items-center gap-3 text-paper">
                <Mail className="text-lilac" size={20} />
                ola@luvia.mdigital
              </span>
              <ArrowUpRight
                size={16}
                className="text-paper/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
              />
            </a>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-ink/50 p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-xs text-paper/60">
                Nome
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-violet/60"
                placeholder="Seu nome"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-2 block text-xs text-paper/60">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-violet/60"
                placeholder="voce@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-xs text-paper/60">
                Conte sobre o seu projeto
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-violet/60"
                placeholder="Qual é o desafio da sua marca hoje?"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-paper shadow-glow transition-transform duration-300 ease-silk hover:-translate-y-0.5 hover:bg-violet-soft disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm text-lilac">
              Mensagem enviada! Retornaremos em breve.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">
              Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
