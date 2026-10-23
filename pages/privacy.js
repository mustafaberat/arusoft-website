import Link from "next/link";
import SeoHead from "../components/SeoHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { privacyGames } from "../data/privacies";
import styles from "../styles/Privacy.module.css";

export default function PrivacyIndex() {
  return (
    <>
      <SeoHead
        title="Privacy policies — ARU SOFT"
        description="A separate privacy policy for each ARU SOFT game."
        path="/privacy"
      />
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p className={styles.kicker}>ARU SOFT</p>
          <h1 className={styles.title}>Privacy policies</h1>
          <p className={styles.updated}>Each game has its own page.</p>
          <section className={styles.section}>
            <ul className={styles.games}>
              {privacyGames.map((game) => (
                <li key={game.slug}>
                  <Link href={`/privacy/${game.slug}`}>{game.name}</Link>
                  <p>{game.summary}</p>
                </li>
              ))}
            </ul>
            <p>
              Questions:{" "}
              <a href="mailto:arusoft.company@gmail.com">
                arusoft.company@gmail.com
              </a>
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
