import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import SeoHead from "../components/SeoHead";
import HomeHeader from "../components/home/HomeHeader";
import HomeHero from "../components/home/HomeHero";
import HomeServices from "../components/home/HomeServices";
import HomeGames from "../components/home/HomeGames";
import HomeWeb from "../components/home/HomeWeb";
import HomeContact from "../components/home/HomeContact";
import HomeFooter from "../components/home/HomeFooter";
import styles from "../styles/Home.module.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export default function Home() {
  return (
    <>
      <SeoHead
        title="ARU SOFT — İhtiyacınıza göre yazalım"
        description="Hazır kalıplara sığmayan işler için web, mobil ve size özel yazılım. Fikrinizi dinliyoruz, birlikte sade ve çalışan bir ürüne dönüştürüyoruz."
      />
      <div
        className={`${styles.home} ${jakarta.className} ${jakarta.variable} ${plexMono.variable}`}
      >
        <div className={styles.wrap}>
          <HomeHeader />
          <main>
            <HomeHero />
            <HomeServices />
            <HomeGames />
            <HomeWeb />
            <HomeContact />
          </main>
          <HomeFooter />
        </div>
      </div>
    </>
  );
}
