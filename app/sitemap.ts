import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chandan-shaw-portfolio.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects/farmfresh-bangalore`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects/salon-booking`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/projects/xeeva-admin`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/projects/expense-tracker`, lastModified: new Date(), priority: 0.6 },
  ];
}
