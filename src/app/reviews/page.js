import Link from 'next/link';
import { reviews } from '../../data/reviews';

export const metadata = {
  title: 'Crypto Exchange Reviews 2026',
  description: 'Honest reviews of the top crypto exchanges: Bybit, Binance, Kraken, eToro, Coinbase. Compare fees, security, features, and find the best platform for your needs.',
};

export default function ReviewsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>🏦 Crypto Exchange Reviews</h1>
          <p>We test every exchange with real accounts. Honest, data-driven reviews — no paid placements.</p>
        </div>
      </div>
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid">
            {reviews.map((r) => (
              <div className="review-card" key={r.slug}>
                <h3>{r.name}</h3>
                <div className="rating">⭐ {r.rating}/10</div>
                <div className="best-for">Best for: {r.bestFor}</div>
                <p>{r.description}</p>
                <div style={{ marginBottom: 12, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Fees:</strong> {r.fees}<br />
                  <strong style={{ color: 'var(--text)' }}>Coins:</strong> {r.coins}+<br />
                  <strong style={{ color: 'var(--text)' }}>Regulation:</strong> {r.regulation}
                </div>
                <div className="tags">
                  {r.pros.slice(0, 3).map((p, i) => <span className="tag" key={i}>{p}</span>)}
                  {r.cons.slice(0, 1).map((c, i) => <span className="tag red" key={i}>{c}</span>)}
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <Link href={r.affiliateUrl} className="btn btn-primary" target="_blank" style={{ flex: 1, textAlign: 'center' }}>
                    Visit {r.name}
                  </Link>
                  <Link href={`/reviews/${r.slug}`} className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }}>
                    Full Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
