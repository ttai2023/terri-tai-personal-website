const Footer = () => {
  return (
    <footer style={{ padding: '4rem 3rem 3rem', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(201,169,110,0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.1rem', letterSpacing: '.2em', color: 'var(--cream)', fontWeight: 600, marginBottom: '.3rem' }}>TERRI TAI</div>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.9rem', color: 'var(--gold)', fontStyle: 'italic' }}>creative polymath · UC San Diego</div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              ['https://ttai2023.github.io/terri-tai-portfolio/', 'Engineering Portfolio'],
              ['https://linkedin.com/in/terri-tai-732a21229', 'LinkedIn'],
              ['https://github.com/ttai2023', 'GitHub'],
            ].map(([href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel',serif", fontSize: '0.6rem', letterSpacing: '.2em', color: 'var(--silver-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color .3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--silver-dim)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <hr className="ornament" style={{ marginBottom: '2rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.85rem', color: 'var(--silver-dim)', fontStyle: 'italic' }}>
            "Because creativity isn't separate from engineering — it powers it."
          </span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.15em', color: 'var(--gold-dim)' }}>
            © {new Date().getFullYear()} TERRI TAI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
