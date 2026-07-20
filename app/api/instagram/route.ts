import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramPosts, filterByTag } from "@/lib/instagram";
import { mockPortfolioPosts, mockFeedbackPosts } from "@/data/mock-instagram";

export const revalidate = 3600; // recacheia o feed a cada 1h

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type") ?? "portfolio";

  const posts = await fetchInstagramPosts(24);

  // Sem credenciais configuradas (ou falha na chamada): usa dados de
  // exemplo para que o site continue funcional visualmente.
  if (!posts) {
    return NextResponse.json({
      source: "mock",
      posts: type === "feedbacks" ? mockFeedbackPosts : mockPortfolioPosts,
    });
  }

  if (type === "feedbacks") {
    const testimonialTag = process.env.INSTAGRAM_TESTIMONIAL_TAG ?? "#depoimentoluvia";
    const feedbackPosts = filterByTag(posts, testimonialTag);
    return NextResponse.json({
      source: "instagram",
      posts: feedbackPosts.length > 0 ? feedbackPosts : mockFeedbackPosts,
    });
  }

  return NextResponse.json({ source: "instagram", posts });
}
