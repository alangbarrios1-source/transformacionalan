export function Row({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="14" r="5" />
      <line x1="28" y1="19" x2="32" y2="36" />
      <line x1="32" y1="36" x2="24" y2="52" />
      <line x1="32" y1="36" x2="40" y2="52" />
      <line x1="32" y1="28" x2="42" y2="38" />
      <line x1="42" y1="38" x2="42" y2="28" />
      <line x1="32" y1="28" x2="20" y2="38" />
      <line x1="14" y1="42" x2="50" y2="42" strokeWidth="2.5" />
      <rect x="10" y="38" width="4" height="8" rx="1" />
      <rect x="50" y="38" width="4" height="8" rx="1" />
    </svg>
  );
}
