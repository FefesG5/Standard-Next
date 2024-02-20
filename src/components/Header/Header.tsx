// Header.tsx
import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/next.svg" // Assuming you have a Next.js logo SVG in your public directory
          alt="Next.js Logo"
          className={styles.logo}
          width={128} // Adjust to the size of your actual logo
          height={64} // Adjust to the size of your actual logo
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact-page">Contact Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
