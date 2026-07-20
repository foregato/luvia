import type { LucideIcon } from "lucide-react";
import {
  Palette,
  LineChart,
  Megaphone,
  PenTool,
  Camera,
  Rocket,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Palette,
    title: "Branding & Identidade Visual",
    description:
      "Construção de marcas com posicionamento claro, identidade visual coesa e manual de aplicação para todos os pontos de contato.",
  },
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    description:
      "Planejamento de conteúdo, produção e publicação com consistência estratégica para fortalecer a presença da marca todos os dias.",
  },
  {
    icon: LineChart,
    title: "Tráfego Pago & Performance",
    description:
      "Campanhas de mídia paga orientadas por dados, com testes contínuos para reduzir custo de aquisição e escalar resultados.",
  },
  {
    icon: PenTool,
    title: "Copywriting Estratégico",
    description:
      "Textos que comunicam com clareza e persuasão — do posicionamento da marca até o conteúdo que converte.",
  },
  {
    icon: Camera,
    title: "Produção de Conteúdo",
    description:
      "Direção de arte, fotografia e vídeo pensados para cada plataforma, mantendo a linguagem visual da marca em todo formato.",
  },
  {
    icon: Rocket,
    title: "Consultoria de Growth",
    description:
      "Diagnóstico completo da presença digital e plano de ação priorizado para acelerar crescimento com consistência.",
  },
];
