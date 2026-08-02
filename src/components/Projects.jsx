import { useMemo, useRef, createRef } from 'react';
import { biomes } from '../data/biomes';
import { useTrail } from '../hooks/useTrail';
import Trail from './biomes/Trail';
import Biome from './biomes/Biome';

// The Projects section IS the biome trail: one continuous route winding
// top-to-bottom through four full-width biomes, a poké-ball on each.
export default function Projects() {
  const containerRef = useRef(null);
  const ballRefs = useMemo(() => biomes.map(() => createRef()), []);
  const path = useTrail(containerRef, ballRefs);

  return (
    <section
      id="projects"
      className="biome-trail"
      ref={containerRef}
      aria-label="Projects — a route through four biomes"
    >
      <Trail path={path} />
      {biomes.map((biome, i) => (
        <Biome key={biome.id} biome={biome} ballRef={ballRefs[i]} />
      ))}
    </section>
  );
}
