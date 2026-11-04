import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.worthwhileendeavors.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/supported-employment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/job-placement`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/job-skills-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/environmental-work-assessment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/work-experience`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/summer-earn-and-learn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/vocational-adjustment-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/employers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
