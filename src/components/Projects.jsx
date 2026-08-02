export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'FinSight',
      description:
        'A hybrid GraphRAG financial research assistant that ingests SEC 10-K filings and answers questions conversationally — combining vector search over filing text with an RDF/SPARQL knowledge graph over structured XBRL financial data.',
      // Drop a screenshot at public/img/finsight.png and set image below to '/img/finsight.png'.
      // While it's missing, the card renders a styled placeholder instead of a broken image.
      image: null,
      techStack: [
        'React',
        'Vite',
        'TypeScript',
        'Node.js/Express',
        'Python',
        'FastAPI',
        'RavenDB',
        'BGE-M3 embeddings',
        'RDF/SPARQL',
        'Google Gemini',
        'Google Cloud Platform (Cloud Run)',
        'Docker',
        'CI/CD (GitHub Actions)',
      ],
      links: [
        {
          href: 'https://node-service-582986331404.us-central1.run.app',
          label: 'Live Demo',
        },
        // Add a GitHub repo here when available, e.g.:
        // { href: 'https://github.com/ramaniarun2003/finsight', label: 'View Code' },
      ],
    },
    {
      id: '02',
      title: 'Stock Info',
      description: 'Serverless stock tracking app built on AWS DynamoDB and Lambda.',
      image: '/img/stockinfo.png',
      links: [
        { href: 'https://github.com/ramaniarun2003/aws-stockinfo-lambda', label: 'View Project' },
      ],
    },
    {
      id: '03',
      title: "Dijkstra's Shortest Path",
      description: 'Interactive pathfinding visualization with JavaFX.',
      image: '/img/rolecode.png',
      links: [
        { href: 'https://github.com/ramaniarun2003/Dijikstras', label: 'View Project' },
      ],
    },
    {
      id: '04',
      title: 'Pokémon Battle Simulator',
      description: 'Python-based tool to simulate and analyze battle outcomes.',
      image: '/img/pokemon-sim.png',
      links: [
        { href: 'https://github.com/ramaniarun2003/pokemon-battle-sim', label: 'View Project' },
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image project-image-placeholder" aria-hidden="true">
                  <span>{project.title}</span>
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.techStack && project.techStack.length > 0 && (
                  <ul className="tech-tags">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-view"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
