import { useRef } from 'react';

// An original poké-ball-style split sphere. Visual open state is driven by the
// `--o` (0→1) and `--f` (flash) custom properties set on the biome band, so the
// two halves fold apart in 3D (rotateX) rather than translating over the card.
export default function Pokeball({ open, controls, ariaLabel, bob, onOpen, onClose }) {
  const sphereRef = useRef(null);

  const handleClick = () => {
    if (open) { onClose(); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sphere = sphereRef.current;
    if (reduce || !sphere || !sphere.animate) { onOpen(); return; }
    sphere.animate(
      [
        { transform: 'rotate(0deg) scale(1)' },
        { transform: 'rotate(-7deg) scale(1.03)', offset: 0.25 },
        { transform: 'rotate(7deg) scale(1.05)', offset: 0.55 },
        { transform: 'rotate(-4deg) scale(1.08)', offset: 0.8 },
        { transform: 'rotate(0deg) scale(1.1)' },
      ],
      { duration: 340, easing: 'ease-in-out', fill: 'none' },
    );
    window.setTimeout(onOpen, 300);
  };

  const half = { position: 'absolute', left: 0, width: '100%', height: '50%' };
  const centerDot = {
    position: 'absolute', left: '50%', top: '50%', width: '30%', height: '30%',
    margin: '-15% 0 0 -15%', borderRadius: '50%', boxSizing: 'border-box',
    opacity: 'calc(1 - var(--o, 0))',
  };

  return (
    <button
      type="button"
      className="rt-ball"
      onClick={handleClick}
      aria-expanded={open ? 'true' : 'false'}
      aria-controls={controls}
      style={{ appearance: 'none', border: 0, background: 'transparent', padding: 16, margin: 0, cursor: 'pointer', borderRadius: 999 }}
    >
      <span
        ref={sphereRef}
        data-sphere
        aria-hidden="true"
        style={{ position: 'relative', display: 'block', perspective: '340px', width: 'var(--ball, 92px)', height: 'var(--ball, 92px)', animation: `bob ${bob}s ease-in-out infinite` }}
      >
        {/* soft ground shadow */}
        <span style={{ position: 'absolute', left: '6%', bottom: '-14%', width: '88%', height: '18%', borderRadius: '50%', background: 'rgba(12,39,64,.18)', filter: 'blur(6px)' }} />
        {/* light-burst flash on open (--f) */}
        <span style={{ position: 'absolute', left: '50%', top: '50%', width: 'var(--ball, 92px)', height: 'var(--ball, 92px)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(255,214,140,.55) 42%, rgba(255,214,140,0) 72%)', opacity: 'var(--f, 0)', transform: 'translate(-50%, -50%) scale(calc(.35 + var(--f, 0) * 2.4))', transition: 'opacity .42s ease-out, transform .42s ease-out' }} />
        {/* top (red) half — folds up */}
        <span style={{ ...half, top: 0, borderRadius: '999px 999px 0 0', background: 'linear-gradient(160deg, #F0827F 0%, #E24B4A 62%)', boxShadow: 'inset 0 2px 6px rgba(255,255,255,.45)', transformOrigin: '50% 100%', transform: 'rotateX(calc(var(--o, 0) * -118deg)) translateY(calc(var(--o, 0) * -5px))', transition: 'transform .62s cubic-bezier(.32,1.1,.34,1)' }} />
        {/* bottom (cream) half — folds down */}
        <span style={{ ...half, bottom: 0, borderRadius: '0 0 999px 999px', background: 'linear-gradient(20deg, #E6E1D7 0%, #FDFDFB 60%)', transformOrigin: '50% 0%', transform: 'rotateX(calc(var(--o, 0) * 118deg)) translateY(calc(var(--o, 0) * 5px))', transition: 'transform .62s cubic-bezier(.32,1.1,.34,1)' }} />
        {/* centre band + button + pulse ring, all fade out on open */}
        <span style={{ position: 'absolute', left: 0, top: 'calc(50% - 5%)', width: '100%', height: '10%', background: '#2A2F36', borderRadius: 2, opacity: 'calc(1 - var(--o, 0))', transition: 'opacity .2s linear' }} />
        <span style={{ ...centerDot, background: '#FDFDFB', border: '3px solid #2A2F36', transition: 'opacity .2s linear' }} />
        <span style={{ ...centerDot, border: '2px solid #E24B4A', animation: 'pulse 2.8s ease-out infinite' }} />
      </span>
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
}
