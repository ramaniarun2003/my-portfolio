import { useState, useRef, useCallback } from 'react';
import OpenablePokeball from './OpenablePokeball';
import BiomeCard from './BiomeCard';
import { useInert } from '../../hooks/useInert';
import { useHashOpen } from '../../hooks/useHashOpen';

// A ball sitting on the trail + the card it reveals when opened.
export default function BiomeStop({ biome, ballRef }) {
  const cardId = `biome-card-${biome.id}`;
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  // Collapsed card is kept out of the tab order / off screen readers.
  useInert(cardRef, !open);

  // Deep link: open this biome's card when the URL hash matches.
  const openCard = useCallback(() => setOpen(true), []);
  useHashOpen(cardId, openCard);

  const label = open ? `Close ${biome.card.title} details` : `Open ${biome.card.title} details`;

  return (
    <div className={`biome-stop${open ? ' is-open' : ''}`}>
      <div className="biome-ball">
        <OpenablePokeball
          ref={ballRef}
          open={open}
          onToggle={() => setOpen((v) => !v)}
          controls={cardId}
          label={label}
        />
        <span className="biome-ball__caption" aria-hidden="true">{biome.caption}</span>
      </div>

      <div className="biome-card-slot">
        <div className="biome-card" id={cardId} ref={cardRef} role="region" aria-label={biome.card.title}>
          <div className="biome-card__inner">
            <BiomeCard card={biome.card} />
          </div>
        </div>
      </div>
    </div>
  );
}
