import type { InstagramPost } from "@/lib/instagram";

// Conteúdo de exemplo, usado apenas enquanto INSTAGRAM_ACCESS_TOKEN
// não está configurado (veja README.md). Substitua pelas publicações
// reais assim que a integração estiver ativa.

export const mockPortfolioPosts: InstagramPost[] = [
  {
    id: "mock-1",
    caption: "Campanha de lançamento — coleção verão para @marca.exemplo",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-violet to-midnight",
  },
  {
    id: "mock-2",
    caption: "Rebranding completo: identidade visual e redes sociais",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-lilac to-violet",
  },
  {
    id: "mock-3",
    caption: "Direção de arte para conteúdo de performance",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-azure to-violet-soft",
  },
  {
    id: "mock-4",
    caption: "Carrossel educativo sobre posicionamento de marca",
    mediaType: "CAROUSEL_ALBUM",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-violet-soft to-lilac",
  },
  {
    id: "mock-5",
    caption: "Bastidores da produção de conteúdo em estúdio",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-midnight to-violet",
  },
  {
    id: "mock-6",
    caption: "Resultados de campanha de tráfego pago — 3º trimestre",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-lilac to-azure",
  },
];

export const mockFeedbackPosts: InstagramPost[] = [
  {
    id: "mock-fb-1",
    caption:
      "\"A Luvia entendeu nossa marca melhor do que a gente mesma. Resultado surpreendente em 3 meses.\" — Marina Costa, Ateliê Bloom",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-violet to-lilac",
  },
  {
    id: "mock-fb-2",
    caption:
      "\"Profissionalismo do início ao fim. Nosso engajamento triplicou.\" — Rafael Nunes, Studio Nunes",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-azure to-lilac",
  },
  {
    id: "mock-fb-3",
    caption:
      "\"Equipe atenta, criativa e muito estratégica. Recomendo de olhos fechados.\" — Fernanda Lima, Cafuné Kids",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/luvia.digital/",
    gradient: "from-violet-soft to-midnight",
  },
];
