export type Testimonial = {
  id: number;
  name: string;
  image: string;      // print do feedback
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cliente Luvia há 6 Meses",
    image: "/images/feedbacks/feedback_1.PNG",
    rating: 5,
  },
  {
    id: 2,
    name: "Cliente Luvia há 4 Meses",
    image: "/images/feedbacks/feedback_2.PNG",
    rating: 5,
  },
  {
    id: 3,
    name: "Cliente Luvia há 2 Meses",
    image: "/images/feedbacks/feedback_3.PNG",
    rating: 5,
  },
  {
    id: 4,
    name: "Cliente Luvia há 2 Meses",
    image: "/images/feedbacks/feedback_4.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Cliente Luvia há 2 Meses",
    image: "/images/feedbacks/feedback_5.png",
    rating: 5,
  },
];