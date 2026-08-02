// Original desert: glowing sun with halo, distant mesas, three dune layers,
// cacti of varied shapes/sizes, sparse dry brush, and a heat-shimmer overlay
// (HTML, animated only while in view).
function Saguaro({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#6f9e5f">
      <rect x="-6" y="-70" width="13" height="70" rx="6" />
      <path d="M-6 -38 h-9 a8 8 0 0 0 -8 8 v12 a5 5 0 0 0 10 0 v-8 a3 3 0 0 1 3 -3 h4 Z" />
      <path d="M7 -50 h9 a8 8 0 0 1 8 8 v16 a5 5 0 0 1 -10 0 v-10 a3 3 0 0 0 -3 -3 h-4 Z" />
    </g>
  );
}
function BarrelCactus({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#679656">
      <ellipse cx="0" cy="-14" rx="15" ry="18" />
      <g stroke="#54803f" strokeWidth="1.5">
        <line x1="-10" y1="-24" x2="-11" y2="-4" /><line x1="0" y1="-30" x2="0" y2="0" /><line x1="10" y1="-24" x2="11" y2="-4" />
      </g>
    </g>
  );
}

export default function DesertScenery() {
  return (
    <>
      <svg className="biome__scenery-svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMax slice">
        <defs>
          <radialGradient id="desertSun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fff2cf" /><stop offset="0.55" stopColor="#f6d284" /><stop offset="1" stopColor="#f6d284" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* glowing sun */}
        <circle cx="940" cy="96" r="120" fill="url(#desertSun)" opacity="0.6" />
        <circle cx="940" cy="96" r="54" fill="#f7d688" />

        {/* distant mesas */}
        <g fill="#e7c68e" opacity="0.55">
          <path d="M40 214 h170 v-46 h-28 v-20 h-104 v20 h-38 Z" />
          <path d="M250 220 h128 v-34 h-82 v-16 h-46 Z" />
          <path d="M980 216 h150 v-40 h-24 v-16 h-92 v16 h-34 Z" />
        </g>

        {/* dune layers (3) */}
        <ellipse cx="320" cy="360" rx="640" ry="132" fill="#eecf94" />
        <ellipse cx="960" cy="372" rx="600" ry="130" fill="#e6bf78" />
        <ellipse cx="520" cy="398" rx="760" ry="122" fill="#dcae62" />

        {/* cacti of varied shapes */}
        <Saguaro x={150} y={318} s={1.25} />
        <BarrelCactus x={250} y={330} s={1} />
        <Saguaro x={760} y={344} s={0.95} />
        <BarrelCactus x={1060} y={330} s={1.2} />
        <Saguaro x={1090} y={318} s={0.8} />

        {/* dry brush */}
        <g stroke="#c69a55" strokeWidth="2" opacity="0.7" fill="none">
          <path d="M430 340 l-6 -14 M436 340 l0 -18 M442 340 l6 -14" />
          <path d="M640 356 l-6 -14 M646 356 l0 -18 M652 356 l6 -14" />
        </g>
        <g fill="#c99a52" opacity="0.6">
          <ellipse cx="560" cy="352" rx="20" ry="6" /><ellipse cx="880" cy="346" rx="16" ry="5" />
        </g>
      </svg>

      <div className="rt-shimmer" />
    </>
  );
}
