import { forwardRef } from 'react';
import PokeballIcon from '../icons/PokeballIcon';

// A real, keyboard-operable button that opens/closes its card. The ref is
// forwarded to the <button> so the trail can measure the ball's position.
const OpenablePokeball = forwardRef(function OpenablePokeball(
  { open, onToggle, controls, label },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className="pokeball"
      aria-expanded={open}
      aria-controls={controls}
      aria-label={label}
      onClick={onToggle}
    >
      <PokeballIcon />
    </button>
  );
});

export default OpenablePokeball;
