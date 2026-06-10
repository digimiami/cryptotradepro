import Link from 'next/link';
import { reviews } from '../../../data/reviews';
import TrackedAffiliateLink from '../../../components/TrackedAffiliateLink';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = reviews.find((r) => r.slug === slug);
  if (!r) return {};
  return {
    title: `${r.name} Review 2026`,
    description: `Complete ${r.name} review for 2026. Fees, security, features, pros, cons, and regulation. Rating: ${r.rating}/10. ${r.bestFor}.`,
  };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const r = reviews.find((r) => r.slug === slug);
  if (!r) notFound();

  return (
    <>
      <div className="review-header">
        <div className="container">
          <h1>{r.name} Review 2026</h1>
          <div className="rating-big">⭐ {r.rating}/10</div>
          <div className="best-for">Best for: {r.bestFor}</div>
          <div className="fees">Fees: {r.fees} • {r.coins}+ Coins</div>
        </div>
      </div>

      <article>
        <p style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: 24 }}>{r.description}</p>

        <div className="pros-cons">
          <div className="pros">
            <h3>✅ Pros</h3>
            <ul>{r.pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
          <div className="cons">
            <h3>❌ Cons</h3>
            <ul>{r.cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        </div>

        <h2>Key Details</h2>
        <table>
          <tbody>
            <tr><th>Trading Fees</th><td>{r.fees}</td></tr>
            <tr><th>Available Coins</th><td>{r.coins}+</td></tr>
            <tr><th>Regulation</th><td>{r.regulation}</td></tr>
            <tr><th>Rating</th><td>{r.rating}/10</td></tr>
          </tbody>
        </table>

        <div className="cta-box">
          <h3>🚀 Start Trading on {r.name}</h3>
          <p>{r.bonus ? `Claim your bonus: ${r.bonus}` : `Trade with one of the most reliable exchanges.`}</p>
          <TrackedAffiliateLink href={r.affiliateUrl} className="btn btn-primary" source={r.slug}>Visit {r.name} →</TrackedAffiliateLink>
        </div>

        <Link href="/reviews" style={{ display: 'inline-block', marginTop: 20, color: 'var(--text-muted)' }}>← Back to All Reviews</Link>
      </article>
    </>
  );
}
