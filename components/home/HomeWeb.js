import Image from "next/image";
import styles from "../../styles/Home.module.css";
import projectsData from "../projects/projects.json";

export default function HomeWeb() {
  // Only web projects with a Turkish description are shown on the home page.
  const sites = projectsData.webDevelopment.filter((site) => site.descriptionTr);

  return (
    <section id="web" className={styles.section}>
      <div className={styles.sec}>
        <p className={styles.mono}>03 / Web</p>
        <div className={styles.games}>
          {sites.map((site, index) => (
            <a key={site.title} href={site.url} target="_blank" rel="noopener">
              <span className={`${styles.mono} ${styles.num}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.gameTitle}>
                <Image src={site.image} alt="" width={56} height={56} sizes="56px" />
                <h3>{site.title}</h3>
              </div>
              <p>{site.descriptionTr}</p>
              <span className={`${styles.mono} ${styles.go}`}>Aç ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
