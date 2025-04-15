// components/Layout/Header.tsx
import Link from "next/link";
import styles from "./Header.module.css"; // Import CSS Module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Ahlcon Public School
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>About Us</Link>
            </li>
            <li>
              <Link href="/programs" className={styles.navLink}>Programs</Link>
            </li>
            <li>
              <Link href="/admissions" className={styles.navLink}>Admissions</Link>
            </li>
             <li>
              <Link href="/tech" className={styles.navLink}>Technology</Link>
            </li>
          </ul>
        </nav>
        {/* Add maybe a CTA button later */}
        {/* <button className='button small'>Enroll Now</button> */}
      </div>
    </header>
  );
}