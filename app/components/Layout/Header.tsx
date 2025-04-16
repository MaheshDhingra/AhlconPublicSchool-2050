"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* Updated School Name */}
          Ahlcon Public School
        </Link>
        <nav className={styles.nav}>
          <ul>
             <li><Link href="/" className={styles.navLink}>Home</Link></li>
             <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
             <li><Link href="/programs" className={styles.navLink}>Programs</Link></li>
             <li><Link href="/admissions" className={styles.navLink}>Admissions</Link></li>
             <li><Link href="/tech" className={styles.navLink}>Technology</Link></li>
          </ul>
        </nav>
        {/* Using a real link path potentially */}
        <Link href="/admissions#enroll" className={`button ${styles.ctaButton}`}>
            Enroll Now
        </Link>
      </div>
    </header>
  );
}