import './index.css';
import Starfield from './components/Starfield';
import Cursor from './components/Cursor';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import MagicSection from './sections/MagicSection';
import PaintingsSection from './sections/PaintingsSection';
import MusicSection from './sections/MusicSection';
import PoetrySection from './sections/PoetrySection';
import AboutSection from './sections/AboutSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh', position: 'relative' }}>
      <Starfield />
      <div className="grain" />
      <Cursor />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <MagicSection />
        <PaintingsSection />
        <MusicSection />
        <PoetrySection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
