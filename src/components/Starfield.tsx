import { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.003 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }));

    type Shooter = { x:number; y:number; vx:number; vy:number; life:number; maxLife:number };
    const shooters: Shooter[] = [];
    const spawnShooter = () => {
      const a = (Math.random()*25+8)*(Math.PI/180);
      const s = Math.random()*9+5;
      shooters.push({ x:Math.random()*W*0.75, y:Math.random()*H*0.35, vx:Math.cos(a)*s, vy:Math.sin(a)*s, life:0, maxLife:Math.random()*45+30 });
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      const g1=ctx.createRadialGradient(W*0.2,H*0.3,0,W*0.2,H*0.3,W*0.4);
      g1.addColorStop(0,'rgba(80,40,160,0.055)'); g1.addColorStop(1,'transparent');
      ctx.fillStyle=g1; ctx.fillRect(0,0,W,H);
      const g2=ctx.createRadialGradient(W*0.78,H*0.7,0,W*0.78,H*0.7,W*0.38);
      g2.addColorStop(0,'rgba(25,55,115,0.045)'); g2.addColorStop(1,'transparent');
      ctx.fillStyle=g2; ctx.fillRect(0,0,W,H);

      for (const s of stars) {
        const a = s.alpha*(0.55+0.45*Math.sin(s.phase+frame*s.speed));
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(215,222,238,${a})`; ctx.fill();
      }

      for (let i=shooters.length-1;i>=0;i--) {
        const s=shooters[i]; s.x+=s.vx; s.y+=s.vy; s.life++;
        const prog=s.life/s.maxLife; const a=Math.sin(prog*Math.PI);
        const g=ctx.createLinearGradient(s.x-s.vx*8,s.y-s.vy*8,s.x,s.y);
        g.addColorStop(0,'rgba(255,248,220,0)'); g.addColorStop(1,`rgba(255,248,220,${a})`);
        ctx.strokeStyle=g; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.moveTo(s.x-s.vx*8,s.y-s.vy*8); ctx.lineTo(s.x,s.y); ctx.stroke();
        if(s.life>=s.maxLife) shooters.splice(i,1);
      }

      if(frame%290===0 && Math.random()>0.35) spawnShooter();
      frame++;
      animId=requestAnimationFrame(draw);
    };
    draw();

    const onResize=()=>{ W=canvas.width=innerWidth; H=canvas.height=innerHeight; };
    window.addEventListener('resize',onResize);
    return ()=>{ cancelAnimationFrame(animId); window.removeEventListener('resize',onResize); };
  }, []);

  return <canvas ref={canvasRef} style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}} />;
};

export default Starfield;
