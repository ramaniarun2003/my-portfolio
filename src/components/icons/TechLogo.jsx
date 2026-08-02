// Toolkit logos. Python/Java/AWS/GitHub use the authentic brand logos
// (raster, most accurate); the rest are drawn as recognizable SVG marks in the
// correct brand colors.
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
          <text x="26" y="34" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="21" fill="#fff">TS</text>
        </Svg>
      );
    case 'fastapi':
      return (
        <Svg label={tool.label}>
          <circle cx="24" cy="24" r="22" fill="#05998b" />
          <path d="M25 7 L13 26 h9 l-3 15 14-20 h-9 z" fill="#fff" />
        </Svg>
      );
    case 'nodejs':
      return (
        <Svg label={tool.label}>
          <path d="M24 3 L42 13.5 v21 L24 45 L6 34.5 v-21 Z" fill="#539E43" />
          <text x="24" y="29" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#fff">node</text>
        </Svg>
      );
    case 'googlecloud':
      return (
        <Svg label={tool.label}>
          {/* four-colour Google cloud */}
          <path d="M12 28 h24 a7 7 0 0 1 0 12 H16 a8 8 0 0 1 -4 -12 Z" fill="#34A853" />
          <circle cx="17" cy="27" r="9" fill="#4285F4" />
          <circle cx="24" cy="19" r="10" fill="#EA4335" />
          <circle cx="32" cy="26" r="9" fill="#FBBC05" />
          <circle cx="24" cy="27" r="7.5" fill="#fff" opacity="0.0" />
        </Svg>
      );
    case 'docker':
      return (
        <Svg label={tool.label}>
          <g fill="#2496ED">
            <rect x="12" y="19" width="7" height="7" rx="1" />
            <rect x="20" y="19" width="7" height="7" rx="1" />
            <rect x="28" y="19" width="7" height="7" rx="1" />
            <rect x="20" y="11" width="7" height="7" rx="1" />
            <rect x="28" y="11" width="7" height="7" rx="1" />
            <path d="M5 27 h34 c3 0 6 -2 8 -4 c0 5 -3 12 -11 12 h-1 c-3 4 -8 6 -14 6 C13 41 8 34 5 27 Z" />
          </g>
        </Svg>
      );
    default:
      return null;
  }
}
