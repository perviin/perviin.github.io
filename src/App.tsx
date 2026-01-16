import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Me from "./components/Me";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import VeilleInfo from "./components/VeilleInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="me" className="py-20 bg-white dark:bg-gray-800">
          <Me />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20  bg-white dark:bg-gray-800">
          <Projects />
        </section>

        <section id="stage" className="py-20">
          <Experience />
        </section>

        <section id="certif" className="py-20  bg-white dark:bg-gray-800">
          <Certifications />
        </section>

        <section id="veille" className="py-20">
          <VeilleInfo />
        </section>

        <section id="contact" className="py-20  bg-white dark:bg-gray-800">
          <Contact />
        </section>

        <section>
          <ScrollToTop />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
