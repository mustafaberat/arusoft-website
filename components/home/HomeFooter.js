import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerCopy}>
          © {new Date().getFullYear()} ARU SOFT
        </span>
        <span className={styles.footerDot} aria-hidden="true">
          ·
        </span>
        <Link href="/privacy" className={styles.footerPriv}>
          Gizlilik
        </Link>
      </div>
    </footer>
  );
}
