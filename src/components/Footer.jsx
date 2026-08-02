import { EMAIL } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        Built by Ramani Arunachalam · original art, no trademarked characters ·{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
    </footer>
  );
}
