import Link from 'next/link';
import { reviews, faqData } from '../data/reviews';
import { articles, siteName, siteDesc } from '../data/articles';
import TelegramButton, { handleNewsletterClick } from '../components/ConvertButton';
import TrackedAffiliateLink from '../components/TrackedAffiliateLink';

export default function HomePage() {
  const latestArticles = articles.slice(0, 6);
  const topReviews = reviews.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Your <span>Ultimate</span> Crypto Trading Resource</h1>
          <p>Expert reviews, proven strategies, and daily market analysis. Find the best exchanges, learn profitable trading techniques, and stay ahead of the 2026 bull run.</p>
          <div className="btns">
            <Link href="/reviews" className="btn btn-primary">Compare Exchanges →</Link>
            <Link href="/blog" className="btn btn-outline">Read Latest Guides</Link>
          </div>
        </div>
      </section>

      {/* TOP EXCHANGES */}
      <section>
        <div className="container">
          <h2 className="section-title">🏆 Top <span>Crypto Exchanges</span> 2026</h2>
          <div className="card-grid">
            {topReviews.map((r) => (
              <div className="review-card" key={r.slug}>
                <h3>{r.name}</h3>
                <div className="rating">⭐ {r.rating}/10</div>
                <div className="best-for">Best for: {r.bestFor}</div>
                <p>{r.description}</p>
                <div className="tags">
                  {r.pros.slice(0, 3).map((p, i) => <span className="tag" key={i}>{p}</span>)}
                  {r.cons.slice(0, 1).map((c, i) => <span className="tag red" key={i}>{c}</span>)}
                </div>
                <TrackedAffiliateLink href={r.affiliateUrl} className="btn btn-primary" source={r.slug} style={{ display: 'block', textAlign: 'center' }}>
                  Visit {r.name} {r.bonus && `— ${r.bonus}`}
                </TrackedAffiliateLink>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/reviews" className="btn btn-outline">View All 5 Reviews →</Link>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section style={{ background: '#0d1324' }}>
        <div className="container">
          <h2 className="section-title">📚 Latest <span>Articles & Guides</span></h2>
          <div className="card-grid">
            {latestArticles.map((a) => (
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
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/blog" className="btn btn-outline">Read All Articles →</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section>
        <div className="container">
          <h2 className="section-title">Why <span>CryptoTradePro</span>?</h2>
          <div className="card-grid">
            <div className="card">
              <h3>🔬 Rigorous Testing</h3>
              <p>Every exchange reviewed with actual account tests. We check fees, withdrawal speed, support quality, and security features firsthand.</p>
            </div>
            <div className="card">
              <h3>📊 Data-Driven Analysis</h3>
              <p>All strategies backed by backtested data and real trading results. No hype, no fluff — just what actually works.</p>
            </div>
            <div className="card">
              <h3>🔒 Safety First</h3>
              <p>We prioritize security above all else. Only recommend exchanges with proof of reserves, insurance funds, and clean regulatory track records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#0d1324' }}>
        <div className="container">
          <h2 className="section-title">❓ <span>FAQ</span></h2>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {faqData.slice(0, 4).map((item, i) => (
              <div className="faq-item" key={i}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER OPT-IN */}
      <section style={{ background: 'linear-gradient(135deg, #0f0c29, #1a1a3e)' }}>
        <div className="container">
          <div className="newsletter-box">
            <h2>📩 Free Crypto Trading Signals</h2>
            <p>Join <strong>@CryptoSignalsFree3</strong> on Telegram for daily market analysis, trade setups, and expired domain deals — 100% free.</p>
            <div className="newsletter-btns">
              <TelegramButton className="btn btn-primary">
                Join Telegram Channel →
              </TelegramButton>
              <a href="https://breeds-julian-meal-colony.trycloudflare.com" className="btn btn-outline" target="_blank" onClick={handleNewsletterClick}>
                📧 Subscribe via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.6rem', marginBottom: 12 }}>Start Your Trading Journey Today</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
            Join thousands of traders using our recommended platforms and strategies to navigate the crypto markets.
          </p>
          <TrackedAffiliateLink href="https://www.bybit.com/invite?ref=CRYPTO" className="btn btn-primary" source="bybit-cta" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
            Get Started with Bybit →
          </TrackedAffiliateLink>
        </div>
      </section>
    </>
  );
}
