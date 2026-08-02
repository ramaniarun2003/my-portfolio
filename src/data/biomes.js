// Biome-trail content, separated from presentation.
// Pill tones: 'blue' default, 'red' standout, 'green' data/infra.
const RESUME = 'https://docs.google.com/document/d/1g7fsLNnx55Yc5uGAxTwSjeNRz7kBwrW4/edit?usp=sharing';
const GITHUB = 'https://github.com/ramaniarun2003';

export const biomes = [
  {
    id: 'city',
    name: 'The City',
    eyebrow: 'Where it started',
    caption: 'Hello',
    side: 'right',
    card: {
      kicker: 'Trainer profile',
      title: 'Ramani Arunachalam',
      description:
        'CS + EE at UW–Madison. I build systems that are correct under the hood and interfaces that feel good to use.',
      links: [
        { href: RESUME, label: 'Résumé', kind: 'primary' },
        { href: GITHUB, label: 'GitHub', kind: 'ghost' },
      ],
    },
  },
  {
    id: 'jungle',
    name: 'The Jungle',
    eyebrow: 'The big build',
    caption: 'FinSight',
    side: 'left',
    featured: true,
    card: {
      kicker: 'Project',
      title: 'FinSight',
      featured: true,
      description:
        'A hybrid GraphRAG assistant that reads SEC 10-K filings and answers questions conversationally — combining vector search with a knowledge graph over financial data.',
      pills: [
        { label: 'React', tone: 'blue' },
        { label: 'FastAPI', tone: 'red' },
        { label: 'RavenDB', tone: 'green' },
        { label: 'GraphRAG', tone: 'green' },
      ],
      links: [
        { href: 'https://node-service-582986331404.us-central1.run.app', label: 'Live Demo', kind: 'primary' },
      ],
    },
  },
  {
    id: 'desert',
    name: 'The Desert',
    eyebrow: 'What I debug',
    caption: 'Side quests',
    side: 'right',
    card: {
      kicker: 'What I debug',
      title: 'War stories & side quests',
      description:
        'I once root-caused why a background worker had silently frozen in production — no error, no crash — tracing it to CPU throttling and scale-to-zero on Google Cloud Run.',
      projects: [
        {
          title: 'Stock Info',
          description: 'Serverless stock tracking on AWS DynamoDB + Lambda.',
          href: 'https://github.com/ramaniarun2003/aws-stockinfo-lambda',
          pills: [
            { label: 'AWS', tone: 'green' },
            { label: 'Lambda', tone: 'green' },
          ],
        },
        {
          title: "Dijkstra's Shortest Path",
          description: 'Interactive pathfinding visualization in JavaFX.',
          href: 'https://github.com/ramaniarun2003/Dijikstras',
          pills: [
            { label: 'Java', tone: 'blue' },
            { label: 'Algorithms', tone: 'red' },
          ],
        },
        {
          title: 'Pokémon Battle Simulator',
          description: 'Simulates and analyzes battle outcomes in Python.',
          href: 'https://github.com/ramaniarun2003/pokemon-battle-sim',
          pills: [{ label: 'Python', tone: 'blue' }],
        },
      ],
    },
  },
  {
    id: 'sea',
    name: 'The Sea',
    eyebrow: 'Say hi',
    caption: 'Contact',
    side: 'left',
    card: {
      kicker: 'The trail continues',
      title: 'Say hi',
      description:
        "Interested in collaborating, or hiring? The route runs off into the water here — send me a message and let's talk.",
      links: [
        { href: 'mailto:ramaniarun2003@gmail.com', label: 'Email me', kind: 'primary' },
      ],
    },
  },
];
