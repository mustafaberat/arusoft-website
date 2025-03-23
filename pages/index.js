// Note: TO RUN = YARN DEV
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arusoft - Professional Software Solutions</title>
        <meta name="description" content="Arusoft provides professional software development services including web development, mobile apps, and custom solutions." />
        <link rel="icon" href="/favicon.ico" />
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
