import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-blush py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          align="center"
          description="Resultados reais de quem já trabalhou com a Luvia."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeUp overflow-hidden rounded-2xl border border-line bg-paper shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-card"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {/* Imagem do depoimento */}
              <div className="relative aspect-[4/5] w-full bg-blush">
                <Image
                  src={item.image}
                  alt={`Depoimento de ${item.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Nome + role + estrelas */}
              <div className="p-5">
                {item.rating && (
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating!
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-none text-line"
                        }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {item.avatar ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-rose/15 font-display text-sm font-semibold text-rose">
                      {item.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-sm text-mist">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}