import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/empresa", "/servicos", "/projetos", "/contato"];
  return pages.map((path) => ({ url: path || "/", changeFrequency: "monthly", priority: path ? 0.7 : 1 }));
}
