export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  /** Link do post ou reel do Instagram (ex: https://www.instagram.com/reel/XXXX/) */
  instagramVideo?: string;
  /** Fallback de imagem (opcional, caso o embed não carregue) */
  image?: string;
  instagram1?: string;
  instagram2?: string;
};

/**
 * Para adicionar um novo trabalho ao portfólio:
 * 1. Pegue o link público do post ou reel no Instagram
 * 2. Adicione um novo objeto neste array com o campo "instagramVideo"
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
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
  {
    id: 2,
    title: "WeBella",
    category: "Criação de conteúdo",
    description: "Fotos e vídeos de produto para cafeteria de bairro.",
    instagramVideo: "https://www.instagram.com/reels/DZOEEnGPxNi/",
    instagram1: "https://www.instagram.com/webellastudio/",
  },
  {
    id: 3,
    title: "Nômade Store",
    category: "Marketing digital",
    description: "Campanhas de tráfego pago para e-commerce de moda.",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
  {
    id: 4,
    title: "Clínica Vívida",
    category: "Identidade visual",
    description: "Direção de arte e padronização de feed para clínica estética.",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
  },
  {
    id: 5,
    title: "Sabor & Cia",
    category: "Gestão de redes sociais",
    description: "Estratégia de conteúdo e crescimento para restaurante.",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
    instagram2: "https://instagram.com/",
  },
  {
    id: 6,
    title: "Bloom Studio",
    category: "Criação de conteúdo",
    description: "Cobertura de eventos e reels para ateliê de flores.",
    instagramVideo: "https://www.instagram.com/reel/SEU_CODIGO_AQUI/",
    instagram1: "https://instagram.com/",
  },
];