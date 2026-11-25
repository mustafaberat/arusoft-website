import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        <Image
          src="/aru.png"
          alt=""
          width={30}
          height={30}
          sizes="30px"
          priority
        />
        ARU SOFT
      </Link>
      <nav className={styles.nav}>
        <a href="#hizmet">Hizmetler</a>
        <a href="#oyunlar">Oyunlar</a>
        <a href="#web">Web</a>
        <a href="#iletisim">İletişim</a>
        <a className={styles.navCta} href="mailto:arusoft.company@gmail.com">
          Projenizi anlatın →
        </a>
      </nav>
    </header>
  );
}
