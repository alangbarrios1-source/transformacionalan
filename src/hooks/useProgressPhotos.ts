import { useState, useEffect, useCallback } from 'react';
import { db, type ProgressPhoto } from '../storage/db';
import { getTodayString } from '../utils/dates';
import { compressImage } from '../utils/image';

export interface PhotoWithUrl extends ProgressPhoto {
  id: number;
  url: string;
}

export function useProgressPhotos() {
  const [photos, setPhotos] = useState<PhotoWithUrl[]>([]);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async () => {
    const all = await db.progressPhotos.orderBy('date').reverse().toArray();
    setPhotos(
      all.map((p) => ({ ...p, id: p.id!, url: URL.createObjectURL(p.blob) }))
    );
    setLoaded(true);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Libera los object URLs del render anterior cuando la lista cambia o al desmontar.
  useEffect(() => {
    return () => {
      photos.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [photos]);

  const addPhoto = useCallback(
    async (file: File, note?: string) => {
      const blob = await compressImage(file);
      await db.progressPhotos.add({
        date: getTodayString(),
        blob,
        note,
        createdAt: Date.now(),
      });
      await load();
    },
    [load]
  );

  const deletePhoto = useCallback(
    async (id: number) => {
      await db.progressPhotos.delete(id);
      await load();
    },
    [load]
  );

  return { photos, loaded, addPhoto, deletePhoto };
}
