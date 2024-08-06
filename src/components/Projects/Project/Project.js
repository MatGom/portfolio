import { useState } from 'react';
import styles from './Project.module.css';

const Project = ({
  image,
  imageDescription,
  title,
  description,
  linkIcon,
  arrowIcon,
  backDescription,
  link,
  githubLink,
}) => {
  const [isBack, setIsBack] = useState(false);
  const [displayBack, setDisplayBack] = useState(false);

  const timer = 400;

  const showBackHandler = () => {
    setIsBack(true);
    setTimeout(() => setDisplayBack(true), timer);
  };

  const showFrontHandler = () => {
    setIsBack(false);
    setTimeout(() => setDisplayBack(false), timer);
  };

  return (
    <div className={`${styles.project}`}>
      {!displayBack && (
        <div className={`${styles.projectContent} ${isBack ? styles.projectHidden : ''}`}>
          <div className={styles.projectImage}>
            <img src={image} alt={imageDescription} />
          </div>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.projectButtonsWrapper}>
              <a target='_blank' rel='noopener noreferrer' href={link} className={styles.projectButton}>
                visit website
              </a>
              <a target='_blank' rel='noopener noreferrer' href={githubLink}>
                {linkIcon}
              </a>
            </div>
          </div>
          <div onClick={showBackHandler} className={styles.projectArrow}>
            {arrowIcon}
          </div>
        </div>
      )}
      {displayBack && (
        <div className={`${styles.projectContent} ${styles.projectBack} ${isBack ? '' : styles.projectHidden}`}>
          <div onClick={showFrontHandler} className={`${styles.projectArrow} ${styles.projectArrowBack}`}>
            {arrowIcon}
          </div>
          <div className={`${styles.projectInfo} ${styles.projectInfoBack}`}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{backDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
