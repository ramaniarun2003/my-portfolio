function HeroBall() {
  // Original poké-ball-style split sphere — my own stylization, not official Pokémon art.
  return (
    <svg className="hero__ball" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <g className="hero__ball-bob">
        <defs>
          <linearGradient id="pbTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0605f" />
            <stop offset="1" stopColor="#E24B4A" />
          </linearGradient>
          <radialGradient id="pbBottom" cx="0.5" cy="0.35" r="0.8">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#efefe8" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#pbBottom)" />
        <path d="M8 100a92 92 0 0 1 184 0Z" fill="url(#pbTop)" />
        <rect x="8" y="92" width="184" height="16" fill="#2A2F36" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#2A2F36" strokeWidth="7" />
        <circle cx="100" cy="100" r="26" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="7" />
        <circle cx="100" cy="100" r="12" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="3" />
        <circle cx="72" cy="60" r="14" fill="#ffffff" opacity="0.45" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <HeroBall />
        <h1 className="hero-title">I catch hard problems and ship real systems.</h1>
        <p className="hero-subtitle">
          CS + EE @ UW–Madison · clean systems, good design, and a solid Pokémon team.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View my work</a>
          <a href="#contact" className="btn btn--ghost">Say hi</a>
        </div>
      </div>
    </section>
  );
}
