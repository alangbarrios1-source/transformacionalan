export function Squat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="34" />
      <line x1="22" y1="22" x2="32" y2="20" />
      <line x1="42" y1="22" x2="32" y2="20" />
      <line x1="20" y1="18" x2="44" y2="18" strokeWidth="3" />
      <rect x="14" y="14" width="4" height="8" rx="1" />
      <rect x="46" y="14" width="4" height="8" rx="1" />
      <line x1="32" y1="34" x2="24" y2="44" />
      <line x1="32" y1="34" x2="40" y2="44" />
      <line x1="24" y1="44" x2="22" y2="56" />
      <line x1="40" y1="44" x2="42" y2="56" />
      <line x1="19" y1="56" x2="25" y2="56" />
      <line x1="39" y1="56" x2="45" y2="56" />
    </svg>
  );
}
