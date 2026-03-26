const linkStyle: React.CSSProperties = {
  fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.18em',
  color: 'var(--silver-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color .3s',
  whiteSpace: 'nowrap',
};

const links = [
  { href: 'mailto:territai0831@gmail.com', label: 'territai0831@gmail.com' },
  { href: 'tel:+18588780831', label: '+1 (858) 878-0831' },
  { href: 'https://www.instagram.com/terri_taiii/', label: 'Instagram', external: true },
  { href: 'https://substack.com/@territaiii', label: 'Substack', external: true },
  { href: 'https://open.spotify.com/user/strikecoolmagic?si=b03887def4774536', label: 'Spotify', external: true },
  { href: 'https://ttai2023.github.io/terri-tai-portfolio/', label: 'Portfolio', external: true },
];

const Footer = () => (
  <footer style={{ padding: '1.5rem 3rem', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(201,169,110,0.08)' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>

      {/* Left: name + quote as tagline */}
      <div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.85rem', letterSpacing: '.2em', color: 'var(--cream)', fontWeight: 600 }}>TERRI TAI</div>
        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '0.8rem', color: 'var(--silver-dim)', fontStyle: 'italic', marginTop: '.2rem' }}>
          creativity isn't separate from engineering — it powers it.
        </div>
      </div>

      {/* Center: inline links */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        {links.map(({ href, label, external }, i) => (
          <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {i > 0 && <span style={{ color: 'var(--gold-dim)', fontSize: '0.4rem' }}>✦</span>}
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--silver-dim)')}
            >
              {label}
            </a>
          </span>
        ))}
      </div>

      {/* Right: copyright */}
      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.55rem', letterSpacing: '.15em', color: 'var(--gold-dim)' }}>
        © {new Date().getFullYear()}
      </span>

    </div>
  </footer>
);

export default Footer;
