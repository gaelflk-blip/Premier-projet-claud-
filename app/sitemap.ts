import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://acatacos.be';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ou-nous-trouver`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ];
}
