import Image from "next/image"
import Link from "next/link"
import styles from "../styles/ProductGrid.module.css"

export default function ProductGrid({ products = [], isFilterVisible }) {
  if (!products || products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No products found. Please try a different filter or check back later.</p>
      </div>
    )
  }

  return (
    <div className={isFilterVisible ? styles.productGrid_isSidebarOpen : styles.productGrid_isSidebarClose}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Link href={`/products/${product.id}`} className={styles.productLink}>
            <div className={styles.imageContainer}>
              <div className={styles.productImageWrapper}>
                {product.image ? (
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className={styles.productImage}
                    priority={product.id <= 8}
                  />
                ) : (
                  <div className={styles.placeholderImage}>
                    <span>{product.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              {product.onSale && <div className={styles.saleTag}>SALE</div>}
            </div>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <div className={styles.productInfo}>
              <p className={styles.signInPrompt}>
                <span className={styles.signInLink}>Sign in </span>
                or Create an account to see pricing
              </p>
            </div>
            <button className={styles.wishlistButton} aria-label="Add to wishlist">
              ♡
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}