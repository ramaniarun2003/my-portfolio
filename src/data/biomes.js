// Route-ribbon content, separated from presentation.
// Each biome owns a connecting trail path (endpoints meet at the seams) for
// desktop (ribbon at x=22) and mobile (centred at x=50).
const RESUME = 'https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing';
const GITHUB = 'https://github.com/ramaniarun2003';

export const biomes = [
  {
    id: 'city',
    scenery: 'city',
    label: 'City · Where it started',
    labelColor: '#35506A',
    trail: 'M22,0 C26,16 18,34 22,50 C26,66 18,84 22,100',
    trailMobile: 'M50,0 C56,16 44,34 50,50 C56,66 44,84 50,100',
    aria: 'City region: where it started',
    card: {
      chapter: 'Chapter 01 · City',
      title: 'Where it started',
      description:
        'Madison, Wisconsin — a CS + EE double major who kept ending up where software meets the machine: schedulers, sockets, signal paths. Correctness under the hood, care on the surface.',
      tags: ['UW–Madison', 'Computer Science', 'Electrical Engineering'],
      links: [
        { href: RESUME, label: 'Résumé' },
        { href: GITHUB, label: 'GitHub' },
      ],
    },
  },
  {
    id: 'jungle',
    scenery: 'jungle',
    label: 'Jungle · The big build',
    labelColor: '#2F5A3C',
    trail: 'M22,0 C18,16 26,34 22,50 C18,66 26,84 22,100',
    trailMobile: 'M50,0 C44,16 56,34 50,50 C44,66 56,84 50,100',
    aria: 'Jungle region: the big build',
    card: {
      chapter: 'Chapter 02 · Jungle',
      featured: true,
      title: 'FinSight',
      description:
        'A hybrid GraphRAG assistant that reads SEC 10-K filings and answers questions conversationally — combining vector search with a knowledge graph over financial data.',
      tags: ['React', 'FastAPI', 'RavenDB', 'GraphRAG'],
      links: [
        { href: 'https://node-service-582986331404.us-central1.run.app', label: 'Live demo', primary: true, external: true },
      ],
    },
  },
  {
    id: 'desert',
    scenery: 'desert',
    label: 'Desert · What I debug',
    labelColor: '#7A4A17',
    trail: 'M22,0 C26,16 18,34 22,50 C26,66 18,84 22,100',
    trailMobile: 'M50,0 C56,16 44,34 50,50 C56,66 44,84 50,100',
    aria: 'Desert region: what I debug',
    card: {
      chapter: 'Chapter 03 · Desert',
      title: 'War stories & side quests',
      description:
        'I once root-caused why a background worker had silently frozen in production — no error, no crash — tracing it to CPU throttling and scale-to-zero on Google Cloud Run.',
      projects: [
        { title: 'Stock Info', description: 'Serverless stock tracking on AWS DynamoDB + Lambda.', href: 'https://github.com/ramaniarun2003/aws-stockinfo-lambda' },
        { title: "Dijkstra's Shortest Path", description: 'Interactive pathfinding visualization in JavaFX.', href: 'https://github.com/ramaniarun2003/Dijikstras' },
        { title: 'Pokémon Battle Simulator', description: 'Simulates battle outcomes in Python.', href: 'https://github.com/ramaniarun2003/pokemon-battle-sim' },
      ],
    },
  },
  {
    id: 'sea',
    scenery: 'sea',
    label: 'Sea · Say hi',
    labelColor: '#0F4F52',
    trail: 'M22,0 C18,16 26,34 22,50 C18,66 26,84 22,100',
    trailMobile: 'M50,0 C44,16 56,34 50,50 C44,66 56,84 50,100',
    aria: 'Sea region: say hi',
    card: {
      chapter: 'Chapter 04 · Sea',
      title: 'Say hi',
      description:
        "The route runs off into the water here. Interested in collaborating, or hiring? Send a message and let's talk.",
      links: [
        { href: 'mailto:ramaniarun2003@gmail.com', label: 'Email me', primary: true },
      ],
    },
  },
];
