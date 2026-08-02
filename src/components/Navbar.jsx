function BrandBall() {
  return (
    <svg className="nav-brand__ball" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="15" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="2" />
      <path d="M1 16a15 15 0 0 1 30 0Z" fill="#E24B4A" />
      <rect x="1" y="14" width="30" height="4" fill="#2A2F36" />
      <circle cx="16" cy="16" r="5" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="2" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="container site-nav__inner">
        <a className="nav-brand" href="#top">
          <BrandBall />
          Ramani Arunachalam
        </a>
        <ul className="nav-links">
          <li><a className="nav-link" href="#projects">Team</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
          <li>
            <a
              className="nav-resume"
              href="https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
