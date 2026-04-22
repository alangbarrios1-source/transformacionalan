import { useState, useEffect } from 'react';
import type { ExerciseDef } from '../data/workouts';
import { getExerciseSets } from '../utils/periodization';
import { useWeightLog } from '../hooks/useWeightLog';
import { exerciseSvgs } from '../exercises';

interface Props {
  exercise: ExerciseDef;
  month: 1 | 2 | 3;
  onBack: () => void;
}

export function ExerciseDetail({ exercise, month, onBack }: Props) {
  const sets = getExerciseSets(exercise, month);
  const { todayEntry, lastEntry, saveEntry } = useWeightLog(exercise.id);
  const SvgIcon = exerciseSvgs[exercise.id];

  const [setsData, setSetsData] = useState<{ weight: number; reps: number }[]>(
    Array.from({ length: sets }, () => ({ weight: 0, reps: 0 }))
  );

  useEffect(() => {
    if (todayEntry) {
      const filled = Array.from({ length: sets }, (_, i) => {
        const s = todayEntry.sets.find((x) => x.setNumber === i + 1);
        return s ? { weight: s.weight, reps: s.reps } : { weight: 0, reps: 0 };
      });
      setSetsData(filled);
    }
  }, [todayEntry, sets]);

  const handleSave = async () => {
    await saveEntry(setsData.map((s, i) => ({ setNumber: i + 1, weight: s.weight, reps: s.reps })));
  };

  const updateSet = (index: number, field: 'weight' | 'reps', value: number) => {
    const next = [...setsData];
    next[index] = { ...next[index], [field]: value };
    setSetsData(next);
  };

  return (
    <div className="pt-6 pb-4 space-y-5 animate-fade-in">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-1 text-text-muted text-sm active:text-accent">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      {/* SVG */}
      <div className="flex justify-center">
        <div className="w-40 h-40 bg-bg-card rounded-2xl flex items-center justify-center text-accent border border-slate-700/50">
          {SvgIcon ? <SvgIcon className="w-32 h-32" /> : (
            <svg className="w-20 h-20 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7M4 18h4" />
            </svg>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-text-primary">{exercise.name}</h1>
        <p className="text-sm text-text-muted">{exercise.muscleGroup}</p>
        <div className="flex justify-center gap-3 mt-2">
          <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full font-mono">
            {sets} × {exercise.reps}
          </span>
          {exercise.useBelt && (
            <span className="text-sm bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full">FAJA</span>
          )}
        </div>
      </div>

      {/* Technique */}
      {exercise.technique && (
        <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-accent mb-1">TÉCNICA</h3>
          <p className="text-sm text-text-secondary">{exercise.technique}</p>
        </div>
      )}

      {/* Last session */}
      {lastEntry && (
        <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-text-muted mb-1">ÚLTIMA SESIÓN ({lastEntry.date})</h3>
          <div className="flex gap-2 flex-wrap">
            {lastEntry.sets.map((s) => (
              <span key={s.setNumber} className="text-xs bg-bg-elevated px-2 py-1 rounded text-text-secondary">
                S{s.setNumber}: {s.weight}kg × {s.reps}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Weight Input */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Registrar Pesos</h3>
        <div className="space-y-2">
          {setsData.map((set, i) => (
            <div key={i} className="flex items-center gap-2 bg-bg-card rounded-xl p-3 border border-slate-700/50">
              <span className="text-xs text-text-muted w-8">S{i + 1}</span>
              <div className="flex-1 flex items-center gap-1">
                <input
                  type="number"
                  inputMode="decimal"
                  value={set.weight || ''}
                  onChange={(e) => updateSet(i, 'weight', Number(e.target.value))}
                  placeholder="0"
                  className="w-16 bg-bg-elevated text-center text-text-primary rounded-lg py-2 text-sm border border-slate-600 focus:border-accent focus:outline-none"
                />
                <span className="text-xs text-text-muted">kg</span>
              </div>
              <span className="text-text-muted">×</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  inputMode="numeric"
                  value={set.reps || ''}
                  onChange={(e) => updateSet(i, 'reps', Number(e.target.value))}
                  placeholder="0"
                  className="w-14 bg-bg-elevated text-center text-text-primary rounded-lg py-2 text-sm border border-slate-600 focus:border-accent focus:outline-none"
                />
                <span className="text-xs text-text-muted">reps</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        className="w-full bg-accent text-bg-primary font-semibold py-3 rounded-xl active:scale-95 transition-transform text-sm"
      >
        Guardar Pesos
      </button>
    </div>
  );
}
