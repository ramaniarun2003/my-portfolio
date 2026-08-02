import CityScenery from './scenery/CityScenery';
import JungleScenery from './scenery/JungleScenery';
import DesertScenery from './scenery/DesertScenery';
import SeaScenery from './scenery/SeaScenery';

const SCENERY = {
  city: CityScenery,
  jungle: JungleScenery,
  desert: DesertScenery,
  sea: SeaScenery,
};

// Decorative, aria-hidden background art for a biome.
export default function Scenery({ type }) {
  const Art = SCENERY[type];
  if (!Art) return null;
  return (
    <div className="biome__scenery" aria-hidden="true">
      <Art />
    </div>
  );
}
