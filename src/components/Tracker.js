'use client';
import { useEffect } from 'react';

export default function Tracker() {
  useEffect(() => {
    // Capture OctoClick tracking params from URL
    const params = new URLSearchParams(window.location.search);
    const clickId = params.get('click_id');
    const ref = params.get('ref');
    const country = params.get('country');
    const os = params.get('os');
    const device = params.get('device');
    const cost = params.get('cost');
    const cid = params.get('cid');

    if (clickId || ref) {
      // Store in sessionStorage so it persists across page navigation
      const data = {
        click_id: clickId || '',
        ref: ref || '',
        country: country || '',
        os: os || '',
        device: device || '',
        cost: cost || '0',
        cid: cid || '',
        timestamp: Date.now(),
        source: ref?.includes('octo') ? 'octoclick' : 'direct',
      };
      
      // Only update if we have new tracking data
      const existing = sessionStorage.getItem('ctp_tracking');
      if (!existing || clickId) {
        sessionStorage.setItem('ctp_tracking', JSON.stringify(data));
        
        // Also try to fire a landing conversion (pageview)
        if (data.click_id && data.click_id.length > 5) {
          const img = new Image();
          img.src = `/api/conversion?click_id=${encodeURIComponent(data.click_id)}&source=landing&country=${encodeURIComponent(data.country)}&os=${encodeURIComponent(data.os)}&cost=${encodeURIComponent(data.cost)}&ref=${encodeURIComponent(data.ref)}`;
        }
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
