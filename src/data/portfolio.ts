export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Imagem de capa (thumbnail do reel) — coloque em /public/images/portfolio/ */
  image: string;
  /** Link do post ou reel do Instagram */
  instagramVideo: string;
  instagram1?: string;
  instagram2?: string;
};

/**
 * Para adicionar um novo trabalho ao portfólio:
 * 1. Salve a imagem de capa (thumbnail) do reel em /public/images/portfolio/
 * 2. Adicione um novo objeto neste array com "image" e "instagramVideo"
 *
 * Exemplo de link válido:
 * - Reel:  https://www.instagram.com/reel/ABC123xyz/
 * - Post:  https://www.instagram.com/p/ABC123xyz/
 *
 * Não é necessário alterar nenhum componente. O componente Portfolio
 * lê este array automaticamente e gera os cards.
 *
 * Se "instagram1" ou "instagram2" não existirem (ou ficarem vazios),
 * o respectivo botão simplesmente não é exibido no card.
 */
export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Luvia",
    category: "Agência de marketing digital",
    description: "Agência de Marketing Digital especializada em gestão de redes sociais, criação de conteúdo e marketing digital.",
    image: "/images/fotos/logodaluvia.png",
    instagramVideo: "https://www.instagram.com/reel/DTeEgGVCR-9/",
    instagram1: "https://www.instagram.com/luvia.mdigital/",
    instagram2: "https://www.instagram.com/luanacostasm/",
  },
  {
    id: 2,
    title: "WeBella",
    category: "Criação de conteúdo",
    description: "Fotos e vídeos de produto para Studio de beleza, com foco em estética e identidade visual.",
    image: "/images/portfolio/portifolio1webella.png",
    instagramVideo: "https://www.instagram.com/reel/DZOEEnGPxNi/",
    instagram1: "https://www.instagram.com/webellastudio/",
  },
  {
    id: 3,
    title: "Ateliê Vera Bertozzi",
    category: "Marketing digital",
    description: "Campanha de marketing digital para Ateliê de moda, incluindo anúncios e estratégias.",
    image: "/images/portfolio/portifolioverabertozzi.png",
    instagramVideo: "https://www.instagram.com/reels/DV_m5QQkdN9/",
    instagram1: "https://www.instagram.com/verabertozzi/",
  },
  {
    id: 4,
    title: "Cantinho da Sol",
    category: "Identidade visual",
    description: "Criação de identidade visual e padronização de conteúdo para redes sociais.",
    image: "/images/portfolio/portifolio1SVCantinhodasol.png",
    instagramVideo: "https://www.instagram.com/reel/DbarQjmxv54/",
    instagram1: "https://www.instagram.com/sv_cantinhodasol/",
  },
  {
    id: 5,
    title: "Farma Érica Nussallah",
    category: "Gestão de redes sociais",
    description: "Estratégia de conteúdo e crescimento para Clinica de estética, incluindo reels e posts para Instagram.",
    image: "/images/portfolio/portifolioericafarma.png",
    instagramVideo: "https://www.instagram.com/reels/Da8HiHYRt7c/",
    instagram1: "https://www.instagram.com/farma.ericanussallah/",
  },
  {
    id: 6,
    title: "Samara Bonesso | Terapia Integrativa",
    category: "Criação de conteúdo",
    description: "Criação de conteúdo para Instagram, incluindo reels e posts para divulgação de serviços de terapia integrativa.",
    image: "/images/portfolio/portifoliosamarabonesso.png",
    instagramVideo: "https://www.instagram.com/p/DGLnhNPpm_A/?img_index=1",
    instagram1: "https://www.instagram.com/samara_bonesso/",
  },
];