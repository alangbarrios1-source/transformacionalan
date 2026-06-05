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

export interface ProgressPhoto {
  id?: number;
  date: string;
  blob: Blob;
  note?: string;
  createdAt: number;
}

class TransformDB extends Dexie {
  dailyChecklists!: Table<DailyChecklist, string>;
  weightLogs!: Table<WeightLogEntry, number>;
  appSettings!: Table<AppSetting, string>;
  progressPhotos!: Table<ProgressPhoto, number>;

  constructor() {
    super('TransformApp');
    this.version(1).stores({
      dailyChecklists: 'date',
      weightLogs: '++id, date, exerciseId, [exerciseId+date]',
      appSettings: 'key',
    });
    this.version(2).stores({
      dailyChecklists: 'date',
      weightLogs: '++id, date, exerciseId, [exerciseId+date]',
      appSettings: 'key',
      progressPhotos: '++id, date, createdAt',
    });
  }
}

export const db = new TransformDB();
