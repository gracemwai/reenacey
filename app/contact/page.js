import React from 'react';
import './contact.css'; 

export default function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-section">
        
        
        <h1 className="contact-title">Let's Create Magic Together</h1>
        <p className="contact-subtitle">
          Have questions about custom boxes, bulk orders, or corporate gift sets? Reach out below!
        </p>
        
        
        <div className="form-card">
          <form className="contact-form">
           <div className="input-group">
              <label className="input-label">Your Name</label>
              <input type="text" placeholder="Full name" required className="form-input" />
            </div>
            
            
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input type="email" placeholder="xyz@example.com" required className="form-input" />
            </div>
            
            
            <div className="input-group">
              <label className="input-label">How Can We Help?</label>
              <textarea placeholder="Tell us about your gifting ideas..." rows="5" required className="form-textarea"></textarea>
            </div>
             <button type="submit" className="submit-button">Send Message</button>
            
            
          </form>
          </div>
           
      </section>
    </main>
  );
}