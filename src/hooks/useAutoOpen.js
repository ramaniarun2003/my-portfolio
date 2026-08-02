import { useEffect } from 'react';

// Opens a chapter automatically as its poké-ball scrolls into the upper part of
// the viewport (a bit before it centres, so the reveal feels anticipatory).
// Fires once then disconnects — chapters stay open as you pass, and it never
// auto-closes, so there's no rapid open/close jank. `enabled` is false under
// reduced-motion / when IntersectionObserver is unavailable (those paths open
// every chapter up front instead), and click/keyboard remain the fallback.
export function useAutoOpen(ref, onOpen, enabled) {
  useEffect(() => {
    if (!enabled) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { onOpen(); io.disconnect(); }
      },
      { root: null, rootMargin: '0px 0px -45% 0px', threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, onOpen, enabled]);
}
