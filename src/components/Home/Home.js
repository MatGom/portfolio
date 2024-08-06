import { Link } from 'react-scroll';

import styles from './Home.module.css';

const Home = function () {
  return (
    <header id='home' className={styles.home}>
      <div className={styles.homeTitleWrapper}>
        <h2 className={styles.homeSubtitle}>Front-End</h2>
        <h2 className={styles.homeSubtitle}>Web Developer</h2>
        <div className={styles.titleUnderline}></div>
        <h1 className={styles.homeTitle}>Mateusz Gomolka's portfolio</h1>
        <Link to='about' smooth={true} duration={500}>
          <button className={styles.homeButton}>Read more</button>
        </Link>
      </div>
    </header>
  );
};

export default Home;
