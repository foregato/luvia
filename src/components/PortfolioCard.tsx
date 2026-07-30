"use client";

import { useEffect } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  useEffect(() => {
    if (!item.instagramVideo) return;

    // Processa embeds já existentes ou carrega o script do Instagram
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const existing = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [item.instagramVideo]);

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-blush/20">
        {item.instagramVideo ? (
          <blockquote
            className="instagram-media !m-0 !min-w-full !max-w-full"
            data-instgrm-permalink={item.instagramVideo}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 0,
              margin: 0,
              maxWidth: "100%",
              minWidth: "100%",
              padding: 0,
              width: "100%",
            }}
          />
        ) : item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : null}

        <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-rose backdrop-blur">
          {item.category}
        </span>
      </div>

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