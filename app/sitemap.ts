import type { MetadataRoute } from "next";
import React from "react";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://producciones.ass.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
