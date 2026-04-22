export function FacePull({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="24" x2="22" y2="16" />
      <line x1="32" y1="24" x2="42" y2="16" />
      <line x1="22" y1="16" x2="8" y2="16" strokeDasharray="3 2" />
      <line x1="42" y1="16" x2="56" y2="16" strokeDasharray="3 2" />
      <rect x="4" y="10" width="4" height="12" rx="1" opacity="0.5" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
