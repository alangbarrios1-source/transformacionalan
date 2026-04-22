export function Pullover({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="30" width="36" height="6" rx="2" />
      <circle cx="32" cy="26" r="4" />
      <line x1="32" y1="30" x2="32" y2="36" />
      <line x1="32" y1="28" x2="20" y2="16" />
      <line x1="32" y1="28" x2="44" y2="16" />
      <rect x="16" y="12" width="8" height="6" rx="2" />
      <line x1="32" y1="36" x2="26" y2="48" />
      <line x1="32" y1="36" x2="38" y2="48" />
    </svg>
  );
}
