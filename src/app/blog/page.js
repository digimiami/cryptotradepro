import Link from 'next/link';
import { articles, categories, siteName } from '../../data/articles';

export const metadata = {
  title: 'Crypto Trading Articles & Guides 2026',
  description: 'Expert-written guides on crypto trading strategies, exchange reviews, market analysis, and risk management. Learn to trade profitably.',
};

export default function BlogPage({ searchParams }) {
  // Simple category filter
  const cat = searchParams?.cat || null;
  const filtered = cat ? articles.filter((a) => a.category === cat) : articles;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>📖 All Articles & Guides</h1>
          <p>Expert-written content to help you trade smarter in 2026.</p>
          <div style={{ marginTop: 20, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog" className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>All</Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/blog?cat=${c}`}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '0.8rem', background: cat === c ? 'var(--accent)' : 'transparent', color: cat === c ? '#0a0e17' : 'var(--accent)' }}
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid">
            {filtered.map((a) => (
              <div className="card" key={a.slug}>
                <div className="meta">
                  <span className="category">{a.category}</span>
                  <span style={{ marginLeft: 8 }}>{a.date}</span>
                </div>
                <h3><Link href={`/blog/${a.slug}`}>{a.title}</Link></h3>
                <p>{a.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
