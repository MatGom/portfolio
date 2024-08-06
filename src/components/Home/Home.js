import { forwardRef } from 'react';

import styles from './Home.module.css';

import headerImage from '../../images/header.svg';

const Home = forwardRef((props, ref) => {
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.subtitles}>
            <h2 className={styles.firstSubtitle}>Front-end</h2>
            <h3 className={styles.secondSubtitle}>Web Developer</h3>
          </div>
          <div className={styles.image}>
            <img src={headerImage} alt='Coding work station' />
          </div>
          <div className={styles.title}>
            <h1>Mateusz Gomolka</h1>
          </div>
          <div className={styles.titleDecoration}>
            <h1>Mateusz Gomolka</h1>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Home;
