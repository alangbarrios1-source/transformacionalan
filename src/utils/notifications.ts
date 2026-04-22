export interface ScheduledNotification {
  id: string;
  hour: number;
  minute: number;
  title: string;
  body: string;
  daysOfWeek: number[];
}

export const defaultNotifications: ScheduledNotification[] = [
  { id: 'wake', hour: 5, minute: 30, title: 'Arriba, Alan', body: 'Nuevo día. A romperla.', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'skincare-am', hour: 5, minute: 35, title: 'Skincare AM', body: 'SVR gel → Eucerin 50+ → Cicavit', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'breakfast', hour: 5, minute: 45, title: 'Desayuno', body: 'ORATANE con grasa + OMEGA-3', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'facial', hour: 6, minute: 0, title: 'Ej. faciales + postura', body: '5 min faciales + 5 min estiramientos', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'snack', hour: 10, minute: 0, title: 'Snack', body: '2 plátanos + cacahuates + barra + huevo duro', daysOfWeek: [1,2,3,4,5] },
  { id: 'gum', hour: 12, minute: 0, title: 'Chicle duro 20 min', body: 'Trabaja esos maseteros', daysOfWeek: [1,2,3,4,5] },
  { id: 'cicavit-1', hour: 13, minute: 0, title: 'Cicavit labios', body: 'Reaplica', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'lunch', hour: 14, minute: 0, title: 'Comida', body: 'Pechuga + arroz + frijoles + tortillas + aguacate', daysOfWeek: [1,2,3,4,5] },
  { id: 'cicavit-2', hour: 16, minute: 0, title: 'Cicavit labios', body: 'Reaplica', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'pre-gym', hour: 18, minute: 10, title: 'Pre-gym', body: 'Avena + plátano + crema cacahuate + miel', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'gym', hour: 18, minute: 20, title: 'Hora del gym', body: 'Lleva tu libreta. ANOTA PESOS.', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'dinner', hour: 20, minute: 20, title: 'Cena', body: '2 latas atún + tortillas + aguacate + ensalada', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'screens-warning', hour: 21, minute: 0, title: 'Pantallas OFF en 25 min', body: 'Empieza skincare PM', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'skincare-pm', hour: 21, minute: 10, title: 'Skincare PM', body: 'Sertralina + aceite ricino cejas (masaje 2 min)', daysOfWeek: [1,2,3,4,5,6] },
  { id: 'sleep', hour: 21, minute: 25, title: 'PANTALLAS APAGADAS', body: 'Cuarto oscuro. A dormir. GH se libera en sueño profundo.', daysOfWeek: [1,2,3,4,5,6] },
];

export function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) return Promise.resolve('denied' as NotificationPermission);
  return Notification.requestPermission();
}

export function scheduleNotifications(notifications: ScheduledNotification[], enabledIds: Set<string>) {
  const now = new Date();
  const dayOfWeek = now.getDay() === 0 ? 7 : now.getDay();
  const timeouts: number[] = [];

  for (const n of notifications) {
    if (!enabledIds.has(n.id)) continue;
    if (!n.daysOfWeek.includes(dayOfWeek)) continue;

    const target = new Date();
    target.setHours(n.hour, n.minute, 0, 0);
    const ms = target.getTime() - now.getTime();

    if (ms > 0) {
      const timeout = window.setTimeout(() => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'SHOW_NOTIFICATION',
            title: n.title,
            body: n.body,
          });
        } else if (Notification.permission === 'granted') {
          new Notification(n.title, { body: n.body, icon: '/icon-192.png' });
        }
      }, ms);
      timeouts.push(timeout);
    }
  }

  return timeouts;
}
