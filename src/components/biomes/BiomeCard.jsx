function Pills({ items }) {
  return (
    <ul className="pills">
      {items.map((p) => (
        <li key={p.label} className={`pill pill--${p.tone}`}>{p.label}</li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, className, children }) {
  const isMail = href.startsWith('mailto:');
  return (
    <a
      className={className}
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}

// The clean, recruiter-readable project card revealed by an opened ball.
export default function BiomeCard({ card }) {
  return (
    <div className={`biome-card__panel${card.featured ? ' is-featured' : ''}`}>
      <p className="biome-card__kicker">
        {card.featured && <span className="tag-featured">Featured</span>}
        {card.kicker}
      </p>
      <h4 className="biome-card__title">{card.title}</h4>
      <p className="biome-card__desc">{card.description}</p>

      {card.pills && <Pills items={card.pills} />}

      {card.projects && (
        <ul className="subquests">
          {card.projects.map((proj) => (
            <li key={proj.title} className="subquest">
              <div className="subquest__head">
                <h5>{proj.title}</h5>
                <ExternalLink href={proj.href}>GitHub ↗</ExternalLink>
              </div>
              <p className="subquest__desc">{proj.description}</p>
              {proj.pills && <Pills items={proj.pills} />}
            </li>
          ))}
        </ul>
      )}

      {card.links && (
        <div className="links">
          {card.links.map((link) => (
            <ExternalLink key={link.href} href={link.href} className={`link-btn link-btn--${link.kind}`}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      )}
    </div>
  );
}
