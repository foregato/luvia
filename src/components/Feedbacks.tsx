"use client";

import Image from "next/image";
import { testimonials } from "@/data/feedbacks";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Testimonials() {
  return (
    <section id="feedbacks" className="bg-blush py-24 md:py-32">
  <Container>
    <SectionTitle
      eyebrow="Feedbacks"
      title="O que nossos clientes dizem"
      align="center"
      description="Resultados reais de quem já trabalhou com a Luvia."
    />
    {/* resto igual */}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm"
            >
              {/* Imagem do print */}
              <div className="relative aspect-[3/4] w-full bg-blush/30">
                <Image
                  src={item.image}
                  alt={`Depoimento de ${item.name}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Rodapé com estrelas e nome */}
              <div className="p-5">
                {item.rating && (
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400">
                        ★
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose/20 text-sm font-semibold text-rose">
                    {item.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}