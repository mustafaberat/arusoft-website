import SeoHead from "../components/SeoHead";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/projects/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SeoHead />
      <div>
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}
