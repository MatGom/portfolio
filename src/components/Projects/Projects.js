import styles from './Projects.module.css';

import { useEffect, useRef } from 'react';

import Slider from './Slider/Slider';

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
        <Slider />
      </div>
    </section>
  );
};

export default Projects;
