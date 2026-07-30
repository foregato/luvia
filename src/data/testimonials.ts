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
    name: "Cliente Luvia há 6 Meses",
    role: "",
    image: "/images/feedbacks/feedback_1.PNG",
    rating: 5,
  },
  {
    id: 2,
    name: "Cliente Luvia há 4 Meses",
    role: "",
    image: "/images/feedbacks/feedback_2.PNG",
    rating: 5,
  },
  {
    id: 3,
    name: "Cliente Luvia há 2 Meses",
    role: "",
    image: "/images/feedbacks/feedback_3.PNG",
    rating: 5,
  },
   {
    id: 4,
    name: "Cliente Luvia há 1 Ano",
    role: "",
    image: "/images/feedbacks/feedback_4.PNG",
    rating: 5,
  },
   {
    id: 5,
    name: "Cliente Luvia há 11 Meses",
    role: "",
    image: "/images/feedbacks/feedback_5.PNG",
    rating: 5,
  },
  // adicione quantos quiser
];