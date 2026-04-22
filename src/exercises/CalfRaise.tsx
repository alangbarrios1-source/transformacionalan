export function CalfRaise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="36" />
      <line x1="32" y1="22" x2="24" y2="28" />
      <line x1="32" y1="22" x2="40" y2="28" />
      <line x1="32" y1="36" x2="30" y2="48" />
      <line x1="32" y1="36" x2="34" y2="48" />
      <line x1="30" y1="48" x2="28" y2="52" />
      <line x1="34" y1="48" x2="36" y2="52" />
      <rect x="22" y="52" width="20" height="4" rx="1" />
      <path d="M28 52 L28 48" strokeDasharray="2 2" />
      <path d="M36 52 L36 48" strokeDasharray="2 2" />
    </svg>
  );
}
