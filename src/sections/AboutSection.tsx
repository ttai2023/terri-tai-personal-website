import { useFadeUp } from '../hooks/useFadeUp';

const AboutSection = () => {
  const headRef = useFadeUp();
  const textRef = useFadeUp();
  const tagsRef = useFadeUp();

  const skills =[
    { label: 'Magic', icon: '✦' },
    { label: 'Oil Painting', icon: '◈' },
    { label: 'Guitar', icon: '♩' },
    { label: 'Songwriting', icon: '♪' },
    { label: 'Poetry', icon: '❧' },
    { label: 'Watercolor', icon: '◇' },
    { label: 'Robotics', icon: '⬡' },
    { label: 'Machine Learning', icon: '∿' },
    { label: 'Full-Stack', icon: '⊞' },
  ];

  return (
    <section id="about" style={{ minHeight: '80vh', padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 3rem)', position: 'relative', zIndex: 1 }}>
      {/* Background nebula adapted to not overflow on small screens */}
      <div className="nebula" style={{ width: 'clamp(200px, 40vw, 400px)', height: 'clamp(200px, 40vw, 400px)', background: 'radial-gradient(circle,rgba(60,30,100,0.09) 0%,transparent 70%)', top: '20%', right: '-10%', position: 'absolute' }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <div ref={headRef} className="fade-up" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>✦ The Person</div>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* 
          MAGIC HAPPENS HERE: 
          Instead of fixed '1fr 1fr', this dynamically breaks into 1 column on mobile 
          and 2 columns on desktop. Gap also shrinks gracefully on smaller screens. 
        */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: 'clamp(3rem, 8vw, 5rem)', 
          alignItems: 'start', 
          marginBottom: '5rem' 
        }}>
          
          <div ref={textRef} className="fade-up">
            <p style={{ fontFamily: "'EB Garamond',serif", fontSize: '1.2rem', color: 'var(--silver)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              I'm Terri Tai — a Computer Engineering student at UC San Diego. By training, I build autonomous systems, robotics, and intelligent software. By nature, I make things that don't need to be useful or practical — just human.
            </p>
            <p style={{ fontFamily: "'EB Garamond',serif", fontSize: '1.1rem', color: 'var(--silver-dim)', lineHeight: 1.9, marginBottom: '1.5rem', fontStyle: 'italic' }}>
              I've always believed that creativity and engineering are the same impulse — the urge to make something from nothing, to impose meaning on chaos. One uses code; the other uses paint.
            </p>
            <p style={{ fontFamily: "'EB Garamond',serif", fontSize: '1.1rem', color: 'var(--silver-dim)', lineHeight: 1.9 }}>
              This site is for the other half. The part that picks up a guitar at midnight, fills sketchbooks on the train, performs card tricks for strangers, and writes poems that no one asked for.
            </p>
          </div>

          {/* Decorative quote */}
          <div style={{ position: 'relative', padding: 'clamp(1.5rem, 5vw, 2.5rem)', background: 'rgba(13,11,30,0.5)', border: '1px solid rgba(201,169,110,0.1)' }}>
            <span className="ornament-corner ornament-tl" /><span className="ornament-corner ornament-tr" />
            <span className="ornament-corner ornament-bl" /><span className="ornament-corner ornament-br" />

            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(3rem, 8vw, 4rem)', color: 'var(--gold)', opacity: 0.15, lineHeight: 0.8, marginBottom: '1rem' }}>"</div>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Creativity isn't separate from engineering — it powers it.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(201,169,110,0.2)' }}/>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.2em', color: 'var(--gold-dim)' }}>TERRI TAI</span>
            </div>

            {/* Links */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="https://ttai2023.github.io/terri-tai-portfolio/" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase', display:'flex',alignItems:'center',gap:'.5rem' }}>
                <span style={{ width:16,height:1,background:'var(--gold)',display:'inline-block' }}/>
                Engineering Portfolio
              </a>
              <a href="https://linkedin.com/in/terri-tai-732a21229" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.2em', color: 'var(--silver-dim)', textDecoration: 'none', textTransform: 'uppercase', display:'flex',alignItems:'center',gap:'.5rem' }}>
                <span style={{ width:16,height:1,background:'var(--silver-dim)',display:'inline-block' }}/>
                LinkedIn
              </a>
              <a href="https://github.com/ttai2023" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.2em', color: 'var(--silver-dim)', textDecoration: 'none', textTransform: 'uppercase', display:'flex',alignItems:'center',gap:'.5rem' }}>
                <span style={{ width:16,height:1,background:'var(--silver-dim)',display:'inline-block' }}/>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr className="ornament" style={{ marginBottom: '3rem' }} />

        {/* Skills/interests tags (Already inherently mobile friendly via flexWrap!) */}
        <div ref={tagsRef} className="fade-up">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Interests & Disciplines</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map((s, i) => (
              <span key={i} style={{
                fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.18em',
                color: 'var(--silver)', border: '1px solid rgba(201,169,110,0.15)',
                padding: '.45rem 1rem', textTransform: 'uppercase',
                background: 'rgba(13,11,30,0.5)', transition: 'all .3s',
                display: 'flex', alignItems: 'center', gap: '.5rem',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.4)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.15)'; (e.currentTarget as HTMLElement).style.color = 'var(--silver)'; }}
              >
                <span style={{ color: 'var(--gold-dim)', fontSize: '0.8rem' }}>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;