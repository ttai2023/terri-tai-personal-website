import { useFadeUp } from '../hooks/useFadeUp';

const paintings = [
  { title: 'Nebula Study I', medium: 'Acrylic on canvas', year: '2024', placeholder: 'linear-gradient(135deg,#1a0035 0%,#0c1a4e 50%,#2d0a4a 100%)' },
  { title: 'Tidal Memory', medium: 'Watercolor', year: '2024', placeholder: 'linear-gradient(160deg,#0a2a3a 0%,#1a4a5a 40%,#0d1535 100%)' },
  { title: 'Interior Cosmos', medium: 'Oil on board', year: '2023', placeholder: 'linear-gradient(120deg,#2a1a00 0%,#4a2a0a 50%,#1a0a20 100%)' },
  { title: 'Still Life with Stars', medium: 'Mixed media', year: '2023', placeholder: 'linear-gradient(145deg,#0a1a10 0%,#1a3a20 50%,#0a0a25 100%)' },
  { title: 'Liminal Space', medium: 'Acrylic', year: '2023', placeholder: 'linear-gradient(135deg,#1a0a2a 0%,#2a1a4a 40%,#0a1535 100%)' },
  { title: 'Portrait of Silence', medium: 'Charcoal', year: '2022', placeholder: 'linear-gradient(155deg,#151515 0%,#2a2a2a 50%,#0a0a15 100%)' },
];

const PaintingsSection = () => {
  const headRef = useFadeUp();

  return (
    <section id="paintings" style={{ minHeight:'100vh',padding:'8rem 3rem',position:'relative',zIndex:1 }}>
      <div className="nebula" style={{ width:'40vw',height:'40vw',background:'radial-gradient(circle,rgba(20,50,80,0.1) 0%,transparent 70%)',bottom:'0',left:'-10%' }}/>

      <div style={{ maxWidth:'1300px',margin:'0 auto' }}>
        <div ref={headRef} className="fade-up" style={{ marginBottom:'5rem', display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom:'0.8rem' }}>✦ Gallery</div>
            <h2 className="section-title" style={{ fontStyle:'italic' }}>Paintings</h2>
          </div>
          <p style={{ fontFamily:"'EB Garamond',serif",color:'var(--silver-dim)',fontSize:'1.05rem',maxWidth:'380px',lineHeight:1.8,fontStyle:'italic' }}>
            Each canvas is a small universe — paint and cosmos speaking the same language.
          </p>
        </div>

        <hr className="ornament" style={{ marginBottom:'4rem' }}/>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.5rem' }}>
          {paintings.map((p,i) => <PaintingCard key={i} {...p} index={i}/>)}
        </div>

        <div style={{ marginTop:'3rem',textAlign:'center' }}>
          <p style={{ fontFamily:"'EB Garamond',serif",fontStyle:'italic',color:'var(--silver-dim)',fontSize:'0.9rem' }}>
            Replace placeholders with your actual painting images
          </p>
        </div>
      </div>
    </section>
  );
};

const PaintingCard = ({ title, medium, year, placeholder, index }: { title:string;medium:string;year:string;placeholder:string;index:number }) => {
  const ref = useFadeUp();

  return (
    <div ref={ref} className="fade-up gallery-item card-glass" style={{ borderRadius:'2px',overflow:'hidden',transitionDelay:`${index*0.08}s` }}>
      {/* Painting placeholder / image */}
      <div style={{
        aspectRatio: index % 3 === 1 ? '3/4' : '4/3',
        background: placeholder,
        display:'flex',alignItems:'center',justifyContent:'center',
        position:'relative',overflow:'hidden',
      }}>
        {/* Placeholder art symbol */}
        <div style={{ textAlign:'center',opacity:0.3 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'3rem',color:'var(--cream)' }}>◈</div>
          <div style={{ fontFamily:"'Cinzel',serif",fontSize:'0.55rem',letterSpacing:'.3em',color:'var(--cream)',marginTop:'0.5rem' }}>IMAGE</div>
        </div>

        {/* Hover overlay label */}
        <div style={{
          position:'absolute',inset:0,
          background:'linear-gradient(to top,rgba(4,3,10,0.9) 0%,rgba(4,3,10,0.2) 60%,transparent 100%)',
          display:'flex',alignItems:'flex-end',padding:'1.2rem',
          opacity:0, transition:'opacity .4s ease',
        }} className="gallery-overlay">
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'1.2rem',color:'var(--cream)',fontWeight:500 }}>{title}</div>
            <div style={{ fontFamily:"'EB Garamond',serif",fontSize:'0.85rem',color:'var(--gold)',fontStyle:'italic' }}>{medium}</div>
          </div>
        </div>
      </div>

      <div style={{ padding:'1rem 1.2rem',display:'flex',justifyContent:'space-between',alignItems:'baseline' }}>
        <div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'var(--cream)',fontWeight:500 }}>{title}</div>
          <div style={{ fontFamily:"'EB Garamond',serif",fontSize:'0.85rem',color:'var(--silver-dim)',fontStyle:'italic' }}>{medium}</div>
        </div>
        <div style={{ fontFamily:"'Cinzel',serif",fontSize:'0.6rem',color:'var(--gold-dim)',letterSpacing:'.1em' }}>{year}</div>
      </div>
    </div>
  );
};

export default PaintingsSection;
