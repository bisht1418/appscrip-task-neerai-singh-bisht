import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"
import Logo from "../assets/Logo.png"
import Search from "../assets/search-normal.png"
import Heart from "../assets/heart.png"
import ShoppingBag from "../assets/shopping-bag.png"
import Profile from "../assets/profile.png"
import Arrow from "../assets/arrow-left.png"

export default function Header() {

  const icons = [
    { src: Search, alt: "Search" },
    { src: Heart, alt: "Wishlist" },
    { src: ShoppingBag, alt: "Shopping Bag", badge: 3 },
    { src: Profile, alt: "Profile" },
    { src: Arrow, alt: "Arrow", text: "ENG" }
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src={Logo}
                alt={"Logo"}
                width={35}
                height={35}
              />
            </Link>
          </div>

          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>LOGO</span>
            </Link>
          </div>

          <div className={styles.iconGroup}>
            {icons.map((icon, index) => (
              <div key={index} className={styles.iconButton}>
                {icon.text && <span className={styles.languageText}>{icon.text}</span>}
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                {icon.badge && <span className={styles.cartCount}>{icon.badge}</span>}

              </div>
            ))}
          </div>
        </div>

        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            SHOP
          </Link>
          <Link href="/" className={styles.navLink}>
            SKILLS
          </Link>
          <Link href="/" className={styles.navLink}>
            STORIES
          </Link>
          <Link href="/" className={styles.navLink}>
            ABOUT
          </Link>
          <Link href="/" className={styles.navLink}>
            CONTACT US
          </Link>
        </div>

      </div>
    </header>
  )
}
