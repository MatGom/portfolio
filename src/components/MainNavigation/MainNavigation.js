import { Link } from 'react-scroll';

import styles from './MainNavigation.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

import { useState } from 'react';

const MainNavigation = function () {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  let navClasses;
  let burgerClasses;
  let burgerNavigationClasses;

  if (!menuIsOpen) {
    navClasses = `${styles.navigation} ${styles.navigationClosed}`;
    burgerClasses = `${styles.burger}`;
    burgerNavigationClasses = `${styles.burgerNavigation} ${styles.burgerNavigationClosed}`;
  } else if (menuIsOpen) {
    navClasses = `${styles.navigation}`;
    burgerClasses = `${styles.burger} ${styles.menuOpen}`;
    burgerNavigationClasses = `${styles.burgerNavigation}`;
  }

  const goToSectionHandler = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuIsOpen(!menuIsOpen);
  };

  const toggleMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className={styles.navigationContainer}>
      <nav className={navClasses}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className={`${styles.listItem} ${styles.logoContainer}`}>
            <Logo className={styles.logo} />
          </li>
        </ul>
      </nav>
      <div className={burgerNavigationClasses}>
        {menuIsOpen ? null : (
          <>
            <Logo className={styles.logo} />
            <p>Mateusz Gomolka</p>
            <p>Front-end web developer</p>
          </>
        )}
        <div onClick={toggleMenuHandler} className={burgerClasses}>
          <div className={`${styles.burgerBar} ${styles.burgerBarOne}`}></div>
          <div className={`${styles.burgerBar} ${styles.burgerBarTwo}`}></div>
          <div className={`${styles.burgerBar} ${styles.burgerBarThree}`}></div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
