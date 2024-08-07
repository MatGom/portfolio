import { useEffect } from 'react';

import styles from './NotFound.module.css';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p>404</p>
          <p>Page not found</p>
          <p>Redirecting...</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
