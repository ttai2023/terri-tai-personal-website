import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const poems = [
  {
    title: 'A Nomad in Love',
    lines: [
      'i have this vision where you fell asleep in the car',
      'and i carried you to our bed',
      '',
      'for you i’d',
      'unlearn the way i see the world',
      'and feel and love and exist',
      'if it makes you feel safer',
      'around me',
      '',
      'during the hard times i’d',
      'caress you in my arms',
      '“it’ll be okay my love”',
      'but i hope you find the garden i grew for you', 
      'whenever you need a minute to ponder',
      'or breathe',
      '',
      'i wish i met you earlier, so you could meet me without my baggage',
      'i think we would’ve been best friends',
      'but i wish i met you later, so we could grow old together',
      'i think we would’ve shared our dying breath', 
      '',
      'grant me a few more minutes with you before', 
      'you leave',
      'the backdoor will always be open', 
      'on the same street where we shared our first kiss', 
      'i promise next time i’ll love softer',
      '',
      'in 50 years, i’ll dream of you',
      'old and grey but still as gorgeous as the day i met you', 
      'you held out your hand', 
      'i took it without a second thought',
      '',
      'and if i had nine lives',
      'i’d choose you in every single one',
      'to be nomadic free and broke',
      'with you'
    ],
    year: '2025',
    note: 'Written after a late night in the lab',
  },
  {
    title: 'The Magician\'s Confession',
    lines: [
      'The secret is always the same:',
      'misdirection.',
      '',
      'Look at my left hand',
      'while my right hand',
      'becomes someone you love.',
    ],
    year: '2023',
    note: 'On the mechanics of wonder',
  },
  {
    title: 'Recursion',
    lines: [
      'I wrote a function that calls itself',
      'until it finds a base case.',
      '',
      'Some nights I think',
      'I am the function.',
      '',
      'Some nights I think',
      'I haven\'t found it yet.',
    ],
    year: '2024',
    note: 'For the engineers who feel too much',
  },
  {
    title: 'Still Life',
    lines: [
      'A cup of cold coffee.',
      'A guitar with one string tuned wrong.',
      'A canvas half-finished.',
      '',
      'My life is a series of',
      'beautiful middles.',
    ],
    year: '2023',
    note: '',
  },
];

const PoetrySection = () => {
  const headRef = useFadeUp();
  const [active, setActive] = useState(0);

  return (
    <section id="poetry" style={{ minHeight: '100vh', padding: '8rem 3rem', position: 'relative', zIndex: 1 }}>
      <div className="nebula" style={{ width: '50vw', height: '50vw', background: 'radial-gradient(circle,rgba(40,20,80,0.1) 0%,transparent 70%)', bottom: '-5%', left: '-15%' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-up" style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>✦ Verse</div>
          <h2 className="section-title" style={{ fontStyle: 'italic' }}>Poetry</h2>
          <p style={{ fontFamily: "'EB Garamond',serif", color: 'var(--silver-dim)', fontSize: '1.1rem', maxWidth: '460px', margin: '1rem auto 0', lineHeight: 1.8, fontStyle: 'italic' }}>
            Small architectures of feeling. Built carefully, then released.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Poem list */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div style={{ borderLeft: '1px solid rgba(201,169,110,0.15)', paddingLeft: '1.5rem' }}>
              {poems.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'none',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'all .3s',
                  }}
                >
                  <div style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: i === active ? '1.2rem' : '1.05rem',
                    color: i === active ? 'var(--cream)' : 'var(--silver-dim)',
                    fontWeight: i === active ? 500 : 400,
                    fontStyle: 'italic',
                    transition: 'all .3s',
                    marginBottom: '.15rem',
                  }}>
                    {p.title}
                  </div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.15em', color: i === active ? 'var(--gold)' : 'var(--gold-dim)' }}>
                    {p.year}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active poem */}
          <PoemDisplay poem={poems[active]} key={active} />
        </div>
      </div>
    </section>
  );
};

const PoemDisplay = ({ poem }: { poem: typeof poems[0] }) => {
  const ref = useFadeUp();

  return (
    <div ref={ref} className="fade-up" style={{ position: 'relative', padding: '3rem', background: 'rgba(13,11,30,0.5)', border: '1px solid rgba(201,169,110,0.08)' }}>
      <span className="ornament-corner ornament-tl" />
      <span className="ornament-corner ornament-tr" />
      <span className="ornament-corner ornament-bl" />
      <span className="ornament-corner ornament-br" />

      {/* Opening quote mark */}
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '5rem', color: 'var(--gold)', opacity: 0.15, lineHeight: 0.8, marginBottom: '1rem' }}>"</div>

      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2rem', fontWeight: 400, fontStyle: 'italic', color: 'var(--cream)', marginBottom: '2.5rem' }}>
        {poem.title}
      </h3>

      <div style={{ marginBottom: '2.5rem' }}>
        {poem.lines.map((line, i) => (
          line === ''
            ? <div key={i} style={{ height: '1.2rem' }} />
            : <div key={i} className="poem-line" style={{ animationDelay: `${i * 0.08}s` }}>{line}</div>
        ))}
      </div>

      {poem.note && (
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.2em', color: 'var(--gold-dim)', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '1.2rem', textTransform: 'uppercase' }}>
          — {poem.note}
        </div>
      )}
    </div>
  );
};

export default PoetrySection;
