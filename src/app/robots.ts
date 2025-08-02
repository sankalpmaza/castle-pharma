import { type MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://castlepharma.vercel.app/sitemap.xml', // Update with your actual domain
  }
}
