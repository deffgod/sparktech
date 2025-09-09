import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SparkTech Trading FZCO - Premium Trading Solutions',
    short_name: 'SparkTech Trading',
    description: 'Leading trading company in Dubai specializing in electronics, vehicles, and premium goods. Trusted partner for international trade.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/black-circle-1.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}