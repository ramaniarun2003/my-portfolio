// Layered skyline: hazy far row, mid row, detailed front row with window grids,
// a faint sun, and drifting clouds (HTML, animated only while in view).
const front = [
  { x: 10, w: 116, h: 176 }, { x: 150, w: 84, h: 236 }, { x: 258, w: 104, h: 150 },
  { x: 386, w: 74, h: 262 }, { x: 500, w: 120, h: 196 }, { x: 660, w: 68, h: 246 },
  { x: 760, w: 110, h: 168 }, { x: 900, w: 86, h: 250 }, { x: 1020, w: 122, h: 204 },
];

export default function CityScenery() {
  return (
    <>
      <svg className="biome__scenery-svg" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice">
        <defs>
          <pattern id="cityWinBack" width="18" height="24" patternUnits="userSpaceOnUse">
            <rect x="5" y="6" width="7" height="10" fill="#ffffff" opacity="0.28" />
          </pattern>
          <pattern id="cityWin" width="16" height="21" patternUnits="userSpaceOnUse">
            <rect x="3" y="4" width="7" height="10" fill="#ffffff" opacity="0.55" />
          </pattern>
        </defs>

        <circle cx="985" cy="66" r="52" fill="#ffffff" opacity="0.42" />

        {/* far, hazy row */}
        <g fill="#b7c7d8" opacity="0.5">
          <rect x="30" y="150" width="90" height="210" /><rect x="130" y="112" width="66" height="248" />
          <rect x="350" y="140" width="82" height="220" /><rect x="470" y="102" width="60" height="258" />
          <rect x="700" y="150" width="82" height="210" /><rect x="880" y="120" width="72" height="240" />
          <rect x="1050" y="150" width="92" height="210" />
        </g>

        {/* mid row with faint windows */}
        <g>
          {[[196, 172, 96], [560, 150, 92], [812, 182, 82]].map(([x, y, w]) => (
            <g key={x}>
              <rect x={x} y={y} width={w} height={360 - y} fill="#a4b9cd" />
              <rect x={x} y={y} width={w} height={360 - y} fill="url(#cityWinBack)" />
            </g>
          ))}
        </g>

        {/* detailed front row */}
        <g>
          {front.map((b) => (
            <g key={b.x}>
              <rect x={b.x} y={360 - b.h} width={b.w} height={b.h} fill="#8ea8c1" />
              <rect x={b.x} y={360 - b.h} width={b.w} height={b.h} fill="url(#cityWin)" />
              <rect x={b.x} y={360 - b.h} width={b.w} height="4" fill="#7d97b2" />
            </g>
          ))}
        </g>

        {/* street haze */}
        <rect x="0" y="336" width="1200" height="24" fill="#9db3c8" opacity="0.5" />
      </svg>

      <div className="rt-cloud rt-cloud--a" style={{ top: '12%', left: '-170px', width: '150px', height: '30px' }} />
      <div className="rt-cloud rt-cloud--b" style={{ top: '25%', left: '-150px', width: '104px', height: '24px', opacity: 0.6 }} />
    </>
  );
}
