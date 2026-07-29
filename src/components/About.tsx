import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Icon from "@/components/Icon";

const differentials = [
  "Estratégia personalizada para cada marca",
  "Produção de conteúdo autoral, sem templates genéricos",
  "Comunicação direta e acompanhamento próximo",
  "Relatórios simples de entender, sem enrolação",
];

export default function About() {
  return (
    <section id="sobre" className="bg-blush py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <SectionTitle
            eyebrow="Sobre a Luvia"
            title="Marketing e conteúdo com identidade, não com fórmula pronta"
            description="Somos uma equipe de social media e criação de conteúdo que acredita que toda marca tem uma história própria para contar — e nosso trabalho é encontrar a forma certa de contá-la."
          />
          <ul className="mt-8 space-y-4">
            {differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose/10 text-rose">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/images/hero.svg"
              alt="Bastidores da produção de conteúdo da Luvia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}