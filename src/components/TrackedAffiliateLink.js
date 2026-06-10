'use client';

import { trackConversion } from './ConvertButton';

export default function TrackedAffiliateLink({ href, children, source, className, style }) {
  const handleClick = (e) => {
    e.preventDefault();
    const url = trackConversion(source) + `&redirect=${encodeURIComponent(href)}&source=${encodeURIComponent(source)}`;
    
    // Fire conversion via fetch, then redirect to affiliate link
    fetch(url)
      .then(() => {
        window.open(href, '_blank');
      })
      .catch(() => {
        window.open(href, '_blank');
      });
  };

  return (
    <a
      href={href}
      target="_blank"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
