import { meals, dailyTotals, dietRules } from '../data/diet';
import { MealCard } from '../components/MealCard';

export function DietPage() {
  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Dieta</h1>
      <p className="text-xs text-text-muted">3,300 kcal · 140g proteína · Ectomorfo</p>

      {/* Daily Totals */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">TOTAL DÍA</h3>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <span className="text-lg font-bold text-text-primary">{dailyTotals.calories}</span>
            <p className="text-[10px] text-text-muted">kcal</p>
          </div>
          <div>
            <span className="text-lg font-bold text-green-400">{dailyTotals.protein}g</span>
            <p className="text-[10px] text-text-muted">proteína</p>
          </div>
          <div>
            <span className="text-lg font-bold text-amber-400">{dailyTotals.carbs}g</span>
            <p className="text-[10px] text-text-muted">carbos</p>
          </div>
          <div>
            <span className="text-lg font-bold text-orange-400">{dailyTotals.fat}g</span>
            <p className="text-[10px] text-text-muted">grasa</p>
          </div>
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-3">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {/* Rules */}
      <div className="bg-danger/10 rounded-xl p-4 border border-danger/30">
        <h3 className="text-xs font-semibold text-danger mb-2">REGLAS</h3>
        <ul className="space-y-2">
          {dietRules.map((r, i) => (
            <li key={i} className="text-xs">
              <span className="text-text-primary font-medium">{r.rule}</span>
              <span className="text-text-muted ml-1">— {r.reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prep Sunday */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-2">PREP DOMINGO (1 hr)</h3>
        <ul className="space-y-1 text-xs text-text-secondary">
          <li>1. Frijoles — 1 kg olla presión, 45 min</li>
          <li>2. Arroz — 2 tazas, hervir 20 min</li>
          <li>3. Pollo — 2 kg pechuga, sartén 7min/lado</li>
          <li>4. Huevos duros — 10 huevos, 12 min</li>
          <li>5. Verduras — Picar nopales, jitomates, pepinos</li>
          <li>6. Snacks — 5 bolsitas cacahuates + 10 plátanos + barras</li>
        </ul>
      </div>
    </div>
  );
}
