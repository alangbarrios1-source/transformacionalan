export function LegCurl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="24" width="40" height="6" rx="2" />
      <circle cx="18" cy="20" r="4" />
      <line x1="18" y1="24" x2="18" y2="24" />
      <line x1="18" y1="30" x2="14" y2="38" />
      <line x1="42" y1="30" x2="48" y2="30" />
      <line x1="48" y1="30" x2="52" y2="20" />
      <line x1="48" y1="30" x2="52" y2="40" />
      <rect x="50" y="18" width="6" height="4" rx="1" />
    </svg>
  );
}
