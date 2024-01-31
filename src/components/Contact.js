import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  return (
    <section className={styles.contact}>
      <form className={styles.form}>
        <h2 className={styles.title}>Contact me</h2>
        <div className={styles.wrapper}>
          <input placeholder='name and surname' initialValue={formData.name} />
          <input placeholder='contact number' initialValue={formData.number} />
          <input placeholder='e-mail' initialValue={formData.email} />
          <textarea placeholder='write your message' initialValue={formData.message} />
          <button>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
