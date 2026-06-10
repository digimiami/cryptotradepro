import Link from 'next/link';

export const metadata = {
  title: 'About CryptoTradePro',
  description: 'We are a team of experienced crypto traders and researchers dedicated to providing honest, data-driven reviews and educational content.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>ℹ️ About CryptoTradePro</h1>
        </div>
      </div>
      <article>
        <p>CryptoTradePro is your trusted source for honest crypto trading reviews, educational guides, and market analysis. We are not affiliated with any exchange — our reviews are independent and data-driven.</p>

        <h2>Our Mission</h2>
        <p>To help traders of all levels navigate the complex world of cryptocurrency trading. Whether you're opening your first account or optimizing your leverage strategy, we provide the information you need to make informed decisions.</p>

        <h2>How We Review</h2>
        <p>Every exchange on this site is evaluated using the same rigorous criteria:</p>
        <ul>
          <li><strong>Account testing</strong> — We open real accounts, deposit funds, and test the full experience</li>
          <li><strong>Fee analysis</strong> — We calculate effective fees including hidden costs</li>
          <li><strong>Security audit</strong> — We verify proof of reserves, insurance funds, and regulatory compliance</li>
          <li><strong>Support testing</strong> — We measure response times and quality across multiple channels</li>
          <li><strong>Withdrawal tests</strong> — We verify speed, limits, and reliability of withdrawals</li>
        </ul>

        <h2>Affiliate Disclosure</h2>
        <p>Some links on this site are affiliate links. If you sign up through these links, we may earn a commission at no extra cost to you. This helps us maintain the site and continue providing independent reviews. We only recommend exchanges we have personally tested and believe in.</p>

        <h2>Risk Warning</h2>
        <p>Cryptocurrency trading carries significant risk. Prices can fluctuate dramatically, and leverage trading can result in losses exceeding your initial deposit. Never invest money you cannot afford to lose. Past performance does not guarantee future results.</p>

        <h2>Contact</h2>
        <p>Have questions, feedback, or a review request? <Link href="/contact">Get in touch →</Link></p>
      </article>
    </>
  );
}
