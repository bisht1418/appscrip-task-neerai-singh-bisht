"use client"

import React, { useState } from 'react';
import styles from "../styles/Footer.module.css"
// import gpayIcon from './assets/gpay.png';
// import mastercardIcon from './assets/mastercard.png';
// import paypalIcon from './assets/paypal.png';
// import amexIcon from './assets/amex.png';
// import applePayIcon from './assets/applepay.png';
// import shopPayIcon from './assets/shoppay.png';
// import instagramIcon from './assets/instagram.png';
// import linkedinIcon from './assets/linkedin.png';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.upperSection}>
        <div className={styles.signupSection}>
          <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
          <p className={styles.signupText}>Sign up for updates from mettā muse.</p>
          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>CONTACT US</h3>
          <p className={styles.contactInfo}>+44 221 133 5360</p>
          <p className={styles.contactInfo}>customercare@mettamuse.com</p>

          <div className={styles.currencySection}>
            <h3 className={styles.sectionTitle}>CURRENCY</h3>
            <div className={styles.currencySelector}>
              <span className={styles.currencyFlag}>🇺🇸</span>
              <span className={styles.currencyCode}>USD</span>
            </div>
            <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.mainSection}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle}>mettā muse</h2>
          <ul className={styles.linkList}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className={styles.quickLinksSection}>
          <h3 className={styles.sectionTitle}>QUICK LINKS</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.followSection}>
          <h3 className={styles.sectionTitle}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              {/* <img src={instagramIcon} alt="Instagram" /> */}
            </a>
            <a href="#" className={styles.socialLink}>
              {/* <img src={linkedinIcon} alt="LinkedIn" /> */}
            </a>
          </div>

          <div className={styles.paymentsSection}>
            <h3 className={styles.sectionTitle}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              {/* <img src={gpayIcon} alt="Google Pay" />
              <img src={mastercardIcon} alt="Mastercard" />
              <img src={paypalIcon} alt="PayPal" />
              <img src={amexIcon} alt="American Express" />
              <img src={applePayIcon} alt="Apple Pay" />
              <img src={shopPayIcon} alt="Shop Pay" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};
