// components/Layout/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          © {currentYear} Æthelred Academy. All rights reserved.
        </div>
        <div className={styles.links}>
           <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/contact">Contact</Link></li>
           </ul>
        </div>
      </div>
    </footer>
  );
}