import React from 'react';
import './about.css';
export default function About() {
  return (
    <main className="about-main">
      <section className="about-section">
        
        
        <h1 className="about-title">The Reenacy Story</h1>
        <p className="about-subtitle">
          Founded by Racey & Reeny
        </p>
        <div className="about-grid">
          
          <div className="about-text-block">
            <h2 className="about-heading">Our Beginning</h2>
            <p className="about-paragraph">
              Reenacy was born out of a shared passion between Racey and Reeny for creating unforgettable moments. We believed that giving a gift should be more than an everyday transaction-it should be a beautiful story shared between people. 
            </p>
             <h2 className="about-heading">Our Curated Mission</h2>
            <p className="about-paragraph">
              Together, we hand-select premium items and arrange them into elegant, thoughtful boxes. From luxury self-care sets to custom collections, we pour our hearts into every single detail so your loved ones feel truly celebrated and cherished.
            </p>
             <div className="about-image-card">
            <img 
              src="/Founders.jpg" 
              alt="Racey and Reeny - Founders of Reenacy" 
              className="founders-image" 
            />
            <div className="image-caption">Founders Racey & Reeny</div>
          </div>

        </div>
        </div>

      </section>
    </main>
  );
}