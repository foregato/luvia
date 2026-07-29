export type Service = {
  id: number;
  icon: string; // chave usada pelo componente ServiceCard para escolher o ícone
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    icon: "instagram",
    name: "Gestão de redes sociais",
    description:
      "Planejamento, produção e publicação de conteúdo para manter seus perfis ativos e consistentes.",
  },
  {
    id: 2,
    icon: "camera",
    name: "Criação de conteúdo",
    description:
      "Fotos, vídeos e artes pensadas para comunicar a identidade da sua marca com qualidade.",
  },
  {
    id: 3,
    icon: "target",
    name: "Marketing digital",
    description:
      "Estratégias de tráfego e campanhas para atrair o público certo e gerar resultado.",
  },
  {
    id: 4,
    icon: "sparkles",
    name: "Identidade visual",
    description:
      "Direção de arte e padronização visual para fortalecer o reconhecimento da marca.",
  },
  {
    id: 5,
    icon: "chart",
    name: "Relatórios e métricas",
    description:
      "Acompanhamento de resultados com relatórios claros sobre o crescimento das redes.",
  },
  {
    id: 6,
    icon: "chat",
    name: "Consultoria de marca",
    description:
      "Diagnóstico e orientação estratégica para posicionar sua marca nas redes sociais.",
  },
];
