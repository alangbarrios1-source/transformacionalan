import { useState, useEffect } from 'react';
import { db, type DailyChecklist } from '../storage/db';
import { getDateNDaysAgo } from '../utils/dates';

export interface ProgressData {
  streak: number;
  bestStreak: number;
  last90Days: { date: string; percentage: number }[];
  weeklyAverage: number;
}

export function useProgress(): ProgressData {
  const [data, setData] = useState<ProgressData>({
    streak: 0,
    bestStreak: 0,
    last90Days: [],
    weeklyAverage: 0,
  });

  useEffect(() => {
    loadProgress().then(setData);
  }, []);

  return data;
}

async function loadProgress(): Promise<ProgressData> {
  const allRecords = await db.dailyChecklists.toArray();
  const map = new Map<string, DailyChecklist>();
  allRecords.forEach((r) => map.set(r.date, r));

  const last90Days: { date: string; percentage: number }[] = [];

  for (let i = 89; i >= 0; i--) {
    const date = getDateNDaysAgo(i);
    const record = map.get(date);
    const percentage = record && record.totalCount > 0
      ? Math.round((record.completedCount / record.totalCount) * 100)
      : 0;
    last90Days.push({ date, percentage });
  }

  let streak = 0;
  for (let i = 0; i < 90; i++) {
    const date = getDateNDaysAgo(i);
    const record = map.get(date);
    if (record && record.totalCount > 0 && record.completedCount / record.totalCount >= 0.5) {
      streak++;
    } else if (i === 0) {
      continue;
    } else {
      break;
    }
  }

  let bestStreak = 0;
  let currentStreak = 0;
  for (const day of last90Days) {
    if (day.percentage >= 50) {
      currentStreak++;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  const last7 = last90Days.slice(-7);
  const weeklyAverage = last7.length > 0
    ? Math.round(last7.reduce((sum, d) => sum + d.percentage, 0) / last7.length)
    : 0;

  return { streak, bestStreak, last90Days, weeklyAverage };
}
