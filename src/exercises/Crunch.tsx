export function Crunch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="22" r="5" />
      <path d="M24 27 Q28 34 36 38" />
      <line x1="36" y1="38" x2="50" y2="38" />
      <line x1="24" y1="27" x2="20" y2="32" />
      <line x1="24" y1="27" x2="28" y2="32" />
      <line x1="36" y1="38" x2="32" y2="50" />
      <line x1="50" y1="38" x2="52" y2="50" />
      <line x1="8" y1="42" x2="56" y2="42" opacity="0.3" />
    </svg>
  );
}
