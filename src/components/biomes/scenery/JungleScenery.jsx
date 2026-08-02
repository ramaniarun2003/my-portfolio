// Layered jungle: canopy silhouette behind, hanging vines, big foreground
// leaves/ferns that sway, dappled light spots, varied greens for depth.
export default function JungleScenery() {
  return (
    <svg className="biome__scenery-svg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice">
      {/* far canopy silhouette */}
      <g fill="#8fbb85" opacity="0.5">
        <circle cx="90" cy="20" r="120" /><circle cx="300" cy="-6" r="96" />
        <circle cx="560" cy="10" r="110" /><circle cx="840" cy="-6" r="100" />
        <circle cx="1120" cy="18" r="124" />
      </g>
      {/* mid canopy */}
      <g fill="#6fa672" opacity="0.55">
        <circle cx="180" cy="-4" r="86" /><circle cx="470" cy="8" r="80" />
        <circle cx="720" cy="-8" r="90" /><circle cx="1000" cy="6" r="86" />
      </g>

      {/* hanging vines */}
      <g stroke="#4e8757" strokeWidth="3" opacity="0.55" fill="none">
        <path d="M240 40 q8 60 -4 120" /><path d="M600 30 q-10 70 6 140" />
        <path d="M930 44 q10 60 -6 120" />
      </g>
      <g fill="#5a9260" opacity="0.6">
        <ellipse cx="236" cy="164" rx="9" ry="16" /><ellipse cx="606" cy="174" rx="9" ry="16" /><ellipse cx="924" cy="166" rx="9" ry="16" />
      </g>

      {/* dappled light */}
      <g fill="#fff9d6">
        <circle className="rt-dapple" cx="220" cy="120" r="70" opacity="0.3" />
        <circle className="rt-dapple rt-dapple--b" cx="820" cy="150" r="90" opacity="0.28" />
      </g>

      {/* foreground ferns (sway) */}
      <g className="rt-sway" fill="#57945e" opacity="0.8">
        <path d="M20 360 q40 -150 6 -210 q-70 70 -30 210 Z" />
      </g>
      <g className="rt-sway rt-sway--b" fill="#4e8757" opacity="0.72" style={{ transformOrigin: 'bottom right' }}>
        <path d="M1180 360 q-44 -160 -4 -220 q74 76 26 220 Z" />
      </g>

      {/* big foreground leaves */}
      <g fill="#3b6b46" opacity="0.6">
        <path d="M-10 320 q120 -30 150 40 q-120 40 -150 -40 Z" />
        <path d="M1210 300 q-130 -34 -164 44 q130 44 164 -44 Z" />
      </g>
      <g fill="#5a9260" opacity="0.5">
        <path d="M470 360 q60 -110 150 -96 q-30 96 -150 96 Z" />
      </g>
    </svg>
  );
}
