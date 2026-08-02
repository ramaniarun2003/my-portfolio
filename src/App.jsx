import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#projects">Skip to content</a>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="site-footer">
        <div className="container">
          Built by Ramani Arunachalam · original art, no trademarked characters ·{' '}
          <a href="mailto:ramaniarun2003@gmail.com">ramaniarun2003@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
