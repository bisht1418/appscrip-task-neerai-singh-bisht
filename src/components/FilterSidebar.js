"use client"

import { useState } from 'react';
import styles from '../styles/FilterSidebar.module.css';

export default function FilterSidebar({ isVisible }) {
  const filterCategories = [
    { id: 'customizable', name: 'CUSTOMIZABLE', type: 'checkbox' },
    { id: 'idealFor', name: 'IDEAL FOR', options: ['All'] },
    { id: 'occasion', name: 'OCCASION', options: ['All'] },
    { id: 'work', name: 'WORK', options: ['All'] },
    { id: 'fabric', name: 'FABRIC', options: ['All'] },
    { id: 'segment', name: 'SEGMENT', options: ['All'] },
    { id: 'suitableFor', name: 'SUITABLE FOR', options: ['All'] },
    { id: 'rawMaterials', name: 'RAW MATERIALS', options: ['All'] },
    { id: 'pattern', name: 'PATTERN', options: ['All'] },
  ];

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories({
      ...expandedCategories,
      [categoryId]: !expandedCategories[categoryId]
    });
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.sidebar} ${!isVisible ? styles.sidebarHidden : ''}`}>
      {filterCategories.map((category) => (
        <div key={category.id} className={styles.filterCategory}>
          {category.type === 'checkbox' ? (
            <div className={styles.checkboxFilter}>
              <input 
                type="checkbox" 
                id={category.id} 
                className={styles.filterCheckbox} 
              />
              <label htmlFor={category.id}>{category.name}</label>
            </div>
          ) : (
            <>
              <div 
                className={styles.filterHeader} 
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                <span className={styles.expandIcon}>
                  {expandedCategories[category.id] ? '▼' : '▶'}
                </span>
              </div>
              <div className={`${styles.filterOptions} ${expandedCategories[category.id] ? styles.expanded : ''}`}>
                {category.options.map((option, index) => (
                  <div key={index} className={styles.filterOption}>
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}