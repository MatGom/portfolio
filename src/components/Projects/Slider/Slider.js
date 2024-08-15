import { useState } from 'react';
import styles from './Slider.module.css';
import Project from './Project/Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { projects } from '../../../db/projects';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const getSlidePosition = index => {
    if (index === activeIndex) return styles.activeSlide;
    if (index === (activeIndex + 1) % projects.length) return styles.rightSlide;
    if (index === (activeIndex + projects.length - 1) % projects.length) return styles.leftSlide;
    return styles.hiddenSlide;
  };

  return (
    <div className={styles.slider}>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${styles.slide} ${getSlidePosition(index)}`}
            onClick={() => setActiveIndex(index)}>
            <Project
              image={project.image}
              imageDescription={project.imageDescription}
              title={project.title}
              description={project.description}
              linkIcon={project.linkIcon}
              link={project.link}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>

      <div className={styles.bars}>
        {projects.map((_, index) => (
          <label
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? styles.active : ''}></label>
        ))}
      </div>

      <FontAwesomeIcon className={styles.arrowRight} icon={faArrowRight} onClick={handleNext} />
      <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} onClick={handlePrev} />
    </div>
  );
};

export default Slider;
