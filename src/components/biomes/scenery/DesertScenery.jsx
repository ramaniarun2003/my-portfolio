// Original desert: sun, dune, and a cactus.
export default function DesertScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice">
      <circle cx="990" cy="66" r="54" fill="#f4d79b" />
      <ellipse cx="600" cy="366" rx="820" ry="120" fill="#e9cf9a" />
      <g fill="#6f9e5f">
        <rect x="150" y="196" width="26" height="124" rx="12" />
        <rect x="122" y="230" width="20" height="42" rx="10" />
        <path d="M132 232h10v-24a10 10 0 0 0-10-10Z" />
        <rect x="184" y="214" width="20" height="46" rx="10" />
        <path d="M194 216h-10v-22a10 10 0 0 1 10-10Z" />
      </g>
    </svg>
  );
}
