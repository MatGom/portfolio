import { forwardRef } from 'react';

import styles from './About.module.css';

import AboutCard from './AboutCard';
import { cards } from '../db/cards';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.about}>
      <div className={styles.wrapper}>
        {cards.map(card => (
          <AboutCard
            key={card.id}
            image={card.image}
            imageDescription={card.imageDescription}
            title={card.title}
            infos={card.infos}
          />
        ))}
      </div>
      <div className={styles.aboutMe}>
        <p className={styles.aboutMeText}>
          Hello! I'm Mateusz Gomolka, a self-taught frontend developer. I learned web development through self-study,
          online courses, and bootcamps. I love turning ideas into reality with code, and this passion drives me every
          day. I'm always learning and keeping up with the latest web technologies.
        </p>
      </div>
    </section>
  );
});

export default About;
