// Layered desert: big warm sun, distant mesas, three dune layers, cacti of
// varied sizes, and a heat-shimmer overlay (HTML, animated only while in view).
function Cactus({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#6f9e5f">
      <rect x="-6" y="-64" width="13" height="64" rx="6" />
      <path d="M-6 -34 h-9 a8 8 0 0 0 -8 8 v10 a5 5 0 0 0 10 0 v-6 a3 3 0 0 1 3 -3 h4 Z" />
      <path d="M7 -44 h9 a8 8 0 0 1 8 8 v14 a5 5 0 0 1 -10 0 v-8 a3 3 0 0 0 -3 -3 h-4 Z" />
    </g>
  );
}

export default function DesertScenery() {
  return (
    <>
      <svg className="biome__scenery-svg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice">
        {/* sun with soft halo */}
        <circle cx="945" cy="92" r="94" fill="#fbe6b0" opacity="0.45" />
        <circle cx="945" cy="92" r="56" fill="#f6d284" />

        {/* distant mesas */}
        <g fill="#e6c48c" opacity="0.6">
          <path d="M60 210 h150 v-40 h-24 v-18 h-90 v18 h-36 Z" />
          <path d="M280 214 h110 v-30 h-70 v-14 h-40 Z" />
        </g>

        {/* dune layers */}
        <ellipse cx="360" cy="360" rx="620" ry="130" fill="#eecf94" />
        <ellipse cx="980" cy="372" rx="560" ry="128" fill="#e6bf78" />
        <ellipse cx="520" cy="392" rx="720" ry="120" fill="#dcae62" />

        {/* cacti of varied sizes */}
        <Cactus x={150} y={300} s={1.25} />
        <Cactus x={250} y={318} s={0.8} />
        <Cactus x={760} y={330} s={1} />
        <Cactus x={1080} y={306} s={1.15} />

        {/* small pebbles */}
        <g fill="#c99a52" opacity="0.7">
          <ellipse cx="430" cy="332" rx="16" ry="6" /><ellipse cx="600" cy="346" rx="22" ry="7" />
        </g>
      </svg>

      <div className="rt-shimmer" />
    </>
  );
}
