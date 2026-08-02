// Original luminous sea: sky-to-water horizon with a distant island and birds,
// light rays fanning through the surface, then several depth bands of waves
// with foam highlights that gently roll.
export default function SeaScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="seaRay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* horizon + distant island */}
      <line x1="0" y1="132" x2="1200" y2="132" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
      <path d="M812 132 q46 -40 100 -34 q52 -2 92 34 Z" fill="#9fc6c4" opacity="0.7" />
      <path d="M150 132 q22 -18 48 -16 q24 -2 42 16 Z" fill="#a9cfcd" opacity="0.5" />

      {/* birds */}
      <g className="rt-bird" stroke="#5a7f86" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round">
        <path d="M180 82 q10 -10 20 0 q10 -10 20 0" />
        <path d="M250 100 q7 -7 14 0 q7 -7 14 0" />
        <path d="M320 74 q8 -8 16 0 q8 -8 16 0" />
      </g>

      {/* light rays through the surface */}
      <g>
        <polygon points="360,150 420,150 340,340 300,340" fill="url(#seaRay)" opacity="0.7" />
        <polygon points="760,150 806,150 740,340 705,340" fill="url(#seaRay)" opacity="0.6" />
      </g>

      {/* wave bands (back → front), the front ones roll */}
      <path d="M0 180 Q150 154 300 180 T600 180 T900 180 T1200 180 V380 H0 Z" fill="#bfe6ec" opacity="0.85" />
      <path className="rt-wave" d="M-40 216 Q120 188 300 216 T640 216 T980 216 T1320 216 V380 H-40 Z" fill="#a9dbe4" />
      <g fill="#ffffff" opacity="0.5">
        <ellipse cx="240" cy="216" rx="40" ry="5" /><ellipse cx="700" cy="216" rx="46" ry="5" /><ellipse cx="1040" cy="216" rx="38" ry="5" />
      </g>
      <path className="rt-wave rt-wave--b" d="M-40 266 Q140 236 320 266 T680 266 T1040 266 T1360 266 V380 H-40 Z" fill="#8fccd8" />
      <g fill="#ffffff" opacity="0.5">
        <ellipse cx="420" cy="266" rx="44" ry="5" /><ellipse cx="900" cy="266" rx="50" ry="5" />
      </g>
      <path d="M0 312 Q160 286 320 312 T640 312 T960 312 T1280 312 V380 H0 Z" fill="#71b9c9" />
      <g fill="#ffffff" opacity="0.42">
        <ellipse cx="360" cy="312" rx="52" ry="5" /><ellipse cx="880" cy="312" rx="48" ry="5" />
      </g>
    </svg>
  );
}
