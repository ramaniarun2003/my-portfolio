// About "toolkit" — the real resume stack, rendered from official brand SVGs
// in /public/img/tech (sourced from the tech-stack-icons set; FastAPI from
// devicon, which the set doesn't include).
export const tools = [
  { key: 'python', label: 'Python', img: '/img/tech/python.svg' },
  { key: 'java', label: 'Java', img: '/img/tech/java.svg' },
  { key: 'react', label: 'React / JavaScript', img: '/img/tech/react.svg' },
  { key: 'typescript', label: 'TypeScript', img: '/img/tech/typescript.svg' },
  { key: 'fastapi', label: 'FastAPI', img: '/img/tech/fastapi.svg' },
  { key: 'nodejs', label: 'Node.js', img: '/img/tech/nodejs.svg' },
  { key: 'googlecloud', label: 'Google Cloud', img: '/img/tech/googlecloud.svg' },
  { key: 'aws', label: 'AWS', img: '/img/tech/aws.svg' },
  { key: 'docker', label: 'Docker', img: '/img/tech/docker.svg' },
  { key: 'github', label: 'Git / GitHub', img: '/img/tech/github.svg' },
];

// AI / Data standouts that lack clean brand logos — surfaced as text pills.
export const differentiators = ['RAG', 'GraphRAG', 'Vector Search'];
