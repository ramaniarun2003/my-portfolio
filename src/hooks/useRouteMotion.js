import { useEffect } from 'react';

// Drives the single "you are here" marker down the continuous trail as the
// page scrolls: it finds the biome band under the viewport line, samples that
// band's SVG trail path, and positions the marker there — one ball travelling
// the route. Disabled entirely under prefers-reduced-motion (no scroll travel).
export function useRouteMotion(containerRef, markerRef) {
  useEffect(() => {
    const root = containerRef.current;
    const marker = markerRef.current;
    if (!root || !marker) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      marker.style.opacity = '0';
      return undefined;
    }

    let ticking = false;

    const frame = () => {
      ticking = false;
      const bands = Array.prototype.slice.call(root.querySelectorAll('[data-band]'));
      if (!bands.length) return;
      const cy = window.innerHeight * 0.55;

      let band = null;
      let t = 0;
      for (let i = 0; i < bands.length; i++) {
        const r = bands[i].getBoundingClientRect();
        if (cy >= r.top && cy < r.bottom) { band = bands[i]; t = (cy - r.top) / r.height; break; }
      }
      if (!band) {
        const first = bands[0].getBoundingClientRect();
        if (cy < first.top) { band = bands[0]; t = 0; } else { band = bands[bands.length - 1]; t = 1; }
      }

      const path = band.querySelector('[data-trail]');
      if (!path || !path.getTotalLength) return;
      const L = path.getTotalLength();
      const pt = path.getPointAtLength(Math.max(0, Math.min(1, t)) * L);
      const br = band.getBoundingClientRect();
      const rr = root.getBoundingClientRect();
      const x = (pt.x / 100) * br.width;
      const y = (br.top - rr.top) + (pt.y / 100) * br.height;
      marker.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      marker.style.opacity = '1';
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.requestAnimationFrame(frame);
    const t1 = window.setTimeout(frame, 250);
    const t2 = window.setTimeout(frame, 900);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(frame);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [containerRef, markerRef]);
}
