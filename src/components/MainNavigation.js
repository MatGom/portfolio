import styles from './MainNavigation.module.css';
import { ReactComponent as Logo } from '../images/logo_black_lines.svg';

const MainNavigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>About</li>
          <li className={styles.listItem}>Projects</li>
          <li className={styles.listItem}>Contact</li>
          <li className={`${styles.listItem} ${styles.logoContainer}`}>
            <Logo className={styles.logo} />
          </li>
        </ul>
      </nav>
      <div className={styles.burger}>
        <div className={`${styles.burgerBar} ${styles.burgerBarOne}`}></div>
        <div className={`${styles.burgerBar} ${styles.burgerBarTwo}`}></div>
        <div className={`${styles.burgerBar} ${styles.burgerBarThree}`}></div>
      </div>
    </>
  );
};

export default MainNavigation;
