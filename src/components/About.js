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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor leo. Donec placerat nec quam
          vitae congue. Quisque congue magna lorem, non consequat magna porttitor non. Curabitur faucibus lacinia magna
          id scelerisque. Nam ante ligula, consequat semper aliquet eget, pharetra vel nisi. Donec auctor imperdiet
          commodo. Aenean sollicitudin tortor metus.
        </p>
      </div>
    </section>
  );
});

export default About;
