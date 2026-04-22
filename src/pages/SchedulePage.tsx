import { weekdaySchedule, categoryScheduleColors } from '../data/schedule';
import { useNavigate } from 'react-router-dom';

export function SchedulePage() {
  const navigate = useNavigate();
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Horario</h1>
      </div>
      <p className="text-xs text-text-muted">Lunes a Viernes · 5:30am — 9:30pm</p>

      <div className="space-y-1.5">
        {weekdaySchedule.map((block, i) => {
          const blockMinutes = timeToMinutes(block.time);
          const nextBlock = weekdaySchedule[i + 1];
          const nextMinutes = nextBlock ? timeToMinutes(nextBlock.time) : blockMinutes + block.duration;
          const isCurrent = currentMinutes >= blockMinutes && currentMinutes < nextMinutes;
          const isPast = currentMinutes >= nextMinutes;
          const colors = categoryScheduleColors[block.category] || 'bg-slate-500/20 border-slate-500';

          return (
            <div
              key={i}
              className={`flex gap-3 p-3 rounded-xl border-l-4 transition-all ${colors} ${
                isCurrent ? 'ring-2 ring-accent/50 scale-[1.01]' : ''
              } ${isPast ? 'opacity-50' : ''}`}
            >
              <div className="w-12 flex-shrink-0">
                <span className={`text-sm font-mono ${isCurrent ? 'text-accent font-bold' : 'text-text-muted'}`}>
                  {block.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${isCurrent ? 'text-text-primary font-semibold' : 'text-text-secondary'}`}>
                  {block.activity}
                </p>
                {block.notes && <p className="text-[10px] text-text-muted mt-0.5">{block.notes}</p>}
              </div>
              {isCurrent && (
                <span className="text-[10px] text-accent font-semibold self-center flex-shrink-0">AHORA</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Weekend */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 mt-4">
        <h3 className="text-xs font-semibold text-accent mb-2">FIN DE SEMANA</h3>
        <p className="text-xs text-text-secondary"><strong>SÁB:</strong> Sin escuela. n8n+CapCut 6hrs. Gym 3PM (Legs+caminata inclinada 15min).</p>
        <p className="text-xs text-text-secondary mt-1"><strong>DOM:</strong> Descanso. Prep comida. Compras tianguis 9AM.</p>
      </div>

      {/* Sleep Hygiene */}
      <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/30">
        <h3 className="text-xs font-semibold text-indigo-400 mb-2">HIGIENE DEL SUEÑO</h3>
        <ul className="space-y-1.5 text-xs text-text-secondary">
          <li>📵 Pantallas apagadas 9:00 PM (30 min antes)</li>
          <li>🌑 Cuarto oscuro y fresco (18-20°C)</li>
          <li>🍽️ No comer menos de 45 min antes</li>
          <li>☕ Nada de café después de las 2 PM</li>
        </ul>
      </div>
    </div>
  );
}
