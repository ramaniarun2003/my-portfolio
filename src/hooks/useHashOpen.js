import { useEffect } from 'react';

// Calls `onMatch` when the URL hash points at the given id — on mount and on
// every hashchange — enabling deep links like `/#card-finsight`.
export function useHashOpen(id, onMatch) {
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === `#${id}`) onMatch();
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [id, onMatch]);
}
