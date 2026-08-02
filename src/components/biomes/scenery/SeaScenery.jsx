// Layered sea: horizon line with a distant island and a couple of birds, then
// several depth bands of waves with foam highlights that gently roll.
export default function SeaScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice">
      {/* horizon + distant island */}
      <line x1="0" y1="126" x2="1200" y2="126" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
      <path d="M820 126 q40 -34 88 -30 q46 -2 84 30 Z" fill="#9fc6c4" opacity="0.7" />

      {/* birds */}
      <g className="rt-bird" stroke="#5a7f86" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round">
        <path d="M180 78 q10 -10 20 0 q10 -10 20 0" />
        <path d="M250 96 q7 -7 14 0 q7 -7 14 0" />
      </g>

      {/* wave bands (back → front), the front ones roll */}
      <path d="M0 176 Q150 150 300 176 T600 176 T900 176 T1200 176 V360 H0 Z" fill="#bfe6ec" opacity="0.85" />
      <path className="rt-wave" d="M-40 212 Q120 184 300 212 T640 212 T980 212 T1320 212 V360 H-40 Z" fill="#a9dbe4" />
      <g fill="#ffffff" opacity="0.5">
        <ellipse cx="240" cy="212" rx="40" ry="5" /><ellipse cx="700" cy="212" rx="46" ry="5" /><ellipse cx="1040" cy="212" rx="38" ry="5" />
      </g>
      <path className="rt-wave rt-wave--b" d="M-40 262 Q140 232 320 262 T680 262 T1040 262 T1360 262 V360 H-40 Z" fill="#8fccd8" />
      <path d="M0 306 Q160 280 320 306 T640 306 T960 306 T1280 306 V360 H0 Z" fill="#71b9c9" />
      <g fill="#ffffff" opacity="0.45">
        <ellipse cx="360" cy="306" rx="52" ry="5" /><ellipse cx="880" cy="306" rx="48" ry="5" />
      </g>
    </svg>
  );
}
