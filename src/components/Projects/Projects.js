import styles from './Projects.module.css';

import Project from './Project/Project';
import { projects } from '../../db/projects';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section id='projects' ref={ref} className={styles.projects}>
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
            backDescription={project.backDescription}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
});

export default Projects;
