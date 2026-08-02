export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-heading" href="#">
          Ramani Arunachalam
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link link-muted" href="#projects">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-muted" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-muted" href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-2">
              <a
                className="btn btn-accent"
                href="https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
