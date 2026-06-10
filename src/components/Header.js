import Link from 'next/link';
import TelegramLink from './TelegramLink';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">CryptoTrade<span>Pro</span></Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/blog">Articles</Link>
          <TelegramLink className="nav-signals" source="nav">📢 Free Signals</TelegramLink>
        </nav>
      </div>
    </header>
  );
}
