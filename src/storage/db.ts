import Dexie, { type Table } from 'dexie';

export interface DailyChecklist {
  date: string;
  items: Record<string, boolean>;
  completedCount: number;
  totalCount: number;
}

export interface WeightLogEntry {
  id?: number;
  date: string;
  exerciseId: string;
  sets: { setNumber: number; weight: number; reps: number }[];
}

export interface AppSetting {
  key: string;
  value: any;
}

class TransformDB extends Dexie {
  dailyChecklists!: Table<DailyChecklist, string>;
  weightLogs!: Table<WeightLogEntry, number>;
  appSettings!: Table<AppSetting, string>;

  constructor() {
    super('TransformApp');
    this.version(1).stores({
      dailyChecklists: 'date',
      weightLogs: '++id, date, exerciseId, [exerciseId+date]',
      appSettings: 'key',
    });
  }
}

export const db = new TransformDB();
