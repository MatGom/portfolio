import styles from './Projects.module.css';

import Project from './Project';
import { projects } from '../db/projects';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsWrapper}>
        <h2 className={styles.title}>Projects</h2>
        {projects.map(project => (
          <Project
            key={project.id}
            image={project.image}
            imageDescription={project.imageDescription}
            title={project.title}
            description={project.description}
            linkIcon={project.linkIcon}
            arrowIcon={project.arrowIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
