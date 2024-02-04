import styles from './MainNavigation.module.css';
import { ReactComponent as Logo } from '../images/logo_black_lines.svg';

const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>Home</li>
        <li className={styles.listItem}>About</li>
        <li className={styles.listItem}>Projects</li>
        <li className={styles.listItem}>Contact</li>
        <li className={styles.listItem}>
          <Logo className={styles.logo} />
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
