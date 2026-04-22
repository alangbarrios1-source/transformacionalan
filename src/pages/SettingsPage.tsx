import { useState } from 'react';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { useNotifications } from '../hooks/useNotifications';
import { db } from '../storage/db';
import { useNavigate } from 'react-router-dom';

export function SettingsPage() {
  const navigate = useNavigate();
  const { month, dayOfPlan, startDate, updateStartDate } = useCurrentMonth();
  const { permission, enabledIds, requestPermission, toggleNotification, toggleAll, notifications } = useNotifications();
  const [showNotifs, setShowNotifs] = useState(false);
  const [exportMsg, setExportMsg] = useState('');

  const handleExport = async () => {
    const checklists = await db.dailyChecklists.toArray();
    const weights = await db.weightLogs.toArray();
    const settings = await db.appSettings.toArray();
    const data = { checklists, weights, settings, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transform-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportMsg('Backup descargado');
    setTimeout(() => setExportMsg(''), 3000);
  };

  const handleClear = async () => {
    if (confirm('¿Borrar TODOS los datos? Esta acción no se puede deshacer.')) {
      await db.dailyChecklists.clear();
      await db.weightLogs.clear();
      await db.appSettings.clear();
      window.location.reload();
    }
  };

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Ajustes</h1>
      </div>

      {/* Plan Info */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <h3 className="text-xs font-semibold text-accent">PLAN</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary">Mes actual</span>
          <span className="text-sm font-bold text-text-primary">Mes {month}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary">Día del plan</span>
          <span className="text-sm font-bold text-text-primary">{dayOfPlan} de 90</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-sm text-text-secondary">Fecha de inicio</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => updateStartDate(e.target.value)}
            className="bg-bg-elevated text-text-primary text-sm rounded-lg px-2 py-1 border border-slate-600 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-accent">NOTIFICACIONES</h3>
          <span className="text-xs text-text-muted">
            {permission === 'granted' ? '✅ Activas' : permission === 'denied' ? '❌ Bloqueadas' : '⏳ Sin permiso'}
          </span>
        </div>

        {permission !== 'granted' && (
          <button
            onClick={requestPermission}
            className="w-full bg-accent/20 text-accent text-sm py-2 rounded-lg active:scale-95 transition-transform"
          >
            Activar notificaciones
          </button>
        )}

        {permission === 'granted' && (
          <>
            <div className="flex gap-2">
              <button
                onClick={() => toggleAll(true)}
                className="flex-1 bg-success/20 text-success text-xs py-2 rounded-lg"
              >
                Activar todas
              </button>
              <button
                onClick={() => toggleAll(false)}
                className="flex-1 bg-danger/20 text-danger text-xs py-2 rounded-lg"
              >
                Desactivar todas
              </button>
            </div>

            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className="w-full text-left text-xs text-text-muted py-1"
            >
              {showNotifs ? '▼' : '▶'} {enabledIds.size}/{notifications.length} activas · Personalizar
            </button>

            {showNotifs && (
              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => toggleNotification(n.id)}
                    className="w-full flex items-center gap-2 text-left py-1.5"
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      enabledIds.has(n.id) ? 'bg-accent border-accent' : 'border-text-muted'
                    }`}>
                      {enabledIds.has(n.id) && (
                        <svg className="w-3 h-3 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-text-muted font-mono w-10">{String(n.hour).padStart(2, '0')}:{String(n.minute).padStart(2, '0')}</span>
                    <span className="text-xs text-text-secondary flex-1">{n.title}</span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Data */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <h3 className="text-xs font-semibold text-accent">DATOS</h3>
        <button
          onClick={handleExport}
          className="w-full bg-bg-elevated text-text-primary text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          📥 Exportar datos (JSON)
        </button>
        {exportMsg && <p className="text-xs text-success text-center">{exportMsg}</p>}
        <button
          onClick={handleClear}
          className="w-full bg-danger/20 text-danger text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          🗑️ Borrar todos los datos
        </button>
      </div>
    </div>
  );
}
