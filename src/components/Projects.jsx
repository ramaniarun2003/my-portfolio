import { useState, useRef, useCallback, useEffect } from 'react';
import { biomes } from '../data/biomes';
import { useRouteMotion } from '../hooks/useRouteMotion';
import Biome from './biomes/Biome';
import Marker from './biomes/Marker';

// Gentle, per-ball float periods so the planted balls don't bob in lockstep.
const BOB = { city: 5.5, jungle: 6.2, desert: 5.8, sea: 6.6 };

// The Projects section IS the route: four biome bands with a single "you are
// here" marker travelling the continuous trail as you scroll, and a planted
// poké-ball in each that opens to reveal that chapter.
export default function Projects() {
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const [open, setOpen] = useState({});
  const [flash, setFlash] = useState({});

  useRouteMotion(containerRef, markerRef);

  const openBiome = useCallback((id) => {
    setOpen((o) => ({ ...o, [id]: true }));
    setFlash((f) => ({ ...f, [id]: true }));
    window.setTimeout(() => setFlash((f) => ({ ...f, [id]: false })), 430);
  }, []);

  const closeBiome = useCallback((id) => setOpen((o) => ({ ...o, [id]: false })), []);

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
          onOpen={() => openBiome(biome.id)}
          onClose={() => closeBiome(biome.id)}
        />
      ))}
      <Marker ref={markerRef} />
    </section>
  );
}
