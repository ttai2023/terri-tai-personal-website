import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.4rem 3rem',
      background: scrolled ? 'rgba(4,3,10,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.08)' : 'none',
      transition: 'all 0.6s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <button onClick={() => scrollTo('hero')} style={{ background:'none',border:'none',cursor:'none',textAlign:'left' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'0.9rem', letterSpacing:'.18em', color:'var(--cream)', fontWeight:600, lineHeight:1.2 }}>TERRI TAI</div>
        <div style={{ fontFamily:"'EB Garamond',serif", fontSize:'0.7rem', color:'var(--gold)', letterSpacing:'.1em', fontStyle:'italic' }}>creative polymath</div>
      </button>

      <div style={{ display:'flex', gap:'2.5rem', alignItems:'center' }} className="hidden md:flex">
        {[['about','About'], ['magic','Magic'],['paintings','Paintings'],['poetry','Poetry'],['music','Music']].map(([id,label]) => (
          <button key={id} onClick={() => scrollTo(id)} className="nav-link" style={{ background:'none',border:'none' }}>{label}</button>
        ))}
        <a href="https://ttai2023.github.io/terri-tai-portfolio/" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize:'0.57rem',padding:'.45rem 1.1rem' }}>
          Tech Portfolio ↗
        </a>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} style={{ background:'none',border:'none',cursor:'none',display:'flex',flexDirection:'column',gap:'5px' }} className="md:hidden">
        {[0,1,2].map(i => (
          <span key={i} style={{ display:'block',width:'22px',height:'1px',background:'var(--gold)',transition:'all .3s',
            transform: menuOpen ? (i===0?'rotate(45deg) translate(4px,4px)':i===1?'scaleX(0)':'rotate(-45deg) translate(4px,-4px)') : 'none'
          }}/>
        ))}
      </button>

      {menuOpen && (
        <div style={{ position:'fixed',inset:0,background:'rgba(4,3,10,0.97)',zIndex:200,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2.5rem' }}>
          <button onClick={() => setMenuOpen(false)} style={{ position:'absolute',top:'2rem',right:'2rem',background:'none',border:'none',cursor:'none',color:'var(--gold)',fontSize:'1.5rem' }}>✕</button>
          {[['magic','Magic'],['paintings','Paintings'],['music','Music'],['poetry','Poetry'],['about','About']].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background:'none',border:'none',fontFamily:"'Cinzel',serif",fontSize:'1.6rem',letterSpacing:'.25em',color:'var(--cream)',cursor:'none',textTransform:'uppercase' }}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
