"use client"

import React, { useEffect, useState } from 'react';
import styles from "../styles/Footer.module.css"
import gpayIcon from '../assets/google_pay.png';
import mastercardIcon from '../assets/card.png';
import paypalIcon from '../assets/paypal.png';
import amexIcon from '../assets/amex.png';
import applePayIcon from '../assets/pay.png';
import instagramIcon from '../assets/instagram_logo.png';
import linkedinIcon from '../assets/linkedin.png';
import UsaFlag from '../assets/usa.png';
import Arrow from '../assets/arrow-right.png';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 768; 

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section) => {
    if (!isMobile) return; 
    setOpenSection(openSection === section ? null : section);
  };

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
          <div className={styles.contactInfoSection}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <p className={styles.contactInfo}>+44 221 133 5360</p>
            <p className={styles.contactInfo}>customercare@mettamuse.com</p>
          </div>


          <div className={styles.currencySection}>
            <h3 className={styles.sectionTitle}>CURRENCY</h3>
            <div className={styles.currencySelector}>
              <Image  src={UsaFlag} alt="Usa_Flag" />
              <span className={styles.currencyCode}>USD</span>
            </div>
            <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.mainSection}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle} onClick={() => toggleSection('brand')}>
            <p>mettā muse</p>
            <Image alt='arrow' src={Arrow}
              className={`${styles.arrowIcon} ${openSection === 'brand' ? styles.rotate : ''}`} />
          </h2>
          {(isMobile ? openSection === 'brand' : true) && (
            <ul className={styles.linkList}>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Stories</a></li>
              <li><a href="/">Artisans</a></li>
              <li><a href="/">Boutiques</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">EU Compliances Docs</a></li>
            </ul>
          )}
        </div>

        <div className={styles.quickLinksSection}>
          <h3 className={styles.sectionTitle} onClick={() => toggleSection('quick')}>
            <p>QUICK LINKS</p>
            <Image alt='arrow' src={Arrow} className={`${styles.arrowIcon} ${openSection === 'quick' ? styles.rotate : ''}`} />
          </h3>
          {(isMobile ? openSection === 'quick' : true) && (
            <ul className={styles.linkList}>
              <li><a href="/">Orders & Shipping</a></li>
              <li><a href="/">Join/Login as a Seller</a></li>
              <li><a href="/">Payment & Pricing</a></li>
              <li><a href="/">Return & Refunds</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
            </ul>
          )}
        </div>

        <div className={styles.followSection}>
          <h3 className={styles.sectionTitle} onClick={() => toggleSection('follow')}>
            <p>FOLLOW US</p>
            <Image alt='arrow' src={Arrow}
              className={`${styles.arrowIcon} ${openSection === 'follow' ? styles.rotate : ''}`}
            />
          </h3>
          {(isMobile ? openSection === 'follow' : true) && (
            <div>
              <div className={styles.socialIcons}>
                <a href="/" className={styles.socialLink}>
                  <Image  width={51} height={30} src={instagramIcon} alt="Instagram" />
                </a>
                <a href="/" className={styles.socialLink}>
                  <Image width={51} height={30} src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>

              <div className={styles.paymentsSection}>
                <h3 className={styles.sectionTitle}>mettā muse ACCEPTS</h3>
                <div className={styles.paymentIcons}>
                  <Image width={51} height={30} src={gpayIcon} alt="Google Pay" />
                  <Image width={51} height={30} src={mastercardIcon} alt="Mastercard" />
                  <Image width={51} height={30} src={paypalIcon} alt="PayPal" />
                  <Image width={51} height={30} src={amexIcon} alt="American Express" />
                  <Image width={51} height={30} src={applePayIcon} alt="Apple Pay" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};
