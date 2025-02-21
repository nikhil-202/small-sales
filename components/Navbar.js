"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Sugar Swirls</span>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.navLink}>
              Cakes
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;