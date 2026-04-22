import { useState, useEffect, useCallback } from 'react';
import { db, type WeightLogEntry } from '../storage/db';
import { getTodayString } from '../utils/dates';

export function useWeightLog(exerciseId: string) {
  const today = getTodayString();
  const [todayEntry, setTodayEntry] = useState<WeightLogEntry | null>(null);
  const [lastEntry, setLastEntry] = useState<WeightLogEntry | null>(null);
  const [history, setHistory] = useState<WeightLogEntry[]>([]);

  const load = useCallback(async () => {
    const entries = await db.weightLogs
      .where('exerciseId')
      .equals(exerciseId)
      .reverse()
      .sortBy('date');

    setHistory(entries);

    const todayLog = entries.find((e) => e.date === today);
    setTodayEntry(todayLog || null);

    const previous = entries.find((e) => e.date !== today);
    setLastEntry(previous || null);
  }, [exerciseId, today]);

  useEffect(() => {
    load();
  }, [load]);

  const saveEntry = useCallback(
    async (sets: { setNumber: number; weight: number; reps: number }[]) => {
      if (todayEntry?.id) {
        await db.weightLogs.update(todayEntry.id, { sets });
      } else {
        await db.weightLogs.add({ date: today, exerciseId, sets });
      }
      await load();
    },
    [todayEntry, today, exerciseId, load]
  );

  return { todayEntry, lastEntry, history, saveEntry };
}

export function useAllWeightLogs() {
  const [logs, setLogs] = useState<WeightLogEntry[]>([]);

  useEffect(() => {
    db.weightLogs.toArray().then(setLogs);
  }, []);

  return logs;
}
