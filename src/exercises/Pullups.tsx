export function Pullups({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="8" x2="54" y2="8" strokeWidth="3" />
      <line x1="10" y1="4" x2="10" y2="12" />
      <line x1="54" y1="4" x2="54" y2="12" />
      <circle cx="32" cy="18" r="5" />
      <line x1="32" y1="23" x2="32" y2="40" />
      <line x1="32" y1="25" x2="24" y2="10" />
      <line x1="32" y1="25" x2="40" y2="10" />
      <line x1="32" y1="40" x2="26" y2="54" />
      <line x1="32" y1="40" x2="38" y2="54" />
    </svg>
  );
}
