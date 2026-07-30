export type Testimonial = {
  id: number;
  name: string;
  role: string;        // cargo ou empresa
  avatar?: string;     // opcional: caminho da imagem em /public/images/avatars/
  content: string;
  rating?: number;     // opcional: de 1 a 5
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Clara",
    role: "CEO da Lumina Store",
    content: "A Luvia transformou nossa presença digital. As estratégias de conteúdo aumentaram nosso engajamento em 200% em apenas três meses.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Santos",
    role: "Fundador da FitLife",
    content: "Profissionalismo impecável. O videomaker capturou exatamente a essência da nossa marca, e os resultados nas redes foram surpreendentes.",
    rating: 5,
  },
  // adicione quantos quiser
];