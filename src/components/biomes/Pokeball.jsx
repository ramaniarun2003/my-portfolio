import { useRef } from 'react';

// An original poké-ball-style sphere that genuinely OPENS in 3D: the top
// hemisphere is hinged at the back rim and tilts up-and-back (rotateX under
// perspective), revealing a shadowed inner cavity with a burst of light. All
// driven by the --o (0→1 open) and --f (flash) custom properties on the band.
export default function Pokeball({ open, controls, ariaLabel, onOpen, onClose }) {
  const sphereRef = useRef(null);

  const handleClick = () => {
    if (open) { onClose(); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sphere = sphereRef.current;
    if (reduce || !sphere || !sphere.animate) { onOpen(); return; }
    sphere.animate(
      [
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-2px) scale(1.03)', offset: 0.3 },
        { transform: 'translateY(1px) scale(1.06)', offset: 0.6 },
        { transform: 'translateY(0) scale(1.08)' },
      ],
      { duration: 320, easing: 'ease-in-out', fill: 'none' },
    );
    window.setTimeout(onOpen, 300);
  };

  return (
    <button
      type="button"
      className="rt-ball"
      onClick={handleClick}
      aria-expanded={open ? 'true' : 'false'}
      aria-controls={controls}
    >
      <span ref={sphereRef} className="rt-ball__sphere" aria-hidden="true">
        <span className="rt-ball__shadow" />
        <span className="rt-ball__glow" />
        <span className="rt-ball__cavity" />
        <span className="rt-ball__bottom" />
        <span className="rt-ball__band" />
        <span className="rt-ball__btn" />
        <span className="rt-ball__pulse" />
        <span className="rt-ball__top">
          <span className="rt-ball__face rt-ball__face--out" />
          <span className="rt-ball__face rt-ball__face--in" />
        </span>
        <span className="rt-ball__seam" />
      </span>
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
}
