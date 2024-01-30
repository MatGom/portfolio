import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        <div className={styles.projectImage}>
          <img src='' alt='' />
        </div>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>Title</h3>
          <p className={styles.projectDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor leo. Donec placerat nec quam
            vitae congue. Quisque congue magna lorem, non consequat magna porttitor non. Curabitur faucibus lacinia
            magna id scelerisque. Nam ante ligula, consequat semper aliquet eget, pharetra vel nisi. Donec auctor
            imperdiet commodo. Aenean sollicitudin tortor metus.
          </p>
          <div className={styles.projectButtonWrappers}>
            <button className={styles.projectButton}>visit website</button>
            <i>Icon</i>
          </div>
        </div>
        <div className={styles.projectArrow}></div>
      </div>
    </section>
  );
};

export default Projects;
