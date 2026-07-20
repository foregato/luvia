"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

type InstagramGridProps = {
  type: "portfolio" | "feedbacks";
  variant?: "grid" | "cards";
};

export default function InstagramGrid({ type, variant = "grid" }: InstagramGridProps) {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/instagram?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        if (active) setPosts(data.posts);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, [type]);

  if (error) {
    return (
      <p className="text-sm text-paper/50">
        Não foi possível carregar o feed agora. Confira diretamente no{" "}
        <a
          href="https://www.instagram.com/luvia.digital/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-lilac underline-offset-4"
        >
          Instagram da Luvia
        </a>
        .
      </p>
    );
  }

  const skeletonCount = variant === "cards" ? 3 : 6;

  if (!posts) {
    return (
      <div
        className={
          variant === "cards"
            ? "grid grid-cols-1 gap-6 sm:grid-cols-3"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        }
      >
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-2xl bg-midnight/60"
          />
        ))}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${
              post.gradient ?? "from-violet to-midnight"
            } p-7 transition-transform duration-300 ease-silk hover:-translate-y-1`}
          >
            <Instagram className="text-paper/70" size={22} />
            <p className="font-display text-[1.05rem] italic leading-snug text-paper">
              {post.caption}
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-paper/70">
              Ver no Instagram <ExternalLink size={12} />
            </span>
          </motion.a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {posts.map((post, i) => (
        <motion.a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${
            post.gradient ?? "from-violet to-midnight"
          }`}
        >
          {post.mediaUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.mediaUrl}
              alt={post.caption || "Publicação do Instagram da Luvia"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="line-clamp-2 text-xs text-paper">{post.caption}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-lilac">
              Ver publicação <ExternalLink size={11} />
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
