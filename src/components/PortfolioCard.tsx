import Image from "next/image";
import Icon from "@/components/Icon";
import { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {/* Área da prévia do vídeo */}
      <a
        href={item.instagramVideo}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-square overflow-hidden bg-blush/20"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Overlay escuro + botão de play */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-6 w-6 text-ink"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Categoria */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-rose backdrop-blur">
          {item.category}
        </span>
      </a>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="font-display text-lg text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          {item.description}
        </p>

        {(item.instagram1 || item.instagram2) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {item.instagram1 && (
              <a
                href={item.instagram1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-rose hover:text-rose"
              >
                <Icon name="instagram" className="h-3.5 w-3.5" />
                Instagram
              </a>
            )}
            {item.instagram2 && (
              <a
                href={item.instagram2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-rose hover:text-rose"
              >
                <Icon name="instagram" className="h-3.5 w-3.5" />
                Instagram 2
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}