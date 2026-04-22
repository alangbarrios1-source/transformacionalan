import { useState } from 'react';
import { morningRoutine, nightRoutine, medications, orataneRules, eyebrowTechnique } from '../data/skincare';

export function SkincarePage() {
  const [tab, setTab] = useState<'am' | 'pm'>('am');

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Skincare</h1>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('am')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'am' ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' : 'bg-bg-card text-text-muted border border-slate-700/50'
          }`}
        >
          ☀️ Mañana (5:35)
        </button>
        <button
          onClick={() => setTab('pm')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'pm' ? 'bg-indigo-400/20 text-indigo-400 border border-indigo-400/30' : 'bg-bg-card text-text-muted border border-slate-700/50'
          }`}
        >
          🌙 Noche (9:10)
        </button>
      </div>

      {/* Routine */}
      <div className="space-y-2">
        {(tab === 'am' ? morningRoutine : nightRoutine).map((step) => (
          <div key={step.step} className="bg-bg-card rounded-xl p-4 border border-slate-700/50 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-skincare/20 text-skincare flex items-center justify-center text-sm font-bold flex-shrink-0">
              {step.step}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-text-primary">{step.product}</h4>
              {step.frequency && <span className="text-[10px] text-skincare">{step.frequency}</span>}
              <p className="text-xs text-text-secondary mt-1">{step.how}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Medications */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">MEDICAMENTOS + SUPLEMENTO</h3>
        <div className="space-y-3">
          {medications.map((med, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-lg">💊</span>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{med.name}</h4>
                <p className="text-xs text-text-muted">{med.dose} · {med.when}</p>
                {med.rule && <p className="text-xs text-amber-400 mt-0.5">{med.rule}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Oratane Rules */}
      <div className="bg-danger/10 rounded-xl p-4 border border-danger/30">
        <h3 className="text-xs font-semibold text-danger mb-2">REGLAS ORATANE</h3>
        <ul className="space-y-2">
          {orataneRules.map((r, i) => (
            <li key={i} className="text-xs">
              <span className="text-danger font-medium">{r.rule}</span>
              <span className="text-text-muted ml-1">— {r.reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Eyebrow Technique */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-skincare mb-2">CEJAS — TÉCNICA ACEITE DE RICINO</h3>
        <ol className="space-y-1.5">
          {eyebrowTechnique.map((step, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-2">
              <span className="text-skincare font-bold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
