'use client';

const CTP_TRACKING_KEY = 'ctp_tracking';

function getTrackingData() {
  try {
    const raw = sessionStorage.getItem(CTP_TRACKING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function trackConversion(source = 'telegram') {
  const tracking = getTrackingData();
  const clickId = tracking?.click_id || '';
  const country = tracking?.country || '';
  const os = tracking?.os || '';
  const cost = tracking?.cost || '0';
  const ref = tracking?.ref || '';

  // Build conversion URL
  let url = `/api/conversion?source=${encodeURIComponent(source)}`;
  if (clickId) url += `&click_id=${encodeURIComponent(clickId)}`;
  if (country) url += `&country=${encodeURIComponent(country)}`;
  if (os) url += `&os=${encodeURIComponent(os)}`;
  if (cost) url += `&cost=${encodeURIComponent(cost)}`;
  if (ref) url += `&ref=${encodeURIComponent(ref)}`;

  return url;
}

// Click handler for Telegram buttons - fires conversion then opens Telegram
export function handleTelegramClick(e, source = 'telegram') {
  e.preventDefault();
  const url = trackConversion(source);
  
  // Fire conversion (via fetch) then redirect
  fetch(url)
    .then(() => {
      window.open('https://t.me/CryptoSignalsFree3', '_blank');
    })
    .catch(() => {
      // Even if conversion fails, still send to Telegram
      window.open('https://t.me/CryptoSignalsFree3', '_blank');
    });
}

// Click handler for newsletter/newsletter opt-in
export function handleNewsletterClick(e) {
  e.preventDefault();
  const url = trackConversion('newsletter');
  
  fetch(url)
    .then(() => {
      window.open('https://breeds-julian-meal-colony.trycloudflare.com', '_blank');
    })
    .catch(() => {
      window.open('https://breeds-julian-meal-colony.trycloudflare.com', '_blank');
    });
}

// Inline component for Telegram button
export default function TelegramButton({ children, className = 'btn btn-primary', source = 'telegram' }) {
  return (
    <a
      href="https://t.me/CryptoSignalsFree3"
      target="_blank"
      className={className}
      onClick={(e) => handleTelegramClick(e, source)}
    >
      {children}
    </a>
  );
}
