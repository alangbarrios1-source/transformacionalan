import type { ExerciseDef } from '../data/workouts';

export function getCurrentMonth(startDate: string): 1 | 2 | 3 {
  const start = new Date(startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  if (daysSince < 30) return 1;
  if (daysSince < 60) return 2;
  return 3;
}

export function getExerciseSets(exercise: ExerciseDef, month: 1 | 2 | 3): number {
  return exercise.sets[`month${month}`];
}

export function getDayOfPlan(startDate: string): number {
  const start = new Date(startDate);
  const today = new Date();
  return Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}
