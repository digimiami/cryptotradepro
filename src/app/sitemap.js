import { articles } from '@/data/articles'
import { reviews } from '@/data/reviews'

export default function sitemap() {
  const baseUrl = 'https://cryptotradepro.com'

  const staticPages = ['', '/reviews', '/blog', '/about', '/contact'].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.8,
  }))

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const reviewPages = reviews.map((r) => ({
    url: `${baseUrl}/reviews/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages, ...reviewPages]
}
