import { forwardRef } from 'react';

// The single "you are here" node that travels the trail as you scroll.
// Purely decorative; positioned by useRouteMotion.
const Marker = forwardRef(function Marker(_props, ref) {
  return (
    <div ref={ref} className="rt-marker" aria-hidden="true">
      <div style={{ position: 'absolute', left: -13, top: -13, width: 26, height: 26, borderRadius: '50%', background: '#FDFDFB', border: '3px solid #C23B39', boxSizing: 'border-box', boxShadow: '0 6px 14px -4px rgba(12,39,64,.45)' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 8, height: 8, margin: '-4px 0 0 -4px', borderRadius: '50%', background: '#C23B39' }} />
      </div>
      <div style={{ position: 'absolute', left: -21, top: -21, width: 42, height: 42, borderRadius: '50%', border: '2px solid rgba(226,75,74,.5)', boxSizing: 'border-box', animation: 'pulse 2.4s ease-out infinite' }} />
    </div>
  );
});

export default Marker;
