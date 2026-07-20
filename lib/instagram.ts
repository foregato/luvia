export type InstagramPost = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp?: string;
  /** usado apenas nos dados de exemplo, antes da integração real */
  gradient?: string;
};

type RawIGMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
};

const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

/**
 * Busca as publicações mais recentes da conta profissional da Luvia
 * via Instagram Graph API. Requer as variáveis de ambiente
 * INSTAGRAM_ACCESS_TOKEN e INSTAGRAM_USER_ID (veja README.md).
 *
 * Retorna null se as credenciais não estiverem configuradas ou se a
 * chamada falhar — o chamador deve usar os dados de exemplo como
 * fallback nesse caso.
 */
export async function fetchInstagramPosts(limit = 12): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) return null;

  try {
    const url = `https://graph.instagram.com/${userId}/media?fields=${FIELDS}&limit=${limit}&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = (await res.json()) as { data: RawIGMedia[] };

    return data.data.map((item) => ({
      id: item.id,
      caption: item.caption ?? "",
      mediaType: item.media_type,
      mediaUrl: item.media_url,
      thumbnailUrl: item.thumbnail_url,
      permalink: item.permalink,
      timestamp: item.timestamp,
    }));
  } catch {
    return null;
  }
}

/**
 * Filtra publicações de depoimento por uma hashtag combinada com o
 * time (ex: #depoimentoluvia na legenda). Essa é a forma mais simples
 * de marcar, direto no Instagram, quais posts devem aparecer na seção
 * de Feedbacks sem precisar de um CMS separado.
 */
export function filterByTag(posts: InstagramPost[], tag: string): InstagramPost[] {
  const normalized = tag.toLowerCase();
  return posts.filter((p) => p.caption.toLowerCase().includes(normalized));
}
