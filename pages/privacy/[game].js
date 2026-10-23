import SeoHead from "../../components/SeoHead";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { privacyGame, privacyGames } from "../../data/privacies";
import styles from "../../styles/Privacy.module.css";

export default function GamePrivacy({ slug }) {
  const game = privacyGame(slug);

  return (
    <>
      <SeoHead
        title={`${game.name} privacy policy — ARU SOFT`}
        description={game.summary}
        path={`/privacy/${game.slug}`}
      />
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p className={styles.kicker}>ARU SOFT</p>
          <h1 className={styles.title}>{game.name}</h1>
          <p className={styles.updated}>Privacy policy · 22 October 2026</p>
          <section className={styles.section}>
            {game.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              App stores such as Google Play may process install or crash
              statistics under their own terms. ARU SOFT does not store that
              data.
            </p>
            <p>
              Questions:{" "}
              <a href="mailto:arusoft.company@gmail.com">
                arusoft.company@gmail.com
              </a>
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: privacyGames.map((game) => ({ params: { game: game.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.game } };
}
