import Image from "next/image";
import styles from "../../styles/Home.module.css";
import projectsData from "../projects/projects.json";

export default function HomeGames() {
  const games = projectsData.mobileDevelopment;

  return (
    <section id="oyunlar" className={styles.section}>
      <div className={styles.sec}>
        <p className={styles.mono}>02 / Mobil oyunlar &amp; uygulamalar</p>
        <div className={styles.games}>
          {games.map((game, index) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noopener"
            >
              <span className={`${styles.mono} ${styles.num}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.gameTitle}>
                <Image
                  src={game.image}
                  alt=""
                  width={56}
                  height={56}
                  sizes="56px"
                />
                <h3>{game.title}</h3>
              </div>
              <p>{game.descriptionTr}</p>
              <span className={`${styles.mono} ${styles.go}`}>Play ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
