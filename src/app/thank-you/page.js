import Link from 'next/link';

export const metadata = {
  title: 'Thank You',
};

export default function ThankYouPage() {
  return (
    <section style={{ textAlign: 'center', padding: '80px 0' }}>
      <div className="container">
        <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>Almost There!</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8, fontSize: '1.05rem' }}>
          You're being redirected to our Telegram channel for 
          <strong> free crypto trading signals</strong> — daily analysis, trade setups, and market insights.
        </p>
        <div className="newsletter-btns" style={{ justifyContent: 'center' }}>
          <a href="https://t.me/CryptoSignalsFree3" className="btn btn-primary" target="_blank" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
            📢 Open Telegram Channel →
          </a>
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', marginTop: 40, fontSize: '0.85rem' }}>
          Didn't get redirected? <a href="https://t.me/CryptoSignalsFree3" target="_blank" style={{ color: 'var(--accent)' }}>Click here</a>
        </p>
      </div>
    </section>
  );
}
