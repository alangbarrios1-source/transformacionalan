import { useState, useMemo } from 'react';
import { workouts } from '../data/workouts';
import { useWeightLog } from '../hooks/useWeightLog';
import { formatDateShort } from '../utils/dates';
import { useNavigate } from 'react-router-dom';

const allExercises = workouts.flatMap((w) => w.exercises);
const uniqueExercises = allExercises.filter((e, i, arr) => arr.findIndex((x) => x.id === e.id) === i);

export function WeightLogPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(uniqueExercises[0]?.id || '');
  const { history } = useWeightLog(selectedId);

  const maxWeight = useMemo(() => {
    let max = 0;
    history.forEach((e) => e.sets.forEach((s) => { if (s.weight > max) max = s.weight; }));
    return max;
  }, [history]);

  const pr = useMemo(() => {
    let best = { weight: 0, reps: 0, date: '' };
    history.forEach((e) => e.sets.forEach((s) => {
      if (s.weight > best.weight || (s.weight === best.weight && s.reps > best.reps)) {
        best = { weight: s.weight, reps: s.reps, date: e.date };
      }
    }));
    return best;
  }, [history]);

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/gym')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Historial de Pesos</h1>
      </div>

      {/* Exercise Selector */}
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full bg-bg-card border border-slate-700/50 rounded-xl p-3 text-sm text-text-primary focus:outline-none focus:border-accent"
      >
        {uniqueExercises.map((ex) => (
          <option key={ex.id} value={ex.id}>{ex.name}</option>
        ))}
      </select>

      {/* PR */}
      {pr.weight > 0 && (
        <div className="bg-amber-400/10 rounded-xl p-3 border border-amber-400/30 flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="text-sm font-bold text-amber-400">Record Personal</p>
            <p className="text-xs text-text-secondary">{pr.weight}kg × {pr.reps} reps — {formatDateShort(pr.date)}</p>
          </div>
        </div>
      )}

      {/* Chart */}
      {history.length > 1 && (
        <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-text-muted mb-3">Progresión</h3>
          <div className="flex items-end gap-1 h-32">
            {history.slice(-20).reverse().map((entry, i) => {
              const topWeight = Math.max(...entry.sets.map((s) => s.weight));
              const height = maxWeight > 0 ? (topWeight / maxWeight) * 100 : 0;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[8px] text-text-muted">{topWeight}</span>
                  <div
                    className="w-full bg-accent rounded-t-sm min-h-[2px]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* History Table */}
      <div className="space-y-2">
        {history.length === 0 && (
          <p className="text-center text-text-muted text-sm py-8">Aún no hay registros para este ejercicio</p>
        )}
        {history.map((entry, i) => (
          <div key={i} className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
            <p className="text-xs text-text-muted mb-1">{formatDateShort(entry.date)}</p>
            <div className="flex gap-2 flex-wrap">
              {entry.sets.map((s) => (
                <span key={s.setNumber} className="text-xs bg-bg-elevated px-2 py-1 rounded text-text-secondary">
                  S{s.setNumber}: {s.weight}kg × {s.reps}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
