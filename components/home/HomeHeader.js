import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image
          src="/aru.png"
          alt=""
          width={28}
          height={28}
          sizes="28px"
          priority
        />
        ARU SOFT
      </div>
      <nav className={`${styles.nav} ${styles.mono}`}>
        <a href="#hizmet">Hizmetler</a>
        <a href="#oyunlar">Oyunlar</a>
        <a href="#iletisim">İletişim</a>
      </nav>
    </header>
  );
}
