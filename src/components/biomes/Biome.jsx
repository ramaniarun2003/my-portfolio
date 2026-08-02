import Scenery from './Scenery';
import TrailPath from './TrailPath';
import Pokeball from './Pokeball';
import BiomeCard from './BiomeCard';

// One full-width biome band: scenery + its trail segment + the openable ball
// and the card that folds out of it. Open state is exposed to descendants via
// the --o / --f / --vis custom properties.
export default function Biome({ biome, open, flash, bob, onOpen, onClose }) {
  const vars = {
    '--o': open ? 1 : 0,
    '--f': flash ? 1 : 0,
    '--vis': open ? 'visible' : 'hidden',
  };

  return (
    <section
      data-band
      aria-label={biome.aria}
      className={`rt-band rt-band--${biome.id}${open ? ' is-open' : ''}`}
      style={vars}
    >
      <div className="rt-scenery" aria-hidden="true">
        <Scenery type={biome.scenery} />
      </div>

      <TrailPath desktop={biome.trail} mobile={biome.trailMobile} />

      <div className="rt-flow">
        <div className="rt-label" style={{ color: biome.labelColor }}>{biome.label}</div>
        <Pokeball
          open={open}
          bob={bob}
          controls={`card-${biome.id}`}
          ariaLabel={`${open ? 'Close' : 'Open'} chapter: ${biome.card.title}`}
          onOpen={onOpen}
          onClose={onClose}
        />
        <BiomeCard id={biome.id} card={biome.card} open={open} />
      </div>
    </section>
  );
}
