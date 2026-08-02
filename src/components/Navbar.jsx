import { Fragment, useState } from 'react';
import BrandBall from './icons/BrandBall';
import MiniBall from './icons/MiniBall';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { RESUME_URL } from '../data/site';

const LINKS = [
  { id: 'projects', label: 'Route' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

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
              href={RESUME_URL}
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
