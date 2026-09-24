// Note: TO RUN = YARN DEV
import React from 'react';
import SeoHead from '../components/SeoHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SeoHead />
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
