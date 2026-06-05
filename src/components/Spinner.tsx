export function Spinner({ label = 'Cargando...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3 text-text-muted animate-fade-in">
      <div className="w-8 h-8 rounded-full border-2 border-bg-elevated border-t-accent animate-spin" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
