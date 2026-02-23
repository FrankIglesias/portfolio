'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from './Footer';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  function clearForm() {
    setName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://go-mailer.franciscojiglesias.vercel.app/api/email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            last_name: lastName,
            email,
            subject,
            message,
          }),
        }
      );
      if (res.ok) {
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
      }
    } catch {
      // silently fail
    }
  }

  return (
    <div className={`row middle full-height space-between`}>
      <div className={`column ${styles.formContainer}`}>
        <h1 className="title">Let&apos;s chat</h1>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            className={styles.contactInput}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className={styles.contactInput}
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          <input
            className={`${styles.contactInput} ${styles.fullSpan}`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className={`${styles.contactInput} ${styles.fullSpan}`}
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <textarea
            className={`${styles.contactInput} ${styles.fullSpan}`}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
          />
          <button
            className={`${styles.contactButton} bebas`}
            type="button"
            onClick={clearForm}
          >
            Clear
          </button>
          <button className={`${styles.contactButton} bebas`} type="submit">
            Send!
          </button>
        </form>
        <h3 className="text-m">Contact info</h3>
        <span className="slash-decoration">Email: ifrancisco.iglesias@gmail.com</span>
        <span className="slash-decoration">Phone: +54 911 3357-8314</span>
        <Footer />
      </div>
      <Image
        src="/contact_photo.jpeg"
        alt="Contact"
        className={styles.contactImage}
        width={800}
        height={1200}
      />
      {showSnackbar && (
        <div className={styles.snackbar}>Email has been sent</div>
      )}
    </div>
  );
}
