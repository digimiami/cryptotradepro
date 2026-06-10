import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/reviews">Exchange Reviews</Link>
          <Link href="/blog">Articles & Guides</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p>CryptoTradePro.com © {new Date().getFullYear()} — Independent Crypto Trading Reviews</p>
        <p className="disc">
          Some links on this site are affiliate links. We may earn a commission if you sign up through these links, at no extra cost to you.
          Cryptocurrency trading involves substantial risk. Never invest more than you can afford to lose. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  );
}
