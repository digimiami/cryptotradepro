export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the CryptoTradePro team. Reviews, feedback, or partnership inquiries welcome.',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>📬 Contact Us</h1>
          <p>Questions, feedback, or partnership inquiries? We'd love to hear from you.</p>
        </div>
      </div>
      <article style={{ textAlign: 'center' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 32, maxWidth: 500, margin: '0 auto' }}>
          <h2>Send us a message</h2>
          <p style={{ margin: '12px 0' }}>Email us at:</p>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 700 }}>contact@cryptotradepro.com</p>
          <p style={{ marginTop: 20, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Or reach out on Telegram: <a href="https://t.me/CryptoSignalsFree3" target="_blank" style={{ color: 'var(--accent)' }}>@CryptoSignalsFree3</a>
          </p>
        </div>
      </article>
    </>
  );
}
