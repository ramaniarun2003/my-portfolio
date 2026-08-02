import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { biomes } from '../data/biomes';
import { useRouteMotion } from '../hooks/useRouteMotion';
import Biome from './biomes/Biome';
import Marker from './biomes/Marker';

// Gentle, per-ball float periods so the planted balls don't bob in lockstep.
const BOB = { city: 5.5, jungle: 6.2, desert: 5.8, sea: 6.6 };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Auto-open is a motion effect and needs IntersectionObserver. When either is
// unavailable we instead reveal every chapter up front — so content is never
// trapped behind a scroll trigger that can't fire, and reduced-motion users get
// everything statically. Click/keyboard remain the fallback in all cases.
const autoOpenAvailable = () =>
  typeof IntersectionObserver !== 'undefined' && !prefersReducedMotion();

const allOpen = () => Object.fromEntries(biomes.map((b) => [b.id, true]));

// The Projects section IS the route: four biome bands with a single "you are
// here" marker travelling the continuous trail as you scroll. Each chapter's
// poké-ball opens automatically as the ball reaches it (no click, works on
// touch), with click / Enter / Space as a fallback and no hover trigger.
export default function Projects() {
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const auto = useMemo(autoOpenAvailable, []);
  const [open, setOpen] = useState(() => (auto ? {} : allOpen()));
  const [flash, setFlash] = useState({});

  useRouteMotion(containerRef, markerRef);

  const openBiome = useCallback((id) => {
    setOpen((o) => (o[id] ? o : { ...o, [id]: true }));
    if (prefersReducedMotion()) return;
    setFlash((f) => ({ ...f, [id]: true }));
    window.setTimeout(() => setFlash((f) => ({ ...f, [id]: false })), 430);
  }, []);

  const closeBiome = useCallback((id) => setOpen((o) => ({ ...o, [id]: false })), []);

  // Stable per-biome handlers so the auto-open observer isn't re-created each render.
  const handlers = useMemo(
    () => Object.fromEntries(biomes.map((b) => [b.id, {
      onOpen: () => openBiome(b.id),
      onClose: () => closeBiome(b.id),
    }])),
    [openBiome, closeBiome],
  );

  // Deep link: open a chapter when the URL hash matches (e.g. #card-jungle).
  useEffect(() => {
    const sync = () => {
      const m = window.location.hash.match(/^#card-([a-z]+)/);
      if (m && biomes.some((b) => b.id === m[1])) openBiome(m[1]);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [openBiome]);

  return (
    <section
      id="projects"
      className="route-trail"
      ref={containerRef}
      aria-label="Projects — a route through four biomes"
    >
      {biomes.map((biome) => (
        <Biome
          key={biome.id}
          biome={biome}
          open={!!open[biome.id]}
          flash={!!flash[biome.id]}
          bob={BOB[biome.id] || 6}
          auto={auto}
          onOpen={handlers[biome.id].onOpen}
          onClose={handlers[biome.id].onClose}
        />
      ))}
      <Marker ref={markerRef} />
    </section>
  );
}
