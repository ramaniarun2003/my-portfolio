import { useState, useEffect } from 'react';

// True while the ref'd element is near/within the viewport. Used to run a
// biome's ambient scenery animations only when it's on screen (keeps scroll
// smooth and offscreen biomes idle).
export function useInView(ref, rootMargin = '200px') {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return undefined; }
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);
  return inView;
}
