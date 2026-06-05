import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressPhotos, type PhotoWithUrl } from '../hooks/useProgressPhotos';
import { formatDateShort } from '../utils/dates';
import { Spinner } from '../components/Spinner';

export function ProgressPhotosPage() {
  const navigate = useNavigate();
  const { photos, loaded, addPhoto, deletePhoto } = useProgressPhotos();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [viewer, setViewer] = useState<PhotoWithUrl | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      for (const file of Array.from(files)) {
        await addPhoto(file);
      }
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const oldest = photos[photos.length - 1];
  const latest = photos[0];

  return (
    <div className="min-h-screen bg-bg-primary pb-8">
      <div className="max-w-lg mx-auto px-4 pt-6 space-y-5 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/progress')} className="text-text-muted active:text-accent">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-text-primary">Fotos de progreso</h1>
        </div>

        {/* Add button */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={busy}
          className="w-full bg-accent/20 text-accent text-sm font-semibold py-3 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {busy ? (
            'Guardando...'
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Agregar foto
            </>
          )}
        </button>

        {!loaded && <Spinner />}

        {loaded && photos.length === 0 && (
          <div className="text-center text-text-muted text-sm py-12">
            <p className="text-4xl mb-3">📸</p>
            <p>Aún no tienes fotos.</p>
            <p className="text-xs mt-1">Toma una hoy para marcar tu punto de partida.</p>
          </div>
        )}

        {/* Comparación antes / después */}
        {loaded && photos.length >= 2 && (
          <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
            <h3 className="text-xs font-semibold text-accent mb-3">ANTES → DESPUÉS</h3>
            <div className="grid grid-cols-2 gap-3">
              <CompareTile label="Inicio" photo={oldest} onClick={() => setViewer(oldest)} />
              <CompareTile label="Ahora" photo={latest} onClick={() => setViewer(latest)} />
            </div>
          </div>
        )}

        {/* Galería */}
        {loaded && photos.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-text-secondary mb-3">
              Todas ({photos.length})
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {photos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setViewer(p)}
                  className="relative aspect-square rounded-lg overflow-hidden bg-bg-elevated active:scale-95 transition-transform"
                >
                  <img src={p.url} alt={p.date} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/50 text-[10px] text-white py-0.5 text-center">
                    {formatDateShort(p.date)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Visor a pantalla completa */}
      {viewer && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={() => setViewer(null)}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-sm text-text-secondary">{formatDateShort(viewer.date)}</span>
            <button onClick={() => setViewer(null)} className="text-white text-2xl leading-none px-2">
              ✕
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img src={viewer.url} alt={viewer.date} className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
          <div className="p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={async () => {
                if (confirm('¿Borrar esta foto?')) {
                  await deletePhoto(viewer.id);
                  setViewer(null);
                }
              }}
              className="w-full bg-danger/20 text-danger text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
            >
              🗑️ Borrar foto
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompareTile({ label, photo, onClick }: { label: string; photo: PhotoWithUrl; onClick: () => void }) {
  return (
    <button onClick={onClick} className="active:scale-95 transition-transform">
      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-elevated">
        <img src={photo.url} alt={label} className="w-full h-full object-cover" />
      </div>
      <p className="text-xs text-text-secondary mt-1">{label}</p>
      <p className="text-[10px] text-text-muted">{formatDateShort(photo.date)}</p>
    </button>
  );
}
