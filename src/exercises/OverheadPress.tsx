export function OverheadPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="16" r="5" />
      <line x1="32" y1="21" x2="32" y2="40" />
      <line x1="32" y1="26" x2="22" y2="10" />
      <line x1="32" y1="26" x2="42" y2="10" />
      <line x1="16" y1="8" x2="48" y2="8" strokeWidth="3" />
      <rect x="12" y="4" width="4" height="8" rx="1" />
      <rect x="48" y="4" width="4" height="8" rx="1" />
      <line x1="32" y1="40" x2="26" y2="54" />
      <line x1="32" y1="40" x2="38" y2="54" />
      <line x1="23" y1="54" x2="29" y2="54" />
      <line x1="35" y1="54" x2="41" y2="54" />
    </svg>
  );
}
