import { useState, useEffect } from 'react';
import { db } from '../storage/db';
import { getCurrentMonth, getDayOfPlan } from '../utils/periodization';

const DEFAULT_START = '2026-06-05';

export function useCurrentMonth() {
  const [month, setMonth] = useState<1 | 2 | 3>(1);
  const [dayOfPlan, setDayOfPlan] = useState(1);
  const [startDate, setStartDate] = useState(DEFAULT_START);

  useEffect(() => {
    db.appSettings.get('startDate').then((setting) => {
      const sd = setting?.value || DEFAULT_START;
      setStartDate(sd);
      setMonth(getCurrentMonth(sd));
      setDayOfPlan(getDayOfPlan(sd));
    });
  }, []);

  const updateStartDate = async (newDate: string) => {
    await db.appSettings.put({ key: 'startDate', value: newDate });
    setStartDate(newDate);
    setMonth(getCurrentMonth(newDate));
    setDayOfPlan(getDayOfPlan(newDate));
  };

  return { month, dayOfPlan, startDate, updateStartDate };
}
