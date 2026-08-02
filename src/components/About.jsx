export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title">About</h2>
        <p className="about-text">
          I’m currently studying Electrical Engineering & Computer Science at UW–Madison.
          I specialize in building user-centric applications that blend technical excellence with elegant design.
        </p>
        <div className="about-icons">
          {['java', 'python', 'html5', 'css3', 'aws', 'github'].map(tech => (
            <img
              key={tech}
              src={`img/${tech}.png`}
              alt={tech}
              className="about-icon"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
