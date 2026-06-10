import Link from 'next/link';
import { articles } from '../../../data/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDesc,
    openGraph: { title: article.title, description: article.metaDesc, type: 'article' },
  };
}

async function processContent(content) {
  // Convert markdown affiliate links to JSX
  const lines = content.split('\n');
  return lines;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  // Simple markdown-like rendering
  function renderContent(text) {
    // Split on double newlines for paragraphs
    const blocks = text.split('\n\n');
    return blocks.map((block, bi) => {
      block = block.trim();
      if (!block) return null;

      // Headers
      if (block.startsWith('### ')) return <h3 key={bi}>{block.replace('### ', '')}</h3>;
      if (block.startsWith('## ')) return <h2 key={bi}>{block.replace('## ', '')}</h2>;

      // List items
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(l => l.startsWith('- ')).map(l => l.replace('- ', ''));
        return <ul key={bi}>{items.map((item, ii) => <li key={ii}>{renderInline(item)}</li>)}</ul>;
      }

      // Ordered list
      if (/^\d+\. /.test(block)) {
        const items = block.split('\n').filter(l => /^\d+\. /.test(l)).map(l => l.replace(/^\d+\. /, ''));
        return <ol key={bi}>{items.map((item, ii) => <li key={ii}>{renderInline(item)}</li>)}</ol>;
      }

      // Table
      if (block.includes('|') && block.includes('\n')) {
        const rows = block.split('\n').filter(r => r.trim());
        if (rows.length >= 2) {
          const headers = rows[0].split('|').filter(c => c.trim());
          const dataRows = rows.slice(2).filter(r => !r.includes('---'));
          return (
            <table key={bi}>
              <thead><tr>{headers.map((h, hi) => <th key={hi}>{h.trim()}</th>)}</tr></thead>
              <tbody>
                {dataRows.map((row, ri) => {
                  const cols = row.split('|').filter(c => c.trim());
                  return <tr key={ri}>{cols.map((c, ci) => <td key={ci}>{renderInline(c.trim())}</td>)}</tr>;
                })}
              </tbody>
            </table>
          );
        }
      }

      return <p key={bi}>{renderInline(block)}</p>;
    });
  }

  function renderInline(text) {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Links — affiliate links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="nofollow sponsored">$1</a>');
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  }

  return (
    <article>
      <div className="meta" style={{ marginBottom: 12 }}>
        <span className="category">{article.category}</span>
        <span style={{ marginLeft: 8, color: 'var(--text-muted)' }}>{article.date} • By CryptoTradePro Team</span>
      </div>
      <h1>{article.title}</h1>

      {/* CTA box at top */}
      <div className="cta-box" style={{ marginTop: 24 }}>
        <h3>💰 Ready to Trade?</h3>
        <p>Join Bybit — the #1 rated crypto derivatives exchange with the lowest fees and up to $4,230 bonus.</p>
        <Link href="https://www.bybit.com/invite?ref=CRYPTO" className="btn btn-primary" target="_blank">Start Trading on Bybit →</Link>
      </div>

      {renderContent(article.content)}

      {/* CTA box at bottom */}
      <div className="cta-box">
        <h3>📊 Free Crypto Signals Daily</h3>
        <p>Join our Telegram channel @CryptoSignalsFree3 for free daily trading signals with entry, TP, and SL levels.</p>
        <Link href="https://t.me/CryptoSignalsFree3" className="btn btn-primary" target="_blank">Join @CryptoSignalsFree3 →</Link>
      </div>

      <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/blog" style={{ color: 'var(--text-muted)' }}>← Back to All Articles</Link>
      </div>
    </article>
  );
}
