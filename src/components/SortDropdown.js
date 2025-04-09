"use client"

import { useState } from "react"
import styles from "../styles/SortDropdown.module.css"

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState("recommended")

  const sortOptions = [
    { label: "Recommended", value: "recommended" },
    { label: "Newest First", value: "newest" },
    { label: "Popular", value: "popular" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Price: Low to High", value: "price_asc" },
  ]

  const handleSortChange = (sortValue) => {
    setCurrentOption(sortValue)
    setIsOpen(false)
  }

  const getCurrentLabel = () => {
    if (currentOption === "recommended") {
      return "Recommended"
    }
    return sortOptions.find((opt) => opt.value === currentOption)?.label || "Featured"
  }

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.dropdownButton}>
        <span>
          {getCurrentLabel()?.toUpperCase()}
        </span>
        <svg
          className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.sortList}>
            {sortOptions.map((option) => (
              <li
                key={option.value}
                className={`${styles.sortItem} ${currentOption === option.value ? styles.activeSort : ""}`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}