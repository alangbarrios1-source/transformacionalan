export function LateralRaise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="24" x2="14" y2="24" />
      <line x1="32" y1="24" x2="50" y2="24" />
      <rect x="8" y="22" width="6" height="4" rx="1" />
      <rect x="50" y="22" width="6" height="4" rx="1" />
      <line x1="32" y1="38" x2="26" y2="54" />
      <line x1="32" y1="38" x2="38" y2="54" />
    </svg>
  );
}
