import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = mx+'px'; dotRef.current.style.top = my+'px'; }
    };

    let animId: number;
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx+'px'; ringRef.current.style.top = ry+'px'; }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-query on any DOM changes isn't practical, so use delegation
    document.addEventListener('mouseenter', (e) => {
      const t = e.target as Element;
      if (t.closest('a,button,[data-hover]')) onEnter();
    }, true);
    document.addEventListener('mouseleave', (e) => {
      const t = e.target as Element;
      if (t.closest('a,button,[data-hover]')) onLeave();
    }, true);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default Cursor;
