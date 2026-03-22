import { useFadeUp } from '../hooks/useFadeUp';

const MagicSection = () => {
  const headRef = useFadeUp();

  const videos = [
    { title: 'Four Card Reveal ft Lan Gao', desc: 'A study in sleight of hand', url: 'https://www.youtube.com/embed/1bwCMJ58RMo' },
    { title: 'Chicago Opener ft WIC UCSD', desc: 'Wonder at your fingertips', url: 'https://youtube.com/embed/fvGs5_y6nDk?feature=share' },
    { title: 'Queen Swap ft UCSD Womens Rugby', desc: 'An evening of impossible things', url: 'https://youtube.com/embed/Pcgyfyw1fgw?feature=share' },
  ];

  return (
    <section id="magic" style={{ minHeight: '100vh', padding: '8rem 3rem', position: 'relative', zIndex: 1 }}>
      {/* Background accent */}
      <div className="nebula" style={{ width:'50vw',height:'50vw',background:'radial-gradient(circle,rgba(60,20,100,0.12) 0%,transparent 70%)',top:'-10%',right:'-15%',zIndex:0 }}/>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-up" style={{ marginBottom:'5rem', textAlign:'center' }}>
          <div className="divider" style={{ marginBottom:'1.5rem' }}>
            <span style={{ fontFamily:"'Cinzel',serif",fontSize:'.65rem',letterSpacing:'.3em',color:'var(--gold)',textTransform:'uppercase' }}>
              ✦ &nbsp; The Art of Illusion &nbsp; ✦
            </span>
          </div>
          <h2 className="section-title" style={{ fontStyle:'italic' }}>Magic</h2>
          <p style={{ fontFamily:"'EB Garamond',serif",color:'var(--silver-dim)',fontSize:'1.1rem',maxWidth:'500px',margin:'1rem auto 0',lineHeight:1.8,fontStyle:'italic' }}>
            Where engineering precision meets the impossible.
          </p>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'2rem' }}>
          {videos.map((v,i) => (
            <VideoCard key={i} {...v} index={i} />
          ))}
        </div>

        <div style={{ marginTop:'4rem',textAlign:'center' }}>
          <p style={{ fontFamily:"'EB Garamond',serif",fontStyle:'italic',color:'var(--silver-dim)',fontSize:'0.95rem',letterSpacing:'.05em' }}>
            Watch my performances and see the magic come alive!
          </p>
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ title, desc, url, index }: { title:string; desc:string; url:string; index:number }) => {
  const ref = useFadeUp();

  return (
    <div ref={ref} className="fade-up card-glass" style={{ borderRadius:'2px', overflow:'hidden', position:'relative', animationDelay:`${index*0.15}s` }}>
      <span className="ornament-corner ornament-tl"/><span className="ornament-corner ornament-tr"/>
      <span className="ornament-corner ornament-bl"/><span className="ornament-corner ornament-br"/>

      {/* Stage frame */}
      <div className="stage-wrapper" style={{ aspectRatio: '9/16', position:'relative' }}>
        {/* Curtain effect */}
        <div style={{ position:'absolute',inset:0,zIndex:2,pointerEvents:'none',
          background:'linear-gradient(to right, rgba(20,5,35,0.6) 0%,transparent 15%,transparent 85%,rgba(20,5,35,0.6) 100%)',
        }}/>
        <iframe
          src={url}
          style={{ width:'100%',height:'100%',border:'none',display:'block' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>

      <div style={{ padding:'1.5rem' }}>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'1.4rem',fontWeight:500,color:'var(--cream)',marginBottom:'.3rem' }}>{title}</h3>
        <p style={{ fontFamily:"'EB Garamond',serif",color:'var(--silver-dim)',fontSize:'0.95rem',fontStyle:'italic' }}>{desc}</p>
      </div>
    </div>
  );
};

export default MagicSection;
