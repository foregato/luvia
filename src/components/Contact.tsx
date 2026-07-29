import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import Icon, { IconName } from "@/components/Icon";
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "@/lib/constants";

const contactItems: { icon: IconName; label: string; value: string; href: string }[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Chame a gente",
    href: WHATSAPP_URL,
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: "@luvia",
    href: INSTAGRAM_URL,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: "pin",
    label: "Endereço",
    value: ADDRESS,
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <Container className="grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <SectionTitle
            eyebrow="Contato"
            title="Vamos colocar sua marca para conversar com as pessoas certas"
            description="Conta pra gente sobre o seu projeto. Respondemos rápido pelo WhatsApp."
          />
          <div className="mt-9">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<Icon name="whatsapp" className="h-4 w-4" />}
            >
              Iniciar conversa
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose/40 hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-blush text-rose transition-colors duration-300 group-hover:bg-rose group-hover:text-paper">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}