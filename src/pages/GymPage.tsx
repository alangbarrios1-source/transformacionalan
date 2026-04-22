import { useState } from 'react';
import { workouts, warmups, periodization } from '../data/workouts';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { ExerciseCard } from '../components/ExerciseCard';
import { ExerciseDetail } from './ExerciseDetail';
import { getDayOfWeek, getDayName } from '../utils/dates';
import type { ExerciseDef } from '../data/workouts';

export function GymPage() {
  const { month } = useCurrentMonth();
  const dayOfWeek = getDayOfWeek();
  const [selectedExercise, setSelectedExercise] = useState<ExerciseDef | null>(null);

  const todayWorkout = workouts.find((w) => w.dayOfWeek === dayOfWeek);
  const currentPeriod = periodization[month - 1];

  if (dayOfWeek === 7) {
    return (
      <div className="pt-8 text-center animate-fade-in">
        <div className="text-6xl mb-4">😴</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Domingo — Descanso</h1>
        <p className="text-text-secondary">Estiramientos postura + ej. faciales</p>
        <p className="text-sm text-text-muted mt-2">Prep comida · Compras tianguis 9AM</p>
      </div>
    );
  }

  if (!todayWorkout) return <div className="pt-8 text-center text-text-muted">No hay rutina para hoy</div>;

  if (selectedExercise) {
    return <ExerciseDetail exercise={selectedExercise} month={month} onBack={() => setSelectedExercise(null)} />;
  }

  const warmupType = todayWorkout.name.includes('PUSH') || todayWorkout.name.includes('Push')
    ? 'Push'
    : todayWorkout.name.includes('PULL') || todayWorkout.name.includes('Pull')
    ? 'Pull'
    : 'Legs';

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      {/* Header */}
      <div>
        <p className="text-xs text-text-muted uppercase tracking-wider">{getDayName(dayOfWeek)}</p>
        <h1 className="text-2xl font-bold text-text-primary">{todayWorkout.name}</h1>
        <p className="text-sm text-text-secondary">{todayWorkout.focus}</p>
      </div>

      {/* Period Badge */}
      <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <span className="text-xs text-accent font-semibold">MES {month}: {currentPeriod.name}</span>
        </div>
        <p className="text-xs text-text-muted mt-1">{currentPeriod.focus}</p>
      </div>

      {/* Warmup */}
      <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-amber-400 mb-2">CALENTAMIENTO — 5 min</h3>
        <ul className="space-y-1">
          {warmups[warmupType]?.map((w, i) => (
            <li key={i} className="text-xs text-text-secondary">• {w}</li>
          ))}
        </ul>
      </div>

      {/* Exercises */}
      <div className="space-y-2">
        {todayWorkout.exercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            month={month}
            onClick={() => setSelectedExercise(ex)}
          />
        ))}
      </div>

      {/* Belt reminder */}
      {todayWorkout.exercises.some((e) => e.useBelt) && (
        <div className="bg-amber-400/10 rounded-xl p-3 border border-amber-400/30">
          <p className="text-xs text-amber-400 font-semibold">🔒 FAJA solo en: Sentadilla pesada + Peso muerto</p>
          <p className="text-xs text-text-muted">Todo lo demás: aprieta abdomen como si te fueran a pegar = faja natural</p>
        </div>
      )}
    </div>
  );
}
