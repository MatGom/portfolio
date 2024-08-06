import styles from './Project.module.css';

const Project = function ({
  image,
  imageDescription,
  title,
  description,
  linkIcon,
  link,
  githubLink,
}) {

  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <img className={styles.projectImage} src={image} alt={imageDescription}></img>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectLinks}>
        <a target='_blank' rel='noopener noreferrer' href={link} className={styles.projectLink}>
          View
        </a>
        <a target='_blank' rel='noopener noreferrer' href={githubLink} className={styles.projectGithubLink}>
          {linkIcon}
        </a>
      </div>
    </div>
  );
};

export default Project;
