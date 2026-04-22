export function Dips({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="34" />
      <line x1="32" y1="22" x2="18" y2="22" />
      <line x1="32" y1="22" x2="46" y2="22" />
      <line x1="18" y1="22" x2="18" y2="30" />
      <line x1="46" y1="22" x2="46" y2="30" />
      <line x1="14" y1="18" x2="14" y2="30" strokeWidth="3" />
      <line x1="50" y1="18" x2="50" y2="30" strokeWidth="3" />
      <line x1="32" y1="34" x2="28" y2="50" />
      <line x1="32" y1="34" x2="36" y2="50" />
    </svg>
  );
}
