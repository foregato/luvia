import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        <div className="animate-fadeUp [animation-delay:.05s]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose">
            Social media &amp; conteúdo
          </span>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            Luvia
            <span className="block text-rose">histórias que geram conexão.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
            Cuidamos das redes sociais da sua marca com estratégia, criação de
            conteúdo e uma direção de arte que faz sua audiência parar o scroll.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contato" variant="primary">
              Pedir orçamento
            </Button>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<Icon name="whatsapp" className="h-4 w-4" />}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:.15s]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl2 shadow-soft md:max-w-md">
            <Image
              src="/images/hero.svg"
              alt="Conteúdo produzido pela Luvia para redes sociais"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}