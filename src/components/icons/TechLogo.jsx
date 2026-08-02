// Brand-style logos for the About toolkit. PNG-backed tools render an <img>;
// the rest are original simplified SVG marks in the recognizable brand colors.
function Svg({ label, children }) {
  return (
    <svg className="toolkit__icon" viewBox="0 0 48 48" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export default function TechLogo({ tool }) {
  if (tool.img) {
    return <img className="toolkit__icon" src={tool.img} alt={tool.label} title={tool.label} />;
  }

  switch (tool.key) {
    case 'react':
      return (
        <Svg label={tool.label}>
          <g fill="none" stroke="#61DAFB" strokeWidth="2">
            <ellipse cx="24" cy="24" rx="21" ry="8" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(120 24 24)" />
          </g>
          <circle cx="24" cy="24" r="4.2" fill="#61DAFB" />
        </Svg>
      );
    case 'typescript':
      return (
        <Svg label={tool.label}>
          <rect width="48" height="48" rx="7" fill="#3178C6" />
          <text x="25" y="33" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#fff">TS</text>
        </Svg>
      );
    case 'fastapi':
      return (
        <Svg label={tool.label}>
          <circle cx="24" cy="24" r="22" fill="#009688" />
          <path d="M26 8 L13 27 h8 l-3 13 14-19 h-8 z" fill="#fff" />
        </Svg>
      );
    case 'nodejs':
      return (
        <Svg label={tool.label}>
          <path d="M24 3 L42 13 v22 L24 45 L6 35 V13 Z" fill="#5FA04E" />
          <text x="24" y="29" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#fff">node</text>
        </Svg>
      );
    case 'googlecloud':
      return (
        <Svg label={tool.label}>
          <defs>
            <clipPath id="gcp-cloud">
              <path d="M36 33 H14 a8 8 0 0 1 -1 -16 a11 11 0 0 1 21 3 a6.5 6.5 0 0 1 2 13 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#gcp-cloud)">
            <rect x="0" y="0" width="12" height="48" fill="#4285F4" />
            <rect x="12" y="0" width="12" height="48" fill="#EA4335" />
            <rect x="24" y="0" width="12" height="48" fill="#FBBC05" />
            <rect x="36" y="0" width="12" height="48" fill="#34A853" />
          </g>
        </Svg>
      );
    case 'docker':
      return (
        <Svg label={tool.label}>
          <g fill="#2496ED">
            <rect x="11" y="19" width="6" height="6" rx="1" />
            <rect x="18" y="19" width="6" height="6" rx="1" />
            <rect x="25" y="19" width="6" height="6" rx="1" />
            <rect x="18" y="12" width="6" height="6" rx="1" />
            <rect x="25" y="12" width="6" height="6" rx="1" />
            <path d="M5 26 h31 a8 8 0 0 1 8 -3 s-1.4 6 -6.5 6 c-2 4.2 -7 6.4 -13.5 6.4 C13 41.4 6.5 35 5 26 Z" />
          </g>
        </Svg>
      );
    default:
      return null;
  }
}
