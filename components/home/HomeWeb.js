import Image from "next/image";
import styles from "../../styles/Home.module.css";
import projectsData from "../projects/projects.json";

export default function HomeWeb() {
  // Only web projects with a Turkish description are shown on the home page.
  const sites = projectsData.webDevelopment.filter((site) => site.descriptionTr);

  return (
    <section id="web" className={styles.section}>
      <div className={styles.secH}>
        <h2>Web</h2>
        <span className={styles.secMeta}>03 / Açık sitede</span>
      </div>
      <div className={styles.webList}>
        {sites.map((site, index) => (
          <a
            key={site.title}
            className={styles.webcard}
            href={site.url}
            target="_blank"
            rel="noopener"
          >
            <div className={styles.webMedia}>
              <Image
                src={site.shot || site.image}
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className={styles.webTxt}>
              <p className={styles.idx}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3>{site.title}</h3>
              <p>{site.descriptionTr}</p>
              <span className={styles.cta}>Aç ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
