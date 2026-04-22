export function MachineFly({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="14" r="5" />
      <line x1="32" y1="19" x2="32" y2="38" />
      <path d="M32 24 Q22 20 18 28" />
      <path d="M32 24 Q42 20 46 28" />
      <line x1="18" y1="28" x2="12" y2="28" />
      <line x1="46" y1="28" x2="52" y2="28" />
      <line x1="12" y1="22" x2="12" y2="34" strokeWidth="3" />
      <line x1="52" y1="22" x2="52" y2="34" strokeWidth="3" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
