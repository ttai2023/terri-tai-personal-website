import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [orbRef.current, titleRef.current, subRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '8rem 2rem 4rem', textAlign: 'center', zIndex: 1 }}>

      {/* Orbit ring decoration */}
      <div ref={orbRef} style={{ position: 'relative', marginBottom: '3rem' }}>
        <svg viewBox="0 0 400 400" style={{ width: 'min(55vw,400px)', height: 'min(55vw,400px)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
          <ellipse cx="200" cy="200" rx="192" ry="138" fill="none" stroke="rgba(201,169,110,0.1)" strokeWidth="1" transform="rotate(-18 200 200)" />
          <ellipse cx="200" cy="200" rx="178" ry="118" fill="none" stroke="rgba(185,197,214,0.07)" strokeWidth="1" transform="rotate(8 200 200)" />
          <ellipse cx="200" cy="200" rx="160" ry="96" fill="none" stroke="rgba(201,169,110,0.06)" strokeWidth="0.5" transform="rotate(35 200 200)" />
        </svg>

        {/* Central monogram */}
        <div style={{
          width: 'min(30vw,220px)', height: 'min(30vw,220px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(26,16,53,0.9) 0%, rgba(4,3,10,0.95) 100%)',
          border: '1px solid rgba(201,169,110,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 2,
          boxShadow: '0 0 60px rgba(201,169,110,0.08), inset 0 0 40px rgba(0,0,0,0.5)',
          animation: 'floatOrb 6s ease-in-out infinite',
        }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(2rem,6vw,3.5rem)', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.05em', opacity: 0.9 }}>TT</span>
        </div>

        {/* Orbiting accent dots */}
        {[
          { angle: -40, dist: 'min(22vw,162px)', size: 7, delay: '0s' },
          { angle: 100, dist: 'min(24vw,176px)', size: 5, delay: '0.5s' },
          { angle: 220, dist: 'min(20vw,148px)', size: 4, delay: '1s' },
        ].map((d,i) => {
          const rad = d.angle * Math.PI / 180;
          const dist = 90;
          return (
            <div key={i} style={{
              position: 'absolute', top: '50%', left: '50%',
              width: d.size, height: d.size,
              borderRadius: '50%',
              background: 'var(--gold)',
              opacity: 0.5,
              transform: `translate(calc(-50% + ${Math.cos(rad)*dist}px), calc(-50% + ${Math.sin(rad)*dist}px))`,
              boxShadow: '0 0 8px var(--gold)',
              animation: `floatDot ${3+i*0.7}s ease-in-out infinite alternate`,
              animationDelay: d.delay,
            }}/>
          );
        })}
      </div>

      {/* Title */}
      <h1 ref={titleRef} style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(2.8rem,7vw,6.5rem)', lineHeight: 1.05, color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: '1.5rem', maxWidth: '900px' }}>
        <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--silver)', fontSize: '0.45em', letterSpacing: '.08em', marginBottom: '0.5rem', fontWeight: 400 }}>the art of</span>
        Magic, Music<span style={{ color: 'var(--gold)', margin: '0 0.2em', fontStyle: 'italic' }}>&</span>Making Things
      </h1>

      {/* Subtitle */}
      <p ref={subRef} style={{ fontFamily: "'EB Garamond',serif", fontSize: 'clamp(1rem,2.5vw,1.35rem)', color: 'var(--silver-dim)', maxWidth: '560px', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '3rem' }}>
        Computer engineer by day. Magician, painter, poet, and musician by the light of distant stars.
      </p>

      <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[['magic','✦ See the Magic'],['paintings','View Paintings'],['music','Hear the Music']].map(([id,label]) => (
          <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })} className="btn-gold">{label}</button>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'fadeDown 2s ease 2s both' }}>
        <span style={{ fontFamily:"'Cinzel',serif", fontSize:'0.55rem', letterSpacing:'.3em', color:'var(--gold-dim)' }}>SCROLL</span>
        <div style={{ width:1,height:40,background:'linear-gradient(to bottom,var(--gold-dim),transparent)' }}/>
      </div>

      <style>{`
        @keyframes floatOrb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatDot { from{opacity:.3;transform:translate(calc(-50% + var(--ox,0px)),calc(-50% + var(--oy,0px))) scale(.8)} to{opacity:.7;scale:1.1} }
        @keyframes fadeDown { from{opacity:0;transform:translateX(-50%) translateY(-10px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
      `}</style>
    </section>
  );
};

export default HeroSection;
