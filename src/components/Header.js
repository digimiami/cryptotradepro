import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">CryptoTrade<span>Pro</span></Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/blog">Articles</Link>
          <a href="https://t.me/CryptoSignalsFree3" target="_blank" className="nav-signals">📢 Free Signals</a>
        </nav>
      </div>
    </header>
  );
}
