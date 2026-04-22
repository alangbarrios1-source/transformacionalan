import type { Meal } from '../data/diet';

interface Props {
  meal: Meal;
}

export function MealCard({ meal }: Props) {
  const protPct = (meal.totalProtein * 4 / (meal.totalCalories || 1)) * 100;
  const carbPct = (meal.totalCarbs * 4 / (meal.totalCalories || 1)) * 100;
  const fatPct = (meal.totalFat * 9 / (meal.totalCalories || 1)) * 100;

  return (
    <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-text-primary">{meal.name}</h3>
          <span className="text-xs text-text-muted">{meal.time}</span>
        </div>
        <span className="text-lg font-bold text-accent">{meal.totalCalories} kcal</span>
      </div>

      <div className="flex gap-3 mb-3 text-xs">
        <span className="text-green-400">P: {meal.totalProtein}g</span>
        <span className="text-amber-400">C: {meal.totalCarbs}g</span>
        <span className="text-orange-400">G: {meal.totalFat}g</span>
      </div>

      <div className="h-2 bg-bg-elevated rounded-full overflow-hidden flex mb-3">
        <div className="bg-green-400 h-full" style={{ width: `${protPct}%` }} />
        <div className="bg-amber-400 h-full" style={{ width: `${carbPct}%` }} />
        <div className="bg-orange-400 h-full" style={{ width: `${fatPct}%` }} />
      </div>

      <ul className="space-y-1">
        {meal.foods.map((food, i) => (
          <li key={i} className="text-xs text-text-secondary flex justify-between">
            <span>{food.name}</span>
            <span className="text-text-muted">{food.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
