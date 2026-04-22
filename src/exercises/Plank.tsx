export function Plank({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="30" r="4" />
      <line x1="18" y1="32" x2="50" y2="36" />
      <line x1="14" y1="34" x2="14" y2="44" />
      <line x1="14" y1="44" x2="18" y2="44" />
      <line x1="50" y1="36" x2="50" y2="46" />
      <line x1="50" y1="46" x2="54" y2="46" />
      <line x1="48" y1="46" x2="52" y2="46" />
    </svg>
  );
}
