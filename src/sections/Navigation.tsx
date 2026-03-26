import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const[menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  },[]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems: [string, string][] =[
    ['about', 'About'],
    ['magic', 'Magic'],['paintings', 'Paintings'],
    ['poetry', 'Poetry'],
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '1.1rem 1.5rem' : '1.4rem 3rem',
        background: scrolled || menuOpen ? 'rgba(4,3,10,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.08)' : 'none',
        transition: 'all 0.6s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? '0.8rem' : '0.9rem', letterSpacing: '.18em', color: 'var(--cream)', fontWeight: 600, lineHeight: 1.2 }}>
            TERRI TAI
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '.1em', fontStyle: 'italic' }}>
            creative polymath
          </div>
        </button>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link"
                style={{ background: 'none', border: 'none' }}
              >
                {label}
              </button>
            ))}
            
            <a
              href="https://ttai2023.github.io/terri-tai-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: '0.57rem', padding: '.45rem 1.1rem' }}
            >
              Tech Portfolio ↗
            </a>
          </div>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px',
              padding: '4px', zIndex: 201,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '1.5px',
                background: 'var(--gold)', borderRadius: '2px',
                transition: 'all .3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4.5px, -4.5px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}

      </nav>

      {/* Mobile fullscreen menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 199,
          background: 'rgba(4,3,10,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.4s ease',
        }}>

          <div style={{ position: 'absolute', top: '5rem', left: '3rem', right: '3rem', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,169,110,0.3),transparent)' }} />

          {navItems.map(([id, label], i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Cinzel',serif",
                fontSize: '1.4rem',
                letterSpacing: '.3em',
                color: 'var(--cream)',
                textTransform: 'uppercase',
                padding: '1.2rem 2rem',
                width: '100%', textAlign: 'center',
                borderBottom: '1px solid rgba(201,169,110,0.06)',
                transition: 'opacity .3s, transform .3s, background .2s',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: `${0.1 + i * 0.06}s`,
              }}
              onTouchStart={e => (e.currentTarget.style.background = 'rgba(201,169,110,0.06)')}
              onTouchEnd={e => (e.currentTarget.style.background = 'none')}
            >
              {label}
            </button>
          ))}

          <a
            href="https://ttai2023.github.io/terri-tai-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.65rem',
              letterSpacing: '.25em',
              color: 'var(--gold)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              marginTop: '2.5rem',
              padding: '0.8rem 2rem',
              border: '1px solid rgba(201,169,110,0.25)',
              transition: 'opacity .3s',
              opacity: menuOpen ? 1 : 0,
              transitionDelay: '0.35s',
            }}
          >
            Tech Portfolio ↗
          </a>

          <div style={{ position: 'absolute', bottom: '5rem', left: '3rem', right: '3rem', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,169,110,0.3),transparent)' }} />

        </div>
      )}
    </>
  );
};

export default Navigation;