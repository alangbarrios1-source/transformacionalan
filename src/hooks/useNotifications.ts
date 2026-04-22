import { useState, useEffect } from 'react';
import { db } from '../storage/db';
import { defaultNotifications, requestNotificationPermission, scheduleNotifications } from '../utils/notifications';

export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [enabledIds, setEnabledIds] = useState<Set<string>>(new Set(defaultNotifications.map((n) => n.id)));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
    db.appSettings.get('notificationIds').then((setting) => {
      if (setting?.value) {
        setEnabledIds(new Set(setting.value));
      }
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded || permission !== 'granted') return;
    const timeouts = scheduleNotifications(defaultNotifications, enabledIds);
    return () => timeouts.forEach(clearTimeout);
  }, [loaded, permission, enabledIds]);

  const requestPermission = async () => {
    const result = await requestNotificationPermission();
    setPermission(result);
    return result;
  };

  const toggleNotification = async (id: string) => {
    const next = new Set(enabledIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setEnabledIds(next);
    await db.appSettings.put({ key: 'notificationIds', value: Array.from(next) });
  };

  const toggleAll = async (enabled: boolean) => {
    const next = enabled ? new Set(defaultNotifications.map((n) => n.id)) : new Set<string>();
    setEnabledIds(next);
    await db.appSettings.put({ key: 'notificationIds', value: Array.from(next) });
  };

  return { permission, enabledIds, requestPermission, toggleNotification, toggleAll, notifications: defaultNotifications };
}
