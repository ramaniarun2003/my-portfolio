import { useState, useRef, useCallback } from 'react';
import PokeballIcon from './icons/PokeballIcon';
import { useInert } from '../hooks/useInert';
import { useHashOpen } from '../hooks/useHashOpen';

export default function ProjectCard({ project }) {
  const cardId = `card-${project.id}`;
  const [open, setOpen] = useState(false);
  const revealRef = useRef(null);

  // Keep the collapsed card out of the tab order and off screen readers.
  useInert(revealRef, !open);

  // Deep link: open this project when the URL hash matches (e.g. #card-finsight).
  const openCard = useCallback(() => setOpen(true), []);
  useHashOpen(cardId, openCard);

  const label = open ? `Close ${project.title} details` : `Open ${project.title} details`;

  return (
    <article className={`team-member${project.featured ? ' is-featured' : ''}${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="pokeball"
        aria-expanded={open}
        aria-controls={cardId}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <PokeballIcon />
      </button>

      <h3 className="member-name">{project.title}</h3>
      {project.featured && <span className="tag-featured">Featured</span>}
      <span className="member-hint" aria-hidden="true">{open ? '' : 'Tap to open'}</span>

      <div className="member-reveal" id={cardId} ref={revealRef} role="region" aria-label={project.title}>
        <div className="member-reveal__inner">
          <p className="member-desc">{project.description}</p>
          <ul className="pills">
            {project.tech.map((t) => (
              <li key={t.label} className={`pill pill--${t.tone}`}>{t.label}</li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className="links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className={`link-btn link-btn--${link.kind}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
