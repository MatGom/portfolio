import styles from './Project.module.css';

const Project = ({ image, imageDescription, title, description, linkIcon, arrowIcon }) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <img src={image} alt={imageDescription} />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectButtonsWrapper}>
          <button className={styles.projectButton}>visit website</button>
          {linkIcon}
        </div>
      </div>
      <div className={styles.projectArrow}>{arrowIcon}</div>
    </div>
  );
};

export default Project;
