import styles from "../../styles/Home.module.css";

export default function HomeHero() {
  return (
    <div className={styles.hero}>
      <p className={styles.mono}>Web · Mobil · Özel yazılım</p>
      <br />
      <h1>
        İhtiyacınıza göre <span>yazalım</span>
        <i className={styles.dot} />
      </h1>
      <div className={styles.row}>
        <p className={styles.lede}>
          Hazır kalıplara sığmayan işler için web, mobil ve size özel yazılım.
          Fikrinizi dinliyoruz, birlikte sade ve çalışan bir ürüne
          dönüştürüyoruz.
        </p>
        <a className={styles.btn} href="mailto:arusoft.company@gmail.com">
          Projenizi anlatın →
        </a>
      </div>
    </div>
  );
}
