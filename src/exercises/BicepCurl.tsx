export function BicepCurl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="36" />
      <line x1="32" y1="22" x2="40" y2="34" />
      <line x1="40" y1="34" x2="40" y2="22" />
      <rect x="38" y="18" width="4" height="6" rx="1" />
      <line x1="32" y1="22" x2="24" y2="34" />
      <line x1="24" y1="34" x2="24" y2="22" />
      <rect x="22" y="18" width="4" height="6" rx="1" />
      <line x1="32" y1="36" x2="26" y2="52" />
      <line x1="32" y1="36" x2="38" y2="52" />
    </svg>
  );
}
