import { Fragment, useState } from 'react';
import BrandBall from './icons/BrandBall';
import { useScrollSpy } from '../hooks/useScrollSpy';

const LINKS = [
  { id: 'projects', label: 'Route' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Tiny poké-ball glyph used as a route "bullet" between links.
function MiniBall() {
  return (
    <svg className="nav-sep__ball" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="7" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="1.4" />
      <path d="M1 8a7 7 0 0 1 14 0Z" fill="#E24B4A" />
      <rect x="1" y="7" width="14" height="2" fill="#2A2F36" />
      <circle cx="8" cy="8" r="2.4" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="1.2" />
    </svg>
  );
}

export default function Navbar() {
  const active = useScrollSpy(LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="container site-nav__inner">
        <a className="nav-brand" href="#top" onClick={close}>
          <BrandBall />
          Ramani Arunachalam
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <ul id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`}>
          {LINKS.map((l, i) => (
            <Fragment key={l.id}>
              {i > 0 && <li className="nav-sep" aria-hidden="true"><MiniBall /></li>}
              <li>
                <a
                  className={`nav-link${active === l.id ? ' is-active' : ''}`}
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            </Fragment>
          ))}
          <li className="nav-cta">
            <a
              className="nav-resume"
              href="https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
