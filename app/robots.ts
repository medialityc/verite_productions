import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: 'https://veriteproducciones.medialityc.com/sitemap.xml'
    }
}
