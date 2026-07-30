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
    title: "Estúdio Alma",
    category: "Gestão de redes sociais",
    description: "Conteúdo mensal e identidade visual para estúdio de yoga.",
    image: "/images/portfolio/imagem01.jpg",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
  {
    id: 2,
    title: "WeBella",
    category: "Criação de conteúdo",
    description: "Fotos e vídeos de produto para cafeteria de bairro.",
    image: "/images/portfolio/portifolio1webella.png",
    instagramVideo: "https://www.instagram.com/reel/DZOEEnGPxNi/",
    instagram1: "https://www.instagram.com/webellastudio/",
  },
  {
    id: 3,
    title: "Nômade Store",
    category: "Marketing digital",
    description: "Campanhas de tráfego pago para e-commerce de moda.",
    image: "/images/portfolio/imagem03.jpg",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
  {
    id: 4,
    title: "Clínica Vívida",
    category: "Identidade visual",
    description: "Direção de arte e padronização de feed para clínica estética.",
    image: "/images/portfolio/imagem04.jpg",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
  },
  {
    id: 5,
    title: "Sabor & Cia",
    category: "Gestão de redes sociais",
    description: "Estratégia de conteúdo e crescimento para restaurante.",
    image: "/images/portfolio/imagem05.jpg",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
    instagram2: "https://instagram.com/",
  },
  {
    id: 6,
    title: "Bloom Studio",
    category: "Criação de conteúdo",
    description: "Cobertura de eventos e reels para ateliê de flores.",
    image: "/images/portfolio/imagem06.jpg",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
];