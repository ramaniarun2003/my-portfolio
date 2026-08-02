import HeroBall from './icons/HeroBall';

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
