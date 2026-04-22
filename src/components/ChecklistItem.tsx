import { categoryColors, type ChecklistItemDef } from '../data/checklist';

interface Props {
  item: ChecklistItemDef;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistItem({ item, checked, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 p-3 rounded-xl border-l-4 transition-all duration-200 active:scale-[0.98] ${
        categoryColors[item.category]
      } ${checked ? 'bg-success/10' : 'bg-bg-card'}`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          checked
            ? 'bg-success border-success'
            : 'border-text-muted'
        }`}
      >
        {checked && (
          <svg className="w-4 h-4 text-bg-primary animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-lg mr-1">{item.icon}</span>
      <span className={`text-sm text-left flex-1 transition-all duration-200 ${checked ? 'text-text-muted line-through' : 'text-text-primary'}`}>
        {item.label}
      </span>
    </button>
  );
}
