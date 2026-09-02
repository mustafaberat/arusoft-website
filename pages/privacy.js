import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — ARU SOFT</title>
        <meta
          name="description"
          content="ARU SOFT privacy policy. Scoreboard nicknames are optional; app settings stay on your device."
        />
        <link rel="icon" href="/aru.png" />
      </Head>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <p className={styles.kicker}>ARU SOFT</p>
          <h1 className={styles.title}>Privacy policy</h1>
          <p className={styles.updated}>Last updated: 2 September 2026</p>

          <section className={styles.section}>
            <p>
              ARU SOFT publishes software for phones and the web. We do not
              require accounts and we do not run ads or analytics.
            </p>
            <p>
              Hue Hunt may send a nickname and reached level to our
              scoreboard if you choose to submit a top score. That data is
              stored so other players can see the top five. We do not ask
              for location, contacts, photos, microphone, or identity.
            </p>
            <p>
              Settings you choose in an app stay on your device. They are not
              sent to us or to third parties.
            </p>
            <p>
              App stores such as Google Play may process install or crash
              statistics under their own terms. ARU SOFT does not store that
              data.
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
