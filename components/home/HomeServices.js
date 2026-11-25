import styles from "../../styles/Home.module.css";

const services = [
  {
    letter: "A",
    title: "Web uygulamaları",
    description:
      "Modern teknolojilerle, ihtiyaca göre kurgulanan web siteleri ve paneller.",
  },
  {
    letter: "B",
    title: "Mobil uygulamalar",
    description:
      "iOS ve Android için tek kod tabanından (Flutter) uygulamalar.",
  },
  {
    letter: "C",
    title: "Size özel çözümler",
    description: "İş akışınıza birebir oturan, kalıp dışı yazılımlar.",
  },
];

export default function HomeServices() {
  return (
    <section id="hizmet" className={styles.section}>
      <div className={styles.secH}>
        <h2>Ne yapıyoruz</h2>
        <span className={styles.secMeta}>01 / Hizmetler</span>
      </div>
      <div className={styles.services}>
        {services.map((service) => (
          <article key={service.letter}>
            <span className={styles.idx}>{service.letter}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
