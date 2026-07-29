import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-blush py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Portfólio"
          title="Trabalhos que já colocamos no ar"
          align="center"
          description="Uma seleção de marcas que já passaram pelas mãos da Luvia."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
