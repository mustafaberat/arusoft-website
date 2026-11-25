import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { privacyGames } from "../../data/privacies";

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} ARU SOFT</div>
      <div className={styles.priv}>
        <span>arusoft.vercel.app</span>
        <Link href="/privacy">Gizlilik</Link>
        {privacyGames.map((game) => (
          <Link key={game.slug} href={`/privacy/${game.slug}`}>
            {game.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
