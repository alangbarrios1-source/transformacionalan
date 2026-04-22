export function InclineWalk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="12" r="5" />
      <line x1="28" y1="17" x2="30" y2="34" />
      <line x1="30" y1="24" x2="22" y2="30" />
      <line x1="30" y1="24" x2="36" y2="30" />
      <line x1="30" y1="34" x2="24" y2="48" />
      <line x1="30" y1="34" x2="36" y2="48" />
      <line x1="8" y1="52" x2="56" y2="40" strokeWidth="3" />
      <line x1="22" y1="48" x2="26" y2="48" />
      <line x1="34" y1="48" x2="38" y2="48" />
    </svg>
  );
}
