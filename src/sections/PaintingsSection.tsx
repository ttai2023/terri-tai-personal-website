import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

import fighterJetImg from '../assets/fighter_jet.jpeg';
import lostAstronautImg from '../assets/lost_astronaut.jpeg';
import rooftopCrashImg from '../assets/rooftop_crash.jpeg';
import spaceUnderwaterImg from '../assets/space_underwater.jpeg';

const paintings = [
  { title: 'Fighter Jet', medium: 'Oil on canvas', image: fighterJetImg, year: '2024' },
  { title: 'Lost Astronaut', medium: 'Oil on canvas', image: lostAstronautImg, year: '2024' },
  { title: 'Rooftop Crash', medium: 'Oil on canvas', image: rooftopCrashImg, year: '2023' },
  { title: 'Space Underwater', medium: 'Oil on canvas', image: spaceUnderwaterImg, year: '2023' },
];

type Painting = typeof paintings[0];

const Lightbox = ({ painting, onClose }: { painting: Painting; onClose: () => void }) => (
  <div
    onClick={onClose}
    style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(4,3,10,0.95)',
      backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem',
      animation: 'lbFadeIn .2s ease',
    }}
  >
    <button
      onClick={onClose}
      style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        background: 'none', border: '1px solid rgba(201,169,110,0.25)',
        color: 'var(--gold)', cursor: 'pointer',
        fontFamily: "'Cinzel',serif", fontSize: '0.65rem',
        letterSpacing: '.2em', padding: '.4rem .9rem',
      }}
    >
      CLOSE ✕
    </button>
    <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <img
        src={painting.image}
        alt={painting.title}
        style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', border: '1px solid rgba(201,169,110,0.1)' }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.3rem', color: 'var(--cream)', fontWeight: 500 }}>{painting.title}</div>
        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.9rem', color: 'var(--gold)', fontStyle: 'italic' }}>{painting.medium} · {painting.year}</div>
      </div>
    </div>
    <style>{`@keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
  </div>
);

const PaintingsSection = () => {
  const headRef = useFadeUp();
  const [lightbox, setLightbox] = useState<Painting | null>(null);

  return (
    <>
      {lightbox && <Lightbox painting={lightbox} onClose={() => setLightbox(null)} />}
      <section id="paintings" style={{ minHeight: '100vh', padding: '5rem 3rem', position: 'relative', zIndex: 1 }}>
        <div className="nebula" style={{ width: '40vw', height: '40vw', background: 'radial-gradient(circle,rgba(20,50,80,0.1) 0%,transparent 70%)', bottom: '0', left: '-10%' }} />

        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div ref={headRef} className="fade-up" style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>✦ Gallery</div>
              <h2 className="section-title" style={{ fontStyle: 'italic' }}>Paintings</h2>
            </div>
            <p style={{ fontFamily: "'EB Garamond',serif", color: 'var(--silver-dim)', fontSize: '1.05rem', maxWidth: '380px', lineHeight: 1.8, fontStyle: 'italic' }}>
              Each canvas is a small universe — paint and cosmos speaking the same language.
            </p>
          </div>

          <hr className="ornament" style={{ marginBottom: '2rem' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem' }}>
            {paintings.map((p, i) => (
              <PaintingCard key={i} {...p} index={i} onOpen={() => setLightbox(p)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const PaintingCard = ({ title, medium, year, image, index, onOpen }: {
  title: string; medium: string; year: string; image?: string; index: number; onOpen: () => void;
}) => {
  const ref = useFadeUp();

  return (
    <div
      ref={ref}
      className="fade-up gallery-item card-glass"
      onClick={onOpen}
      style={{ borderRadius: '2px', overflow: 'hidden', transitionDelay: `${index * 0.08}s`, cursor: 'pointer' }}
    >
      <div style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden', background: '#0a0a15' }}>
        {image && (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .6s ease' }} />
        )}
        {!image && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '3rem', color: 'var(--cream)' }}>◈</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.55rem', letterSpacing: '.3em', color: 'var(--cream)', marginTop: '0.5rem' }}>IMAGE</div>
            </div>
          </div>
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top,rgba(4,3,10,0.9) 0%,rgba(4,3,10,0.2) 60%,transparent 100%)',
          display: 'flex', alignItems: 'flex-end', padding: '1.2rem',
          opacity: 0, transition: 'opacity .4s ease',
        }} className="gallery-overlay">
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', color: 'var(--cream)', fontWeight: 500 }}>{title}</div>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.85rem', color: 'var(--gold)', fontStyle: 'italic' }}>{medium}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.05rem', color: 'var(--cream)', fontWeight: 500 }}>{title}</div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.85rem', color: 'var(--silver-dim)', fontStyle: 'italic' }}>{medium}</div>
        </div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', color: 'var(--gold-dim)', letterSpacing: '.1em' }}>{year}</div>
      </div>
    </div>
  );
};

export default PaintingsSection;
