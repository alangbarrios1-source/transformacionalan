export function LegPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="20" r="4" />
      <line x1="22" y1="24" x2="22" y2="36" />
      <line x1="22" y1="36" x2="32" y2="44" />
      <line x1="32" y1="44" x2="42" y2="36" />
      <line x1="42" y1="36" x2="50" y2="36" />
      <rect x="48" y="30" width="8" height="12" rx="1" />
      <line x1="22" y1="36" x2="16" y2="48" />
      <line x1="22" y1="28" x2="14" y2="32" />
      <line x1="14" y1="48" x2="20" y2="48" />
      <rect x="10" y="14" width="24" height="4" rx="1" opacity="0.3" />
    </svg>
  );
}
