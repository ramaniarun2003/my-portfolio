import { useRef } from 'react';
import Scenery from './Scenery';
import TrailPath from './TrailPath';
import Pokeball from './Pokeball';
import BiomeCard from './BiomeCard';
import { useInView } from '../../hooks/useInView';
import { useAutoOpen } from '../../hooks/useAutoOpen';

// One full-width biome band: scenery + its weaving trail segment + the openable
// ball (at this biome's node side) and the card that folds out of it on the
// opposite side. The chapter opens automatically as the ball scrolls into view
// (auto), and click/keyboard remain a fallback. Open state → --o / --f / --vis.
export default function Biome({ biome, open, flash, bob, auto, onOpen, onClose }) {
  const ref = useRef(null);
  const ballRef = useRef(null);
  const inView = useInView(ref);

  // Scroll-triggered auto-open (disabled under reduced-motion / no IO).
  useAutoOpen(ballRef, onOpen, auto);

  const vars = {
    '--o': open ? 1 : 0,
    '--f': flash ? 1 : 0,
    '--vis': open ? 'visible' : 'hidden',
    '--ballX': biome.ballX,
    '--bob': `${bob}s`,
  };

  return (
    <section
      ref={ref}
      data-band
      aria-label={biome.aria}
      className={`rt-band rt-band--${biome.id} rt-band--${biome.side}${open ? ' is-open' : ''}${inView ? ' is-inview' : ''}`}
      style={vars}
    >
      <div className="rt-scenery" aria-hidden="true">
        <Scenery type={biome.scenery} />
      </div>

      <TrailPath desktop={biome.trail} mobile={biome.trailMobile} />

      <div className="rt-flow">
        <div className="rt-label" style={{ color: biome.labelColor }}>{biome.label}</div>
        <Pokeball
          ref={ballRef}
          open={open}
          type={biome.type}
          controls={`card-${biome.id}`}
          ariaLabel={`${open ? 'Close' : 'Open'} ${biome.ballName} — ${biome.card.title}`}
          onOpen={onOpen}
          onClose={onClose}
        />
        <BiomeCard id={biome.id} card={biome.card} open={open} />
      </div>
    </section>
  );
}
