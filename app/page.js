import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'; 

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img 
            src="/Home1.jpg" 
            alt="Reenacy Backdrop 1" 
            className={`${styles.heroImage} ${styles.animatedImage1}`} 
          />
          <img 
            src="/Home2.jpg" 
            alt="Reenacy Backdrop 2" 
            className={`${styles.heroImage} ${styles.animatedImage2}`} 
              />
        </div>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Gifts That Tell a Story</h1>
          <p className={styles.heroSubtitle}>
            Reenacy curates meaningful, beautifully packaged gifts for the people who matter most.
          </p>
          
          <div className={styles.buttonGroup}>
            <Link href="/products" className={styles.primaryButton}>
              Explore Collection &rarr;
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

    