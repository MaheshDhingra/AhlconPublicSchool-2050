import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  // Use a realistic future year if desired, or keep current
  const currentYear = new Date().getFullYear(); // Or set manually e.g., 2050
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div>
           {/* Updated School Name */}
          © {currentYear} Ahlcon Public School. All rights reserved.
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