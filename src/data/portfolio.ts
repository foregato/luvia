export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  instagram1?: string;
  instagram2?: string;
};

/**
 * Para adicionar um novo trabalho ao portfólio:
 * 1. Coloque a imagem em /public/images/portfolio/
 * 2. Adicione um novo objeto neste array, apontando "image" para o arquivo
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
    image: "/images/portfolio/imagem01.svg",
    instagram1: "https://instagram.com/",
  },
  {
    id: 2,
    title: "Café Raiz",
    category: "Criação de conteúdo",
    description: "Fotos e vídeos de produto para cafeteria de bairro.",
    image: "/images/portfolio/imagem02.svg",
    instagram1: "https://instagram.com/",
    instagram2: "https://instagram.com/",
  },
  {
    id: 3,
    title: "Nômade Store",
    category: "Marketing digital",
    description: "Campanhas de tráfego pago para e-commerce de moda.",
    image: "/images/portfolio/imagem03.svg",
    instagram1: "https://instagram.com/",
  },
  {
    id: 4,
    title: "Clínica Vívida",
    category: "Identidade visual",
    description: "Direção de arte e padronização de feed para clínica estética.",
    image: "/images/portfolio/imagem04.svg",
  },
  {
    id: 5,
    title: "Sabor & Cia",
    category: "Gestão de redes sociais",
    description: "Estratégia de conteúdo e crescimento para restaurante.",
    image: "/images/portfolio/imagem05.svg",
    instagram1: "https://instagram.com/",
    instagram2: "https://instagram.com/",
  },
  {
    id: 6,
    title: "Bloom Studio",
    category: "Criação de conteúdo",
    description: "Cobertura de eventos e reels para ateliê de flores.",
    image: "/images/portfolio/imagem06.svg",
    instagram1: "https://instagram.com/",
  },
];
