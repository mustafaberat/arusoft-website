import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Hue Hunt · ARU SOFT</title>
        <meta
          name="description"
          content="Privacy policy for Hue Hunt by ARU SOFT. Offline game; no account, ads, or personal data collection."
        />
        <link rel="icon" href="/aru.png" />
      </Head>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p className={styles.kicker}>ARU SOFT · Hue Hunt</p>
          <h1 className={styles.title}>Gizlilik politikası / Privacy policy</h1>
          <p className={styles.updated}>Son güncelleme: 29 Ağustos 2026</p>

          <section className={styles.section}>
            <h2>Türkçe</h2>
            <p>
              Hue Hunt (paket: <code>com.arusoft.huehunt</code>) ARU SOFT
              tarafından sunulan çevrimdışı bir renk oyunudur. Hesap, reklam,
              analitik ve sunucu yoktur.
            </p>
            <p>
              Topladığımız kişisel veri yoktur. Konum, rehber, fotoğraf,
              mikrofon veya kimlik bilgisi istenmez.
            </p>
            <p>
              Dil, ses, titreşim ve renk körü ayarı yalnızca cihazınızda
              saklanır. Bu veriler bize veya üçüncü taraflara gönderilmez.
            </p>
            <p>
              Google Play, indirme ve çökme istatistiklerini kendi
              koşullarına göre işleyebilir. Bunlar ARU SOFT sunucularında
              tutulmaz.
            </p>
            <p>
              Sorular:{' '}
              <a href="mailto:arusoft.company@gmail.com">
                arusoft.company@gmail.com
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>English</h2>
            <p>
              Hue Hunt (package: <code>com.arusoft.huehunt</code>) is an
              offline color puzzle by ARU SOFT. There is no account, ads,
              analytics, or backend.
            </p>
            <p>
              We do not collect personal data. The app does not ask for
              location, contacts, photos, microphone, or identity.
            </p>
            <p>
              Language, sound, haptics, and color-blind settings stay on your
              device only. They are not sent to us or to third parties.
            </p>
            <p>
              Google Play may process install or crash stats under Google’s
              terms. ARU SOFT does not store that data.
            </p>
            <p>
              Questions:{' '}
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
