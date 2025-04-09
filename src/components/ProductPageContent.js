"use client";

import { useState } from 'react';
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import FilterSidebar from "../components/FilterSidebar";
import styles from "../styles/Page.module.css";
import FilterToggle from "../components/FilterToggle";

export default function ProductPageContent({ products }) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.breadcrumbs}>
               <p>HOME</p> 
               <p className={styles.breadcrumbsDivider}></p>
               <p className={styles.activeBreadcrumb}>PRODUCT</p> 
            </div>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
                <p className={styles.heroDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere dignissimos itaque ducimus,
                    dolorem amet reprehenderit asperiores.
                </p>
            </div>

            <div className={styles.filtersContainer}>
                <FilterToggle
                    onToggle={toggleFilter}
                    isVisible={isFilterVisible}
                />
                <div className={styles.divider}></div>
                <div className={styles.sortContainer}>
                    <SortDropdown />
                </div>
            </div>
            <div className={styles.sidebarAndContent}>
                <FilterSidebar isVisible={isFilterVisible} />
                <ProductGrid isFilterVisible={isFilterVisible} products={products || []} />
            </div>

        </section>
    );
}