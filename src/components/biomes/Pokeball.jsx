import { forwardRef, useRef } from 'react';

// An original poké-ball-style sphere. Closed it's front-facing; open it renders
// in a side / 3-quarter view (lid hinged up, bowl you see into, light bursting
// out), driven by the --o (0→1 open) and --f (flash) custom properties.
// The button ref is forwarded so a scroll observer can auto-open it. It stays a
// real focusable button (aria-expanded) so click/Enter/Space remain a fallback.
const Pokeball = forwardRef(function Pokeball({ open, controls, ariaLabel, onOpen, onClose }, ref) {
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
      ref={ref}
      type="button"
      className="rt-ball"
      onClick={handleClick}
      aria-expanded={open ? 'true' : 'false'}
      aria-controls={controls}
    >
      <span ref={sphereRef} className="rt-ball__sphere" aria-hidden="true">
        <span className="rt-ball__shadow" />
        {/* light burst */}
        <span className="rt-ball__glow" />
        <span className="rt-ball__beam" />
        {/* open 3/4 view: lid up + bowl you see into */}
        <span className="rt-ball__lid" />
        <span className="rt-ball__bowl" />
        <span className="rt-ball__cavity" />
        <span className="rt-ball__rim" />
        <span className="rt-ball__core" />
        <span className="rt-ball__rays" />
        <span className="rt-ball__seam" />
        {/* closed front-facing halves (fade out when open) */}
        <span className="rt-ball__c-top" />
        <span className="rt-ball__c-bottom" />
        <span className="rt-ball__band" />
        <span className="rt-ball__btn" />
        <span className="rt-ball__pulse" />
      </span>
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
});

export default Pokeball;
