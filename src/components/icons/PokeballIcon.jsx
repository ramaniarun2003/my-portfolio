// Decorative split-sphere used inside a project card's <button>.
// The button carries the accessible name, so this is aria-hidden.
export default function PokeballIcon() {
  return (
    <span className="pokeball__vis" aria-hidden="true">
      <span className="pokeball__half pokeball__half--top" />
      <span className="pokeball__half pokeball__half--bottom" />
      <span className="pokeball__band" />
      <span className="pokeball__btn" />
      <span className="pokeball__flash" />
    </span>
  );
}
