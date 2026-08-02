import { useEffect } from 'react';

// Toggle the `inert` attribute on a ref'd element so collapsed content is
// kept out of the tab order and hidden from assistive tech.
export function useInert(ref, active) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (active) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
  }, [ref, active]);
}
