import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/aru.jpeg"
            alt="Aru Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className={styles.menuIcon}>
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="#services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 