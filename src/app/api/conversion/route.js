// OctoClick conversion postback endpoint
// Called when a user takes a desired action (joins Telegram, subscribes, etc.)

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const clickId = searchParams.get('click_id');
  const source = searchParams.get('source') || 'telegram';
  const country = searchParams.get('country') || '';
  const os = searchParams.get('os') || '';
  const cost = searchParams.get('cost') || '0';
  const ref = searchParams.get('ref') || '';

  const events = [];
  const now = new Date().toISOString();
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  // If we have a click_id, fire the OctoClick postback
  if (clickId && clickId !== 'undefined' && clickId.length > 5) {
    const postbackUrl = `https://s2s.octoclick.com/postback?cost=${cost}&uuid=${clickId}&currency=USD`;
    
    try {
      const pbResp = await fetch(postbackUrl, { method: 'GET', signal: AbortSignal.timeout(5000) });
      events.push({
        type: 'octoclick_postback',
        status: pbResp.ok ? 'sent' : 'failed',
        http: pbResp.status,
        url: postbackUrl,
      });
    } catch (err) {
      events.push({ type: 'octoclick_postback', status: 'error', error: err.message });
    }
  }

  // Log the conversion
  const logEntry = {
    timestamp: now,
    clickId: clickId || 'none',
    source,
    ref,
    country,
    os,
    cost,
    ip,
    events,
  };

  // In production, you'd store this in a DB. For now, log it.
  console.log('[CONVERSION]', JSON.stringify(logEntry));

  // Determine redirect target
  let redirectTarget;
  if (source === 'telegram') {
    redirectTarget = 'https://t.me/CryptoSignalsFree3';
  } else if (source === 'newsletter') {
    redirectTarget = 'https://breeds-julian-meal-colony.trycloudflare.com';
  } else if (searchParams.has('redirect')) {
    redirectTarget = searchParams.get('redirect');
  } else {
    redirectTarget = '/thank-you';
  }

  return Response.redirect(redirectTarget, 302);
}
