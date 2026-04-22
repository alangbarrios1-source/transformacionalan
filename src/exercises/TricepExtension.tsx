export function TricepExtension({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="22" x2="38" y2="14" />
      <line x1="38" y1="14" x2="38" y2="6" />
      <rect x="36" y="2" width="4" height="6" rx="1" />
      <line x1="32" y1="22" x2="26" y2="32" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
