import { useState, useEffect, useCallback } from 'react';
import { catmullRom } from '../utils/catmullRom';

// Computes one continuous SVG trail that enters the top of the section,
// threads through each ball's centre, and exits the bottom — recomputing on
// resize and whenever the section reflows (e.g. a card opening on mobile).
export function useTrail(containerRef, ballRefs) {
  const [path, setPath] = useState({ d: '', viewBox: '0 0 0 0' });

  const compute = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const box = container.getBoundingClientRect();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const points = [{ x: width / 2, y: 0 }];
    ballRefs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      points.push({ x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 });
    });
    points.push({ x: width / 2, y: height });

    setPath({ d: catmullRom(points), viewBox: `0 0 ${width} ${height}` });
  }, [containerRef, ballRefs]);

  useEffect(() => {
    compute();
    const container = containerRef.current;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => compute()) : null;
    if (ro && container) ro.observe(container);
    window.addEventListener('resize', compute);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(compute);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', compute);
    };
  }, [compute, containerRef]);

  return path;
}
