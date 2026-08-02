// Tiny poké-ball glyph used as a route "bullet" between nav links.
export default function MiniBall() {
  return (
    <svg className="nav-sep__ball" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="7" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="1.4" />
      <path d="M1 8a7 7 0 0 1 14 0Z" fill="#E24B4A" />
      <rect x="1" y="7" width="14" height="2" fill="#2A2F36" />
      <circle cx="8" cy="8" r="2.4" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="1.2" />
    </svg>
  );
}
