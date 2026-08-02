// Original layered skyline: hazy far row, mid row, detailed front row with
// window grids + rooftop details (water tanks, antennas, setbacks), soft sun
// atmosphere, and drifting clouds (HTML, animated only while in view).
const far = [
  [20, 150, 60], [92, 116, 44], [150, 168, 70], [232, 96, 40], [292, 150, 62],
  [368, 120, 52], [520, 140, 58], [592, 100, 44], [700, 156, 66], [788, 124, 50],
  [900, 150, 60], [980, 110, 46], [1064, 160, 70], [1146, 128, 54],
];
const mid = [
  [40, 176, 96], [210, 150, 84], [372, 190, 90], [560, 158, 92], [742, 182, 88], [920, 150, 96], [1074, 176, 100],
];
const front = [
  { x: 6, w: 110, h: 210, roof: 'tank' }, { x: 132, w: 82, h: 262, roof: 'antenna' },
  { x: 232, w: 104, h: 168, roof: 'setback' }, { x: 356, w: 76, h: 274, roof: 'antenna' },
  { x: 452, w: 118, h: 200, roof: 'tank' }, { x: 596, w: 70, h: 250, roof: 'flat' },
  { x: 690, w: 108, h: 176, roof: 'setback' }, { x: 820, w: 88, h: 258, roof: 'tank' },
  { x: 930, w: 120, h: 208, roof: 'antenna' }, { x: 1074, w: 100, h: 240, roof: 'flat' },
];
const BASE = 380;

function Roof({ b }) {
  const top = BASE - b.h;
  if (b.roof === 'tank') return <rect x={b.x + b.w * 0.3} y={top - 16} width={b.w * 0.32} height="16" rx="3" fill="#7d97b2" />;
  if (b.roof === 'antenna') return (
    <g>
      <line x1={b.x + b.w / 2} y1={top} x2={b.x + b.w / 2} y2={top - 28} stroke="#7d97b2" strokeWidth="3" />
      <circle cx={b.x + b.w / 2} cy={top - 30} r="3" fill="#d16d76" />
    </g>
  );
  if (b.roof === 'setback') return <rect x={b.x + b.w * 0.2} y={top - 20} width={b.w * 0.6} height="20" fill="#8ea8c1" />;
  return null;
}

export default function CityScenery() {
  return (
    <>
      <svg className="biome__scenery-svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMax slice">
        <defs>
          <pattern id="cityWinBack" width="18" height="24" patternUnits="userSpaceOnUse">
            <rect x="5" y="6" width="7" height="10" fill="#ffffff" opacity="0.24" />
          </pattern>
          <pattern id="cityWin" width="16" height="21" patternUnits="userSpaceOnUse">
            <rect x="3" y="4" width="6.5" height="10" fill="#ffffff" opacity="0.5" />
            <rect x="10" y="4" width="1.5" height="10" fill="#6f89a3" opacity="0.25" />
          </pattern>
          <radialGradient id="citySun" cx="0.82" cy="0.12" r="0.5">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="380" fill="url(#citySun)" />

        {/* far hazy skyline */}
        <g fill="#b6c6d7" opacity="0.5">
          {far.map(([x, h, w], i) => <rect key={i} x={x} y={BASE - h} width={w} height={h} />)}
        </g>

        {/* mid row with faint windows */}
        <g>
          {mid.map(([x, h, w], i) => (
            <g key={i}>
              <rect x={x} y={BASE - h} width={w} height={h} fill="#a4b9cd" />
              <rect x={x} y={BASE - h} width={w} height={h} fill="url(#cityWinBack)" />
            </g>
          ))}
        </g>

        {/* detailed front row */}
        <g>
          {front.map((b) => (
            <g key={b.x}>
              <Roof b={b} />
              <rect x={b.x} y={BASE - b.h} width={b.w} height={b.h} fill="#8ea8c1" />
              <rect x={b.x} y={BASE - b.h} width={b.w} height={b.h} fill="url(#cityWin)" />
              <rect x={b.x} y={BASE - b.h} width={b.w} height="4" fill="#7d97b2" />
            </g>
          ))}
        </g>
      </svg>

      <div className="rt-cloud rt-cloud--a" style={{ top: '12%', left: '-170px', width: '150px', height: '30px' }} />
      <div className="rt-cloud rt-cloud--b" style={{ top: '22%', left: '-150px', width: '104px', height: '24px', opacity: 0.6 }} />
    </>
  );
}
