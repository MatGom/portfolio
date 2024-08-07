import styles from './About.module.css';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const About = function () {
  const skillsRef = useRef(null);
  const goalsRef = useRef(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const goalsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            goalsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    if (goalsRef.current) {
      goalsObserver.observe(goalsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
      if (goalsRef.current) {
        goalsObserver.unobserve(goalsRef.current);
      }
    };
  }, []);

  return (
    <section id='about' className={styles.about}>
      <h3 className='section-title'>About</h3>
      <div className={styles.aboutInfo}>
        <p className={styles.aboutInfoText}>
          Hello! I'm Mateusz Gomolka, a self-taught frontend developer. I learned web development through self-study,
          online courses, and bootcamps. I love turning ideas into reality with code. I'm always learning and keeping up
          with the latest web technologies.
        </p>
      </div>

      <h4 className={styles.aboutSubtitle}>Skills</h4>

      <div ref={skillsRef} className={styles.skillsWrapper}>
        <div className={styles.skill}>
          <FontAwesomeIcon icon={faHtml5} className={styles.skillIcon} />
          <p className={styles.skillText}>HTML</p>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faCss3Alt} className={styles.skillIcon} />
          <p className={styles.skillText}>CSS</p>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faJs} className={styles.skillIcon} />
          <p className={styles.skillText}>JavaScript</p>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faReact} className={styles.skillIcon} />
          <p className={styles.skillText}>React</p>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faGitAlt} className={styles.skillIcon} />
          <p className={styles.skillText}>Git</p>
        </div>
      </div>

      <h4 className={styles.aboutSubtitle}>Goals</h4>

      <div ref={goalsRef} className={styles.goalsWrapper}>
        <ul className={styles.goalsList}>
          <li className={styles.goalsListItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.skillIcon} />
            Master current skills
          </li>
          <li className={styles.goalsListItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.skillIcon} />
            Learn React Native
          </li>
          <li className={styles.goalsListItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.skillIcon} />
            Learn Angular
          </li>
          <li className={styles.goalsListItem}>
            <FontAwesomeIcon icon={faCaretRight} className={styles.skillIcon} />
            Learn Node
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
