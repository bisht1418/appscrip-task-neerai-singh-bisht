import { fetchProducts } from "../lib/api"
import SortDropdown from "../components/FilterSidebar"
import styles from "../styles/Page.module.css"
import ProductPageContent from "@/components/ProductPageContent"

export const metadata = {
  title: "Discover Our Products | Premium E-commerce Store",
  description:
    "Browse our curated collection of high-quality products. Find the perfect items for your lifestyle with free shipping on orders over $50.",
  openGraph: {
    title: "Discover Our Products | Premium E-commerce Store",
    description:
      "Browse our curated collection of high-quality products. Find the perfect items for your lifestyle with free shipping on orders over $50.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://appscript-assignment-neeraj.netlify.app",
  },
}

export default async function ProductsPage() {
  try {
    const products = await fetchProducts();
    return (
      <main className={styles.main}>
        <ProductPageContent products={products} />
      </main>
    );
  } catch (error) {
    console.error("Error in ProductsPage:", error);
    return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.errorState}>
            <h2>Something went wrong</h2>
            <p>We're having trouble loading the products. Please try again later.</p>
          </div>
        </section>
      </main>
    );
  }
}