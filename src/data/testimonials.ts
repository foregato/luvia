export type Testimonial = {
  id: number;
  name: string;
  role: string; // cargo ou empresa
  image: string; // caminho em /public/images/testimonials/
  avatar?: string; // opcional
  rating?: number; // opcional: de 1 a 5
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Clara",
    role: "CEO da Lumina Store",
    image: "/images/feedbacks/feedback_1.PNG",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Santos",
    role: "Fundador da FitLife",
    image: "/images/feedbacks/feedback_2.PNG",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Designer Gráfica na Creative Studio",
    image: "/images/feedbacks/feedback_3.PNG",
    rating: 5,
  },
  // adicione quantos quiser
];