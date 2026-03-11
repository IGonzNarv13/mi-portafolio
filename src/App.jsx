import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/footer';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <main className="bg-bg-deep min-h-screen">
      <ThemeSwitcher />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;