import { useFadeUp } from '../hooks/useFadeUp';

// 1. Import the images at the top of the file
import fighterJetImg from '../assets/fighter_jet.jpeg';
import lostAstronautImg from '../assets/lost_astronaut.jpeg';
import rooftopCrashImg from '../assets/rooftop_crash.jpeg';
import spaceUnderwaterImg from '../assets/space_underwater.jpeg';

// 2. Use the imported variables in your array (no quotes needed!)
const paintings =[
  { title: 'Fighter Jet', medium: 'Oil on canvas', image: fighterJetImg, year: '2024'},
  { title: 'Lost Astronaut', medium: 'Oil on canvas', image: lostAstronautImg, year: '2024'},
  { title: 'Rooftop Crash', medium: 'Oil on canvas', image: rooftopCrashImg, year: '2023'},
  { title: 'Space Underwater', medium: 'Oil on canvas', image: spaceUnderwaterImg, year: '2023'},
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
          </p>
        </div>
      </div>
    </section>
  );
};

const PaintingCard = ({ title, medium, year, image, index }: { 
  title: string; medium: string; year: string; image?: string; index: number 
}) => {
  const ref = useFadeUp();

  return (
    <div ref={ref} className="fade-up gallery-item card-glass" style={{ borderRadius:'2px', overflow:'hidden', transitionDelay:`${index*0.08}s` }}>
      <div style={{
        aspectRatio: '3/4',
        position: 'relative', overflow: 'hidden',
        background: '#0a0a15',
      }}>
        {/* Real image */}
        {image && (
          <img src={image} alt={title} style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            transition: 'transform .6s ease',
          }} />
        )}

        {/* Fallback symbol — only shows if no image */}
        {!image && (
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', opacity:0.3 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'3rem', color:'var(--cream)' }}>◈</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'0.55rem', letterSpacing:'.3em', color:'var(--cream)', marginTop:'0.5rem' }}>IMAGE</div>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to top,rgba(4,3,10,0.9) 0%,rgba(4,3,10,0.2) 60%,transparent 100%)',
          display:'flex', alignItems:'flex-end', padding:'1.2rem',
          opacity:0, transition:'opacity .4s ease',
        }} className="gallery-overlay">
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.2rem', color:'var(--cream)', fontWeight:500 }}>{title}</div>
            <div style={{ fontFamily:"'EB Garamond',serif", fontSize:'0.85rem', color:'var(--gold)', fontStyle:'italic' }}>{medium}</div>
          </div>
        </div>
      </div>

      <div style={{ padding:'1rem 1.2rem', display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
        <div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', color:'var(--cream)', fontWeight:500 }}>{title}</div>
          <div style={{ fontFamily:"'EB Garamond',serif", fontSize:'0.85rem', color:'var(--silver-dim)', fontStyle:'italic' }}>{medium}</div>
        </div>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'0.6rem', color:'var(--gold-dim)', letterSpacing:'.1em' }}>{year}</div>
      </div>
    </div>
  );
};

export default PaintingsSection;
