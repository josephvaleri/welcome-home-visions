import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects } from "../lib/projects";

const BASE_URL = "https://www.yourvirtualdecorator.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/services",
          "/portfolio",
          "/contact",
          "/blog",
          "/news",
          "/renovating-in-italy",
          "/italian-style-at-home",
        ];
        const projectPaths = projects.map((p) => `/project/${p.slug}`);
        const allPaths = [...staticPaths, ...projectPaths];
        const urls = allPaths
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
