// Original layered jungle: misty distant trees, overhead canopy leaves, angled
// light shafts, dappled spots, hanging vines, and big foreground ferns/leaves
// that sway. Varied greens for depth.
export default function JungleScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lightShaft" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#fff9d6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff9d6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* distant misty trees */}
      <g fill="#a7c9a1" opacity="0.45">
        <ellipse cx="130" cy="120" rx="70" ry="150" /><ellipse cx="330" cy="100" rx="60" ry="140" />
        <ellipse cx="560" cy="130" rx="74" ry="150" /><ellipse cx="800" cy="105" rx="64" ry="140" />
        <ellipse cx="1040" cy="125" rx="72" ry="150" />
      </g>

      {/* far canopy */}
      <g fill="#8fbb85" opacity="0.55">
        <circle cx="90" cy="12" r="118" /><circle cx="300" cy="-8" r="94" /><circle cx="560" cy="6" r="108" />
        <circle cx="840" cy="-8" r="98" /><circle cx="1120" cy="14" r="122" />
      </g>
      {/* mid canopy */}
      <g fill="#6fa672" opacity="0.6">
        <circle cx="180" cy="-6" r="86" /><circle cx="470" cy="6" r="80" /><circle cx="720" cy="-10" r="90" /><circle cx="1000" cy="4" r="86" />
      </g>

      {/* light shafts */}
      <g>
        <polygon points="230,0 300,0 210,300 160,300" fill="url(#lightShaft)" />
        <polygon points="780,0 840,0 760,300 715,300" fill="url(#lightShaft)" />
      </g>

      {/* dappled light */}
      <g fill="#fff9d6">
        <circle className="rt-dapple" cx="220" cy="120" r="66" opacity="0.3" />
        <circle className="rt-dapple rt-dapple--b" cx="820" cy="150" r="86" opacity="0.28" />
        <circle className="rt-dapple" cx="560" cy="90" r="52" opacity="0.24" />
      </g>

      {/* hanging vines */}
      <g stroke="#4e8757" strokeWidth="3" opacity="0.55" fill="none">
        <path d="M240 30 q10 70 -4 140" /><path d="M600 20 q-10 80 6 160" /><path d="M930 34 q10 66 -6 130" />
        <path d="M420 26 q-6 50 4 96" />
      </g>
      <g fill="#5a9260" opacity="0.6">
        <ellipse cx="236" cy="176" rx="9" ry="16" /><ellipse cx="606" cy="184" rx="9" ry="16" />
        <ellipse cx="924" cy="168" rx="9" ry="16" /><ellipse cx="424" cy="126" rx="7" ry="13" />
      </g>

      {/* foreground ferns (sway) */}
      <g className="rt-sway" fill="#57945e" opacity="0.82">
        <path d="M20 380 q44 -160 6 -224 q-76 74 -32 224 Z" />
        <path d="M96 380 q20 -120 -8 -176 q-52 60 -20 176 Z" opacity="0.7" />
      </g>
      <g className="rt-sway rt-sway--b" fill="#4e8757" opacity="0.75" style={{ transformOrigin: 'bottom right' }}>
        <path d="M1180 380 q-46 -168 -4 -232 q78 78 28 232 Z" />
        <path d="M1104 380 q-22 -128 6 -184 q54 62 22 184 Z" opacity="0.7" />
      </g>

      {/* big foreground leaves */}
      <g fill="#3b6b46" opacity="0.62">
        <path d="M-10 336 q124 -32 156 42 q-124 42 -156 -42 Z" />
        <path d="M1210 316 q-134 -36 -170 46 q134 46 170 -46 Z" />
      </g>
      <g fill="#5a9260" opacity="0.5">
        <path d="M470 380 q64 -116 156 -100 q-32 100 -156 100 Z" />
      </g>
    </svg>
  );
}
