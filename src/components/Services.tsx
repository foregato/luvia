import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="O que fazemos"
          title="Serviços pensados para o seu momento"
          align="center"
          description="Do planejamento à publicação, cuidamos de cada etapa da presença digital da sua marca."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fadeUp"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}