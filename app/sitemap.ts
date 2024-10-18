import type { MetadataRoute } from 'next'
import React from 'react';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://veriteproducciones.medialityc.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        }
    ]
}
