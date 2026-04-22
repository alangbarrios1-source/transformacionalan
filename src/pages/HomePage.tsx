import { useChecklist } from '../hooks/useChecklist';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { ProgressRing } from '../components/ProgressRing';
import { ChecklistItem } from '../components/ChecklistItem';
import { checklistItems } from '../data/checklist';
import { getDayName, getDayOfWeek } from '../utils/dates';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';

const quotes = [
  'Julio 2026: irreconocible. Vamos, Alan.',
  'Cada día cuenta. Sin excusas.',
  'La disciplina le gana al talento.',
  'Hoy es el día que tu yo del futuro agradecerá.',
  'No pares. La transformación ya empezó.',
  'Más fuerte que ayer. Siempre.',
  'El dolor es temporal. Los resultados son permanentes.',
  '90 días. Sin fallar. Sin detenerte.',
];

export function HomePage() {
  const { items, toggle, completedCount, totalCount, percentage, loaded } = useChecklist();
  const { month, dayOfPlan } = useCurrentMonth();
  const progress = useProgress();
  const navigate = useNavigate();

  const todayQuote = quotes[new Date().getDate() % quotes.length];
  const dayName = getDayName(getDayOfWeek());

  if (!loaded) return <div className="pt-8 text-center text-text-muted">Cargando...</div>;

  const morningItems = checklistItems.filter((i) => i.timeOfDay === 'morning');
  const afternoonItems = checklistItems.filter((i) => i.timeOfDay === 'afternoon');
  const eveningItems = checklistItems.filter((i) => i.timeOfDay === 'evening');

  return (
    <div className="pt-6 pb-4 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-text-muted uppercase tracking-wider">{dayName} · Día {dayOfPlan} de 90 · Mes {month}</p>
        <p className="text-sm text-accent mt-1 italic">"{todayQuote}"</p>
      </div>

      {/* Progress Ring + Streak */}
      <div className="flex flex-col items-center gap-3">
        <ProgressRing percentage={percentage} />
        <div className="flex gap-4 text-center">
          <div>
            <span className="text-2xl font-bold text-amber-400">🔥 {progress.streak}</span>
            <p className="text-[10px] text-text-muted">racha</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-text-primary">{completedCount}/{totalCount}</span>
            <p className="text-[10px] text-text-muted">hábitos</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-green-400">{progress.weeklyAverage}%</span>
            <p className="text-[10px] text-text-muted">semanal</p>
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="flex gap-2">
        <button onClick={() => navigate('/schedule')} className="flex-1 bg-bg-card border border-slate-700/50 rounded-xl py-2.5 text-xs text-text-secondary active:scale-95 transition-transform">
          📋 Horario
        </button>
        <button onClick={() => navigate('/settings')} className="flex-1 bg-bg-card border border-slate-700/50 rounded-xl py-2.5 text-xs text-text-secondary active:scale-95 transition-transform">
          ⚙️ Ajustes
        </button>
      </div>

      {/* Checklist */}
      <Section title="🌅 Mañana" items={morningItems} checkedItems={items} onToggle={toggle} />
      <Section title="☀️ Día" items={afternoonItems} checkedItems={items} onToggle={toggle} />
      <Section title="🌙 Noche" items={eveningItems} checkedItems={items} onToggle={toggle} />
    </div>
  );
}

function Section({ title, items: sectionItems, checkedItems, onToggle }: {
  title: string;
  items: typeof checklistItems;
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const done = sectionItems.filter((i) => checkedItems[i.id]).length;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-text-secondary">{title}</h2>
        <span className="text-xs text-text-muted">{done}/{sectionItems.length}</span>
      </div>
      <div className="space-y-2">
        {sectionItems.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            checked={!!checkedItems[item.id]}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
