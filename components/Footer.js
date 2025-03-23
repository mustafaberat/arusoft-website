import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <a href="mailto:arusoft.company@gmail.com" className={styles.emailLink}>
              arusoft.company@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Arusoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 