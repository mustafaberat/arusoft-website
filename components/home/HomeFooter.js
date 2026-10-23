import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeFooter() {
  return (
    <footer className={`${styles.footer} ${styles.mono}`}>
      <span>© {new Date().getFullYear()} ARU SOFT</span>
      <span>
        arusoft.vercel.app · <Link href="/privacy">Gizlilik</Link>
      </span>
    </footer>
  );
}
