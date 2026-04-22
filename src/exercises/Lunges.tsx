export function Lunges({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="32" />
      <line x1="32" y1="22" x2="24" y2="28" />
      <line x1="32" y1="22" x2="40" y2="28" />
      <line x1="32" y1="32" x2="20" y2="44" />
      <line x1="20" y1="44" x2="16" y2="54" />
      <line x1="32" y1="32" x2="44" y2="42" />
      <line x1="44" y1="42" x2="48" y2="54" />
      <line x1="13" y1="54" x2="19" y2="54" />
      <line x1="45" y1="54" x2="51" y2="54" />
    </svg>
  );
}
