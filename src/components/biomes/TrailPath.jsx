import { useMediaQuery } from '../../hooks/useMediaQuery';

// One biome's segment of the continuous dashed route. Endpoints meet the
// neighbouring bands at the seams; the marker samples this path via getPointAtLength.
export default function TrailPath({ desktop, mobile }) {
  const isMobile = useMediaQuery('(max-width:767px)');
  return (
    <svg className="rt-trailsvg" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        data-trail
        d={isMobile ? mobile : desktop}
        fill="none"
        stroke="#E24B4A"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="0.6 4.2"
        vectorEffect="non-scaling-stroke"
        opacity="0.85"
      />
    </svg>
  );
}
