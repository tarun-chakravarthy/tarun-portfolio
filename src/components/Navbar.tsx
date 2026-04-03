"use client";
import styles from "./Navbar.module.css";

const links = ["about", "skills", "experience", "education", "contact"];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>TCD</span>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
