import styles from './Projects.module.css';

import Project from './Project/Project';
import { projects } from '../../db/projects';

const Projects = function () {
  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.projectsWrapper}>
        <h3 className='section-title'>Projects</h3>
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
};

export default Projects;
