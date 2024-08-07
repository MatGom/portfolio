import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

import Project from './Project/Project';
import { projects } from '../../db/projects';

const Projects = function () {
  const projectsWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsWrapperRef.current) {
      observer.observe(projectsWrapperRef.current);
    }

    return () => {
      if (projectsWrapperRef.current) {
        observer.unobserve(projectsWrapperRef.current);
      }
    };
  }, []);

  return (
    <section id='projects' className={styles.projects}>
      <h3 className='section-title'>Projects</h3>
      <div ref={projectsWrapperRef} className={styles.projectsWrapper}>
        {projects.map(project => (
          <Project
            key={project.id}
            image={project.image}
            imageDescription={project.imageDescription}
            title={project.title}
            description={project.description}
            linkIcon={project.linkIcon}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
