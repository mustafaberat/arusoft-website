import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import SeoHead from "../components/SeoHead";
import HomeHeader from "../components/home/HomeHeader";
import HomeHero from "../components/home/HomeHero";
import HomeServices from "../components/home/HomeServices";
import HomeGames from "../components/home/HomeGames";
import HomeContact from "../components/home/HomeContact";
import HomeFooter from "../components/home/HomeFooter";
import styles from "../styles/Home.module.css";

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function Home() {
  return (
    <>
      <SeoHead
        title="ARU SOFT — İhtiyacınıza göre yazalım"
        description="Hazır kalıplara sığmayan işler için web, mobil ve size özel yazılım. Fikrinizi dinliyoruz, birlikte sade ve çalışan bir ürüne dönüştürüyoruz."
      />
      <div
        className={`${styles.home} ${interTight.className} ${interTight.variable} ${jetbrainsMono.variable}`}
      >
        <div className={styles.wrap}>
          <HomeHeader />
          <main>
            <HomeHero />
            <HomeServices />
            <HomeGames />
            <HomeContact />
          </main>
          <HomeFooter />
        </div>
      </div>
    </>
  );
}
