import { forwardRef, useEffect, useState } from 'react';

import styles from './Contact.module.css';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const [formValidation, setFormValidation] = useState({
    name: { error: '', class: '' },
    number: { error: '', class: '' },
    email: { error: '', class: '' },
    message: { error: '', class: '' },
  });

  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (messageSubmitted) {
      const timer = setTimeout(() => setMessageSubmitted(false), 1500);
      return () => clearTimeout(timer);
    }

    if (formError) {
      const timer = setTimeout(() => setFormError(''), 1500);
      return () => clearTimeout(timer);
    }
  }, [messageSubmitted, formError]);

  const validateForm = () => {
    const newValidation = { ...formValidation };
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) {
        newValidation[key] = { error: `Enter ${key}`, class: styles.invalid };
        isValid = false;
      } else {
        newValidation[key] = { error: '', class: '' };
      }
    });

    setFormValidation(newValidation);
    return isValid;
  };

  const handleChangeValue = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (validateForm()) {
      const endpoint = '';
      const formData = new FormData(event.currentTarget);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          setFormError('');
          setMessageSubmitted(true);
          setFormData({ name: '', number: '', email: '', message: '' });
          setFormValidation({
            name: { error: '', class: '' },
            number: { error: '', class: '' },
            email: { error: '', class: '' },
            message: { error: '', class: '' },
          });
        } else {
          setFormError('Failed to send! Try again later.');
        }
      } catch (error) {
        setFormError('Failed to send! Try again later.');
      }
    }
  };

  return (
    <section ref={ref} className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit} method='POST'>
        <h2 className={styles.title}>Contact me</h2>
        <div className={styles.wrapper}>
          {formError && <div className={styles.error}>{formError}</div>}
          <input type='hidden' name='_gotcha' />
          <label htmlFor='name'>{formValidation.name.error}</label>
          <input
            id='name'
            type='text'
            className={formValidation.name.class}
            name='name'
            placeholder='name and surname'
            value={formData.name}
            onChange={handleChangeValue}
          />
          <label htmlFor='number'>{formValidation.number.error}</label>
          <input
            id='number'
            type='number'
            className={formValidation.number.class}
            name='number'
            placeholder='contact number'
            value={formData.number}
            onChange={handleChangeValue}
          />
          <label htmlFor='email'>{formValidation.email.error}</label>
          <input
            id='email'
            type='email'
            className={formValidation.email.class}
            name='email'
            placeholder='e-mail'
            value={formData.email}
            onChange={handleChangeValue}
          />
          <label htmlFor='message'>{formValidation.message.error}</label>
          <textarea
            id='message'
            className={formValidation.message.class}
            name='message'
            placeholder='write your message'
            value={formData.message}
            onChange={handleChangeValue}
          />
          {!messageSubmitted ? <button type='submit'>Send</button> : <p className={styles.success}>Message sent!</p>}
        </div>
      </form>
    </section>
  );
});

export default Contact;
