import { useProgress } from '../hooks/useProgress';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { formatDateShort } from '../utils/dates';
import { useNavigate } from 'react-router-dom';

export function ProgressPage() {
  const progress = useProgress();
  const { dayOfPlan, month } = useCurrentMonth();
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-4 space-y-5 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Progreso</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Racha" value={`${progress.streak}`} icon="🔥" color="text-amber-400" />
        <StatCard label="Mejor racha" value={`${progress.bestStreak}`} icon="🏆" color="text-yellow-400" />
        <StatCard label="Semanal" value={`${progress.weeklyAverage}%`} icon="📊" color="text-accent" />
      </div>

      {/* Day of Plan */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 text-center">
        <span className="text-4xl font-bold text-accent">{dayOfPlan}</span>
        <p className="text-xs text-text-muted mt-1">de 90 días</p>
        <div className="mt-2 h-2 bg-bg-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${Math.min((dayOfPlan / 90) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Fotos de progreso */}
      <button
        onClick={() => navigate('/progress-photos')}
        className="w-full bg-bg-card border border-slate-700/50 rounded-xl p-4 flex items-center gap-3 active:scale-[0.98] transition-transform"
      >
        <span className="text-2xl">📸</span>
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold text-text-primary">Fotos de progreso</p>
          <p className="text-xs text-text-muted">Compara tu cambio físico antes → después</p>
        </div>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Heatmap */}
      <div>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Últimos 90 días</h3>
        <div className="grid grid-cols-13 gap-[3px]">
          {progress.last90Days.map((day, i) => (
            <div
              key={i}
              title={`${formatDateShort(day.date)}: ${day.percentage}%`}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor:
                  day.percentage === 0
                    ? '#1e293b'
                    : day.percentage < 30
                    ? '#7f1d1d'
                    : day.percentage < 50
                    ? '#92400e'
                    : day.percentage < 80
                    ? '#a16207'
                    : '#166534',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 justify-end">
          <span className="text-[10px] text-text-muted">Menos</span>
          {['#1e293b', '#7f1d1d', '#92400e', '#a16207', '#166534'].map((c) => (
            <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
          ))}
          <span className="text-[10px] text-text-muted">Más</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">META: SEPTIEMBRE 2026</h3>
        <div className="space-y-3">
          {[
            { month: 'Junio', face: 'Oratane empieza. Purga posible.', body: 'Mes 1: técnica, tempo 3-1-0', money: 'n8n + datos curiosos' },
            { month: 'Julio', face: 'Menos brotes. Pómulos salen.', body: 'Mes 2: volumen, 3 series. +2-3kg', money: '1 cliente nuevo' },
            { month: 'Agosto', face: 'Piel limpia visible. Mandíbula.', body: 'Mes 3: intensidad. +4-5kg', money: '2-3 clientes' },
            { month: 'SEPT', face: 'IRRECONOCIBLE. Piel limpia. Pómulos. Pelo.', body: '54-56 kg. V-taper. Cuello.', money: 'AutoPilot + canal' },
          ].map((item, i) => {
            const isGoal = i === 3;
            const isCurrent = i === month - 1;
            return (
              <div
                key={i}
                className={`flex gap-3 rounded-lg ${isCurrent || isGoal ? '-mx-2 px-2 py-2' : ''} ${isGoal ? 'bg-accent/10' : ''} ${isCurrent ? 'bg-accent/5 ring-1 ring-accent/40' : ''}`}
              >
                <span className={`text-xs font-bold w-12 ${isCurrent || isGoal ? 'text-accent' : 'text-text-muted'}`}>{item.month}</span>
                <div className="flex-1 text-xs text-text-secondary">
                  <p>
                    {item.face}
                    {isCurrent && <span className="text-accent font-semibold"> · aquí vas</span>}
                  </p>
                  <p className="text-text-muted">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  return (
    <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50 text-center">
      <span className="text-xl">{icon}</span>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
      <p className="text-[10px] text-text-muted">{label}</p>
    </div>
  );
}
