import './index.css';
import Starfield from './components/Starfield';
import Cursor from './components/Cursor';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import MagicSection from './sections/MagicSection';
import PaintingsSection from './sections/PaintingsSection';
// import MusicSection from './sections/MusicSection';
import PoetrySection from './sections/PoetrySection';
import AboutSection from './sections/AboutSection';
import Footer from './sections/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh', position: 'relative' }}>
      <Starfield />
      <div className="grain" />
      {!isMobile && <Cursor />}
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <MagicSection />
        <PaintingsSection />
        <PoetrySection />
        {/* <MusicSection /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
