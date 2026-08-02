// Project content, separated from presentation.
// Tech-pill tones: 'blue' default, 'red' standout, 'green' data/infra.
export const projects = [
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
