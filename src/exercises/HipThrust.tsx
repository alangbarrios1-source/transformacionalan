export function HipThrust({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="28" width="16" height="12" rx="2" />
      <circle cx="16" cy="24" r="4" />
      <line x1="16" y1="34" x2="36" y2="22" />
      <line x1="36" y1="22" x2="44" y2="34" />
      <line x1="44" y1="34" x2="44" y2="46" />
      <line x1="36" y1="34" x2="36" y2="46" />
      <line x1="26" y1="28" x2="42" y2="28" strokeWidth="3" />
      <rect x="22" y="24" width="4" height="8" rx="1" />
      <rect x="42" y="24" width="4" height="8" rx="1" />
    </svg>
  );
}
