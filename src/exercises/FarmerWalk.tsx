export function FarmerWalk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="8" r="5" />
      <line x1="32" y1="13" x2="32" y2="34" />
      <line x1="32" y1="20" x2="20" y2="34" />
      <line x1="32" y1="20" x2="44" y2="34" />
      <rect x="16" y="34" width="6" height="10" rx="1" />
      <rect x="42" y="34" width="6" height="10" rx="1" />
      <line x1="32" y1="34" x2="26" y2="52" />
      <line x1="32" y1="34" x2="38" y2="52" />
      <line x1="23" y1="52" x2="29" y2="52" />
      <line x1="35" y1="52" x2="41" y2="52" />
    </svg>
  );
}
