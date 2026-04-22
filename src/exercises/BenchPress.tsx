export function BenchPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="36" width="36" height="4" rx="1" />
      <line x1="18" y1="40" x2="18" y2="52" />
      <line x1="46" y1="40" x2="46" y2="52" />
      <line x1="14" y1="52" x2="22" y2="52" />
      <line x1="42" y1="52" x2="50" y2="52" />
      <line x1="8" y1="24" x2="56" y2="24" strokeWidth="3" />
      <rect x="4" y="18" width="5" height="12" rx="1" />
      <rect x="55" y="18" width="5" height="12" rx="1" />
      <circle cx="32" cy="30" r="4" />
      <line x1="32" y1="34" x2="32" y2="36" />
      <line x1="32" y1="31" x2="22" y2="25" />
      <line x1="32" y1="31" x2="42" y2="25" />
      <line x1="32" y1="36" x2="26" y2="44" />
      <line x1="32" y1="36" x2="38" y2="44" />
    </svg>
  );
}
