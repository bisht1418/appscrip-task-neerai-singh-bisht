"use client"

import styles from "../styles/FilterToggle.module.css"

export default function FilterToggle({ onToggle, isVisible }) {
  return (
    <div className={styles.toggleContainer}>
      <div>
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
          {isVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
        </button>
      </div>

    </div>
  );
}