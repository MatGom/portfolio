import styles from './Footer.module.css';

import { ReactComponent as Logo } from '../images/logo_white_lines.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.description}>
          <FontAwesomeIcon className={styles.copyright} icon={faCopyright} />
          {new Date().getFullYear()} Mateusz Gomolka, front-end web developer. All rights reserved.
        </p>
        <Logo className={styles.logo} />
      </div>
    </footer>
  );
};

export default Footer;
