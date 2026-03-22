import { useFadeUp } from '../hooks/useFadeUp';

const tracks = [
  { title: 'Aphelion', genre: 'Ambient / Instrumental', duration: '4:23', desc: 'Written at 2am, somewhere between sleep and orbit.' },
  { title: 'Static Memory', genre: 'Indie Folk', duration: '3:47', desc: 'Guitar and voice, minimal production, maximum feeling.' },
  { title: 'Perihelion', genre: 'Ambient', duration: '5:10', desc: 'The warmth of a sun you can\'t quite reach.' },
  { title: 'Cartography', genre: 'Singer-Songwriter', duration: '4:01', desc: 'Mapping places that only exist in memory.' },
];

const MusicSection = () => {
  const headRef = useFadeUp();

  return (
    <section id="music" style={{ minHeight: '100vh', padding: '8rem 3rem', position: 'relative', zIndex: 1 }}>
      <div className="nebula" style={{ width: '45vw', height: '45vw', background: 'radial-gradient(circle,rgba(80,40,10,0.08) 0%,transparent 70%)', top: '10%', right: '-10%' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-up" style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>✦ Compositions</div>
          <h2 className="section-title" style={{ fontStyle: 'italic' }}>Music</h2>
          <p style={{ fontFamily: "'EB Garamond',serif", color: 'var(--silver-dim)', fontSize: '1.1rem', maxWidth: '480px', margin: '1rem auto 0', lineHeight: 1.8, fontStyle: 'italic' }}>
            Guitar, voice, and whatever else the moment requires.
          </p>
        </div>

        {/* Waveform decoration */}
        <WaveformDecor />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '3rem' }}>
          {tracks.map((t, i) => <TrackRow key={i} {...t} index={i} />)}
        </div>

        {/* Spotify / SoundCloud embed placeholder */}
        <EmbedPlaceholder />
      </div>
    </section>
  );
};

const WaveformDecor = () => {
  const bars = Array.from({ length: 42 }, (_, i) => ({
    height: 15 + Math.sin(i * 0.4) * 25 + Math.random() * 20,
    dur: (0.9 + Math.random() * 0.8).toFixed(2),
    delay: (i * 0.04).toFixed(2),
  }));

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', height: '60px', opacity: 0.6 }}>
      {bars.map((b, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{
            width: '4px',
            height: `${b.height}px`,
            '--dur': `${b.dur}s`,
            '--delay': `${b.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const TrackRow = ({ title, genre, duration, desc, index }: { title: string; genre: string; duration: string; desc: string; index: number }) => {
  const ref = useFadeUp();

  return (
    <div
      ref={ref}
      className="fade-up"
      style={{
        display: 'grid',
        gridTemplateColumns: '2rem 1fr auto',
        gap: '1.5rem',
        alignItems: 'center',
        padding: '1.5rem 1.2rem',
        borderBottom: '1px solid rgba(201,169,110,0.08)',
        cursor: 'none',
        transition: 'background .3s',
        position: 'relative',
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.04)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      {/* Track number */}
      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.65rem', color: 'var(--gold-dim)', letterSpacing: '.1em' }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.3rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.2rem' }}>
          {title}
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', color: 'var(--gold)', letterSpacing: '.15em' }}>{genre}</span>
          <span style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.9rem', color: 'var(--silver-dim)', fontStyle: 'italic' }}>{desc}</span>
        </div>
      </div>

      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: 'var(--silver-dim)' }}>{duration}</span>
    </div>
  );
};

const EmbedPlaceholder = () => {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up card-glass" style={{ marginTop: '3rem', borderRadius: '2px', padding: '2.5rem', textAlign: 'center', position: 'relative' }}>
      <span className="ornament-corner ornament-tl" /><span className="ornament-corner ornament-tr" />
      <span className="ornament-corner ornament-bl" /><span className="ornament-corner ornament-br" />
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.65rem', letterSpacing: '.3em', color: 'var(--gold)', marginBottom: '1rem' }}>✦ LISTEN</div>
      <p style={{ fontFamily: "'EB Garamond',serif", color: 'var(--silver-dim)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.8 }}>
        Embed your Spotify artist profile, SoundCloud, or Bandcamp player here.
        <br />
        <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.75rem', color: 'var(--gold-dim)', background: 'rgba(201,169,110,0.06)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
          &lt;iframe src="your-embed-url" /&gt;
        </code>
      </p>
    </div>
  );
};

export default MusicSection;
