import { useState, useRef, useEffect } from 'react';

// Tech-pill tones: 'blue' default, 'red' standout, 'green' data/infra.
const projects = [
  {
    id: 'finsight',
    title: 'FinSight',
    featured: true,
    description:
      'A hybrid GraphRAG assistant that reads SEC 10-K filings and answers questions conversationally — combining vector search with a knowledge graph over financial data.',
    tech: [
      { label: 'React', tone: 'blue' },
      { label: 'TypeScript', tone: 'blue' },
      { label: 'FastAPI', tone: 'red' },
      { label: 'Python', tone: 'blue' },
      { label: 'RavenDB', tone: 'green' },
      { label: 'RDF/SPARQL', tone: 'green' },
      { label: 'Google Gemini', tone: 'red' },
      { label: 'GCP Cloud Run', tone: 'green' },
      { label: 'Docker', tone: 'green' },
    ],
    links: [
      { href: 'https://node-service-582986331404.us-central1.run.app', label: 'Live Demo', kind: 'primary' },
    ],
  },
  {
    id: 'stockinfo',
    title: 'Stock Info',
    description: 'Serverless stock tracking app built on AWS DynamoDB and Lambda.',
    tech: [
      { label: 'AWS Lambda', tone: 'green' },
      { label: 'DynamoDB', tone: 'green' },
      { label: 'Serverless', tone: 'blue' },
    ],
    links: [
      { href: 'https://github.com/ramaniarun2003/aws-stockinfo-lambda', label: 'GitHub', kind: 'ghost' },
    ],
  },
  {
    id: 'dijkstra',
    title: "Dijkstra's Shortest Path",
    description: 'Interactive shortest-path pathfinding visualization, built in JavaFX.',
    tech: [
      { label: 'Java', tone: 'blue' },
      { label: 'JavaFX', tone: 'blue' },
      { label: 'Algorithms', tone: 'red' },
    ],
    links: [
      { href: 'https://github.com/ramaniarun2003/Dijikstras', label: 'GitHub', kind: 'ghost' },
    ],
  },
  {
    id: 'pokemon',
    title: 'Pokémon Battle Simulator',
    description: 'Python tool that simulates and analyzes battle outcomes.',
    tech: [
      { label: 'Python', tone: 'blue' },
      { label: 'Simulation', tone: 'blue' },
      { label: 'OOP', tone: 'blue' },
    ],
    links: [
      { href: 'https://github.com/ramaniarun2003/pokemon-battle-sim', label: 'GitHub', kind: 'ghost' },
    ],
  },
];

function Pokeball() {
  // Decorative split sphere; the surrounding <button> carries the accessible name.
  return (
    <span className="pokeball__vis" aria-hidden="true">
      <span className="pokeball__half pokeball__half--top" />
      <span className="pokeball__half pokeball__half--bottom" />
      <span className="pokeball__band" />
      <span className="pokeball__btn" />
      <span className="pokeball__flash" />
    </span>
  );
}

function TeamMember({ project }) {
  const cardId = `card-${project.id}`;
  const [open, setOpen] = useState(false);
  const revealRef = useRef(null);

  // Keep the collapsed card out of the tab order and off screen readers.
  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    if (open) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
  }, [open]);

  // Deep link: opening the matching project via URL hash (e.g. #card-finsight).
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === `#${cardId}`) setOpen(true);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [cardId]);
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
        <Pokeball />
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

export default function Projects() {
  return (
    <section id="projects" className="section team">
      <div className="container">
        <p className="section__eyebrow">Gotta build 'em all</p>
        <h2 className="section__title">My project team</h2>
        <p className="section__lead">
          Each project is a teammate I've caught along the way. Open a poké-ball to meet one.
        </p>
        <div className="team__grid">
          {projects.map((project) => (
            <TeamMember key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
