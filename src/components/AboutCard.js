import styles from './AboutCard.module.css';

const AboutCard = ({ image, imageDescription, title, infos }) => {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.image}>
        <img src={image} alt={imageDescription} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        {infos.map(info => (
          <p key={info.id} className={styles.info}>
            {info.icon}
            {info.info}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
