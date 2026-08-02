import Scenery from './Scenery';
import BiomeStop from './BiomeStop';

// One full-width biome band: its own tint + scenery, plus the poké-ball stop.
export default function Biome({ biome, ballRef }) {
  return (
    <section className={`biome biome--${biome.id}`} aria-labelledby={`${biome.id}-title`}>
      <Scenery type={biome.id} />
      <div className={`biome__inner biome__inner--${biome.side}`}>
        <div className="biome__head">
          <p className="biome__eyebrow">{biome.eyebrow}</p>
          <h3 className="biome__title" id={`${biome.id}-title`}>{biome.name}</h3>
        </div>
        <BiomeStop biome={biome} ballRef={ballRef} />
      </div>
    </section>
  );
}
