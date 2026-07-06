import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.css';
export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          🎁 Reenacy
        </Link>
        <nav className={styles.navigation}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

      </div>
    </header>
  );
}