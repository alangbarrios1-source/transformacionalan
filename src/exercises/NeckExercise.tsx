export function NeckExercise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="16" r="8" />
      <line x1="32" y1="24" x2="32" y2="28" strokeWidth="4" />
      <line x1="32" y1="28" x2="32" y2="44" />
      <line x1="32" y1="32" x2="22" y2="38" />
      <line x1="32" y1="32" x2="42" y2="38" />
      <line x1="32" y1="44" x2="26" y2="56" />
      <line x1="32" y1="44" x2="38" y2="56" />
      <path d="M24 10 L20 6" strokeWidth="1.5" />
      <path d="M40 10 L44 6" strokeWidth="1.5" />
      <path d="M32 8 L32 2" strokeWidth="1.5" />
    </svg>
  );
}
