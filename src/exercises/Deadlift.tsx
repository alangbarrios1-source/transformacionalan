export function Deadlift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="32" />
      <line x1="32" y1="22" x2="24" y2="42" />
      <line x1="32" y1="22" x2="40" y2="42" />
      <line x1="32" y1="32" x2="26" y2="42" />
      <line x1="32" y1="32" x2="38" y2="42" />
      <line x1="26" y1="42" x2="24" y2="54" />
      <line x1="38" y1="42" x2="40" y2="54" />
      <line x1="12" y1="42" x2="52" y2="42" strokeWidth="3" />
      <circle cx="10" cy="42" r="4" />
      <circle cx="54" cy="42" r="4" />
      <line x1="21" y1="54" x2="27" y2="54" />
      <line x1="37" y1="54" x2="43" y2="54" />
    </svg>
  );
}
