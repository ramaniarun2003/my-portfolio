// Small poké-ball mark shown next to the brand name in the navbar.
export default function BrandBall() {
  return (
    <svg className="nav-brand__ball" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="15" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="2" />
      <path d="M1 16a15 15 0 0 1 30 0Z" fill="#E24B4A" />
      <rect x="1" y="14" width="30" height="4" fill="#2A2F36" />
      <circle cx="16" cy="16" r="5" fill="#FDFDFB" stroke="#2A2F36" strokeWidth="2" />
    </svg>
  );
}
