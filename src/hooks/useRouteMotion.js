import { useEffect } from 'react';

// Drives the single "you are here" marker down the continuous trail. Each
// frame it samples the biome band under the viewport line, reads that band's
// SVG path, and eases the marker toward that point (lerp) so travel across
// biome seams stays smooth. The loop only runs while the route is on screen,
// and is disabled entirely under prefers-reduced-motion (no scroll travel).
export function useRouteMotion(containerRef, markerRef) {
  useEffect(() => {
    const root = containerRef.current;
    const marker = markerRef.current;
    if (!root || !marker) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { marker.style.opacity = '0'; return undefined; }

    const cur = { x: null, y: null };
    let raf = 0;
    let visible = false;

    const target = () => {
      const bands = Array.prototype.slice.call(root.querySelectorAll('[data-band]'));
      if (!bands.length) return null;
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
      if (!path || !path.getTotalLength) return null;
      const L = path.getTotalLength();
      const pt = path.getPointAtLength(Math.max(0, Math.min(1, t)) * L);
      const br = band.getBoundingClientRect();
      const rr = root.getBoundingClientRect();
      return { x: (pt.x / 100) * br.width, y: (br.top - rr.top) + (pt.y / 100) * br.height };
    };

    const loop = () => {
      const tg = target();
      if (tg) {
        if (cur.x === null) { cur.x = tg.x; cur.y = tg.y; }
        else { cur.x += (tg.x - cur.x) * 0.18; cur.y += (tg.y - cur.y) * 0.18; }
        marker.style.transform = `translate3d(${cur.x.toFixed(1)}px, ${cur.y.toFixed(1)}px, 0)`;
        marker.style.opacity = '1';
      }
      raf = window.requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) { raf = window.requestAnimationFrame(loop); }
      else if (!visible && raf) { window.cancelAnimationFrame(raf); raf = 0; }
    }, { rootMargin: '100px' });
    io.observe(root);

    return () => { if (raf) window.cancelAnimationFrame(raf); io.disconnect(); };
  }, [containerRef, markerRef]);
}
