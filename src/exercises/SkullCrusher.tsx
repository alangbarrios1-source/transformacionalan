export function SkullCrusher({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="32" width="40" height="4" rx="1" />
      <circle cx="22" cy="28" r="4" />
      <line x1="22" y1="32" x2="22" y2="36" />
      <line x1="22" y1="34" x2="30" y2="22" />
      <line x1="30" y1="22" x2="36" y2="22" />
      <line x1="28" y1="20" x2="38" y2="20" strokeWidth="2.5" />
      <rect x="26" y="16" width="3" height="6" rx="1" />
      <rect x="35" y="16" width="3" height="6" rx="1" />
      <line x1="22" y1="36" x2="16" y2="46" />
      <line x1="22" y1="36" x2="28" y2="46" />
    </svg>
  );
}
