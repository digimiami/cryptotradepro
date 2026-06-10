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
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
