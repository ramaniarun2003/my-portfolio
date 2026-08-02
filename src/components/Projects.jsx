import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section team">
      <div className="container">
        <p className="section__eyebrow">Gotta build 'em all</p>
        <h2 className="section__title">My project team</h2>
        <p className="section__lead">
          Each project is a teammate I've caught along the way. Open a poké-ball to meet one.
        </p>
        <div className="team__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
