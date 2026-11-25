import Image from "next/image";
import styles from "../../styles/Home.module.css";
import projectsData from "../projects/projects.json";

const WIDE = new Set([
  "/things-imgs/hue-hunt.png",
  "/things-imgs/paper-hangman.png",
  "/things-imgs/yakitla.png",
]);

export default function HomeGames() {
  const games = projectsData.mobileDevelopment;

  return (
    <section id="oyunlar" className={styles.section}>
      <div className={styles.secH}>
        <h2>Mobil oyunlar &amp; uygulamalar</h2>
        <span className={styles.secMeta}>02 / Play Store</span>
      </div>
      <div className={styles.grid}>
        {games.map((game) => (
          <a
            key={game.title}
            className={styles.card}
            href={game.url}
            target="_blank"
            rel="noopener"
          >
            <Image
              className={WIDE.has(game.image) ? styles.wide : undefined}
              src={game.image}
              alt=""
              width={400}
              height={400}
              sizes="(max-width: 700px) 50vw, 280px"
            />
            <div>
              <h3>{game.title}</h3>
              <p>{game.descriptionTr}</p>
              <span>Play ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
