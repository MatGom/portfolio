import { forwardRef, useState } from 'react';

import styles from './Contact.module.css';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  return (
    <section ref={ref} className={styles.contact}>
      <form className={styles.form}>
        <h2 className={styles.title}>Contact me</h2>
        <div className={styles.wrapper}>
          <input placeholder='name and surname' />
          <input placeholder='contact number' />
          <input placeholder='e-mail' />
          <textarea placeholder='write your message' />
          <button>Send</button>
        </div>
      </form>
    </section>
  );
});

export default Contact;
