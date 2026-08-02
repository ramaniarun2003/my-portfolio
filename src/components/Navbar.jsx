import BrandBall from './icons/BrandBall';

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="container site-nav__inner">
        <a className="nav-brand" href="#top">
          <BrandBall />
          Ramani Arunachalam
        </a>
        <ul className="nav-links">
          <li><a className="nav-link" href="#projects">Team</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
          <li>
            <a
              className="nav-resume"
              href="https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
