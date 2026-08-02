import { skillBadges } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section__eyebrow">Trainer profile</p>
        <h2 className="section__title">About</h2>
        <p className="about__text">
          I'm studying Computer Science &amp; Electrical Engineering at UW–Madison. I like building
          user-centric applications that are <strong>correct under the hood</strong> and feel good to use.
        </p>
        <p className="about__text">
          I care about the unglamorous parts too: I once <strong>root-caused why a background worker had
          silently frozen in production</strong> — no error, no crash — tracing it to CPU throttling and
          scale-to-zero on Google Cloud Run.
        </p>
        <div className="about-badges" aria-label="Tools I work with">
          {skillBadges.map((tech) => (
            <img key={tech} src={`img/${tech}.png`} alt={tech} className="about-badge" />
          ))}
        </div>
      </div>
    </section>
  );
}
