import Image from "next/image";
import styles from "../../styles/Home.module.css";
import projectsData from "../projects/projects.json";

const WIDE = new Set([
  "/things-imgs/hue-hunt.png",
  "/things-imgs/paper-hangman.png",
  "/things-imgs/yakitla.png",
]);

export default function HomeHero() {
  const games = projectsData.mobileDevelopment;
  const featured = projectsData.webDevelopment.find((site) => site.cover);

  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.mono}>Web · Mobil · Özel yazılım</p>
        <h1>İhtiyacınıza göre yazalım.</h1>
        <p className={styles.lede}>
          Hazır kalıplara sığmayan işler için web, mobil ve size özel yazılım.
          Fikrinizi dinliyoruz, birlikte sade ve çalışan bir ürüne
          dönüştürüyoruz.
        </p>
        <a className={styles.cta} href="mailto:arusoft.company@gmail.com">
          Projenizi anlatın →
        </a>
      </div>
      <div className={styles.bento}>
        {featured && (
          <a
            className={styles.feat}
            href={featured.url}
            target="_blank"
            rel="noopener"
          >
            <div className={styles.featMedia}>
              <Image
                src={featured.cover}
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 520px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className={styles.featTxt}>
              <p className={styles.featKicker}>03 / Web</p>
              <h2>{featured.title}</h2>
              <p>{featured.descriptionTr}</p>
              <span>Aç ↗</span>
            </div>
          </a>
        )}
        <div className={styles.tiles}>
          {games.map((game) => (
            <a
              key={game.title}
              className={styles.tile}
              href={game.url}
              target="_blank"
              rel="noopener"
            >
              <Image
                className={WIDE.has(game.image) ? styles.wide : undefined}
                src={game.image}
                alt=""
                width={120}
                height={120}
                sizes="80px"
              />
              <span>{game.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
