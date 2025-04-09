"use client"

import { useEffect, useState } from "react";
import styles from "../styles/FilterToggle.module.css"

export default function FilterToggle({ onToggle, isVisible }) {

  const breakpoint = 768
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.itemCountContainer}>
        <span className={styles.itemCount}>3425 ITEMS</span>
      </div>
      <div className={styles.toggleButtonContainer}>
        <div>
          <span className={styles.toggleIcon}>
            {isVisible ? '←' : '→'}
          </span>
        </div>

        <button
          onClick={onToggle}
          className={styles.toggleButton}
        >
          {isMobile ? 'FILTER' : (isVisible ? 'HIDE FILTER' : 'SHOW FILTER')}
        </button>
      </div>

    </div>
  );
}