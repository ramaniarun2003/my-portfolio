export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section__eyebrow">Say hi</p>
        <h2 className="section__title">Let's connect</h2>
        <p className="contact__text">
          Interested in collaborating, or hiring? Send a message and let's talk.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="mailto:ramaniarun2003@gmail.com">Email me</a>
          <a className="btn btn--ghost" href="https://github.com/ramaniarun2003" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
