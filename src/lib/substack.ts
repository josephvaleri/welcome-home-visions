export const SUBSTACK_RSS = "https://yourvirtualdecorator.substack.com/feed";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
}

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`,
    "i"
  );
  const m = xml.match(re);
  return m ? (m[1] ?? m[2] ?? "").trim() : "";
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const re = new RegExp(`<${tag}[^>]*\\s${attr}="([^"]*)"`, "i");
  const m = xml.match(re);
  return m ? m[1] : "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseRSS(xml: string): SubstackPost[] {
  const posts: SubstackPost[] = [];
  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
    const item = m[1];
    const title = stripHtml(extractTag(item, "title"));
    const link = extractTag(item, "link") || extractTag(item, "guid");
    const pubDate = extractTag(item, "pubDate");
    const rawDesc = stripHtml(extractTag(item, "description"));
    const excerpt = rawDesc.length > 220 ? rawDesc.slice(0, 220).trimEnd() + "…" : rawDesc;
    const thumbnail = extractAttr(item, "enclosure", "url") || null;
    if (title && link) posts.push({ title, link, pubDate, excerpt, thumbnail });
  }
  return posts;
}

export async function fetchSubstackPosts(limit?: number): Promise<SubstackPost[]> {
  try {
    const res = await fetch(SUBSTACK_RSS, {
      headers: { "User-Agent": "YourVirtualDecorator/1.0" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const posts = parseRSS(xml);
    return limit ? posts.slice(0, limit) : posts;
  } catch {
    return [];
  }
}

export function formatPostDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
