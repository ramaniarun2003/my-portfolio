const tagStyle = {
  padding: '6px 12px', borderRadius: 999, background: '#EDF3F8',
  border: '1px solid rgba(12,39,64,.08)', fontSize: '12.5px', fontWeight: 600, color: '#35506A',
};

function CardLink({ link }) {
  const ext = link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  if (link.primary) {
    return (
      <a href={link.href} {...ext} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 18px', borderRadius: 999, background: '#C23B39', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
        {link.label} <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <a href={link.href} {...ext} style={{ fontSize: 14, fontWeight: 600, color: '#B03A34', textDecoration: 'none' }}>
      {link.label} ↗
    </a>
  );
}

// The clean, recruiter-readable chapter card that folds out of an opened ball.
// When closed it is `inert` so its links stay out of the tab order even where
// it is only visually collapsed (mobile).
export default function BiomeCard({ id, card, open }) {
  return (
    <div
      id={`card-${id}`}
      role="region"
      aria-label={card.title}
      className="rt-card"
      {...(open ? {} : { inert: true })}
    >
      <div className="rt-card__panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: '#B03A34' }}>{card.chapter}</div>
          {card.featured && (
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2F5A3C', background: '#E1F0DE', border: '1px solid rgba(47,90,60,.18)', padding: '3px 9px', borderRadius: 999 }}>Featured</div>
          )}
        </div>

        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, fontSize: 29, lineHeight: 1.15, color: '#0C2740', margin: '10px 0 0', letterSpacing: '-0.01em' }}>{card.title}</h2>
        <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#5A6B7A', margin: '12px 0 0', textWrap: 'pretty' }}>{card.description}</p>

        {card.tags && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
            {card.tags.map((t) => <span key={t} style={tagStyle}>{t}</span>)}
          </div>
        )}

        {card.projects && (
          <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
            {card.projects.map((proj, i) => (
              <div key={proj.title} style={{ paddingTop: i === 0 ? 0 : 12, borderTop: i === 0 ? 'none' : '1px solid rgba(12,39,64,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 16, fontWeight: 600, color: '#0C2740' }}>{proj.title}</h3>
                  <a href={proj.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: '#B03A34', textDecoration: 'none', whiteSpace: 'nowrap' }}>GitHub ↗</a>
                </div>
                <p style={{ fontSize: 13.5, color: '#5A6B7A', marginTop: 3 }}>{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {card.links && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(12,39,64,.08)' }}>
            {card.links.map((link) => <CardLink key={link.href} link={link} />)}
          </div>
        )}
      </div>
    </div>
  );
}
