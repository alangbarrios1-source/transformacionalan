import { useState, useEffect, useCallback } from 'react';
import { db } from '../storage/db';
import { checklistItems } from '../data/checklist';
import { getTodayString } from '../utils/dates';

export function useChecklist() {
  const today = getTodayString();
  const [items, setItems] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    db.dailyChecklists.get(today).then((record) => {
      if (record) {
        setItems(record.items);
      } else {
        const fresh: Record<string, boolean> = {};
        checklistItems.forEach((i) => (fresh[i.id] = false));
        setItems(fresh);
      }
      setLoaded(true);
    });
  }, [today]);

  const toggle = useCallback(
    async (id: string) => {
      const newItems = { ...items, [id]: !items[id] };
      setItems(newItems);
      const completedCount = Object.values(newItems).filter(Boolean).length;
      await db.dailyChecklists.put({
        date: today,
        items: newItems,
        completedCount,
        totalCount: checklistItems.length,
      });
    },
    [items, today]
  );

  const completedCount = Object.values(items).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return { items, toggle, completedCount, totalCount, percentage, loaded };
}
