// The continuous dashed route, rendered as one SVG path spanning the whole
// section. Purely decorative — the balls carry the interaction.
export default function Trail({ path }) {
  return (
    <svg className="bt-trail" viewBox={path.viewBox} preserveAspectRatio="none" aria-hidden="true">
      <path className="bt-trail__path" d={path.d} />
    </svg>
  );
}
