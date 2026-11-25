import styles from "../../styles/Home.module.css";

export default function HomeContact() {
  return (
    <section id="iletisim" className={styles.section}>
      <div className={styles.contact}>
        <h2>Aklınızdaki işi bir e-postayla anlatın, gerisini konuşalım.</h2>
        <a className={styles.mail} href="mailto:arusoft.company@gmail.com">
          arusoft.company@gmail.com
        </a>
      </div>
    </section>
  );
}
