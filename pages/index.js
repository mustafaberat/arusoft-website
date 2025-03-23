// Note: TO RUN = YARN DEV
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ARU SOFT</title>
        <meta name="description" content="ARU Soft provides professional software development services including web development, mobile apps, and custom solutions." />
        <link rel="icon" href="/aru.png" />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="overflow-hidden">
          <Hero />
          <Services />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}
