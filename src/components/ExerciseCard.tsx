import type { ExerciseDef } from '../data/workouts';
import { getExerciseSets } from '../utils/periodization';
import { exerciseSvgs } from '../exercises';

interface Props {
  exercise: ExerciseDef;
  month: 1 | 2 | 3;
  onClick: () => void;
  lastWeight?: number;
}

export function ExerciseCard({ exercise, month, onClick, lastWeight }: Props) {
  const sets = getExerciseSets(exercise, month);
  const SvgIcon = exerciseSvgs[exercise.id];

  return (
    <button
      onClick={onClick}
      className="w-full bg-bg-card rounded-xl p-4 border border-slate-700/50 flex items-center gap-3 active:scale-[0.98] transition-transform"
    >
      <div className="w-14 h-14 bg-bg-elevated rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
        {SvgIcon ? <SvgIcon className="w-10 h-10" /> : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7M4 18h4" />
          </svg>
        )}
      </div>
      <div className="flex-1 text-left">
        <h4 className="text-sm font-semibold text-text-primary">{exercise.name}</h4>
        <p className="text-xs text-text-muted">{exercise.muscleGroup}</p>
        <div className="flex gap-2 mt-1">
          <span className="text-xs text-accent font-mono">{sets} × {exercise.reps}</span>
          {exercise.useBelt && <span className="text-xs bg-amber-400/20 text-amber-400 px-1.5 rounded">FAJA</span>}
        </div>
      </div>
      {lastWeight != null && (
        <div className="text-right flex-shrink-0">
          <span className="text-sm font-bold text-text-primary">{lastWeight}kg</span>
          <p className="text-[10px] text-text-muted">último</p>
        </div>
      )}
      <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
