import Header from '../components/Header';
import Footer from '../components/Footer';
import Tracker from '../components/Tracker';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | CryptoTradePro',
    default: 'CryptoTradePro — Expert Crypto Trading Reviews & Guides 2026',
  },
  description: 'Expert crypto trading reviews, guides, and market analysis. Compare the best exchanges like Bybit, Binance, Kraken. Learn trading strategies and risk management.',
  keywords: ['crypto trading', 'Bitcoin', 'Ethereum', 'Bybit review', 'Binance review', 'crypto exchanges', 'trading guide 2026'],
  openGraph: {
    type: 'website',
    siteName: 'CryptoTradePro',
    title: 'CryptoTradePro — Expert Crypto Trading Reviews',
    description: 'Expert crypto trading reviews, guides, and market analysis.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Tracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
