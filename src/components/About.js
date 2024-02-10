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
        Hello there! My name is Mateusz Gomolka, a passionate self-taught frontend developer. My journey into the world of web development has been fueled by a mix of self-directed learning, online courses, and bootcamps, each step deepening my love for coding. There's a unique joy I find in bringing ideas to life through code, and it's this passion that drives me every day. Continuously exploring and expanding my skills, I'm committed to staying at the cutting edge of web technologies.
        </p>
      </div>
    </section>
  );
});

export default About;
