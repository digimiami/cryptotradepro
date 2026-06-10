'use client';

import { handleTelegramClick } from './ConvertButton';

export default function TelegramLink({ children, className, source = 'general' }) {
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
