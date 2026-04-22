export interface ScheduleBlock {
  time: string;
  activity: string;
  notes: string;
  category: 'hygiene' | 'meal' | 'gym' | 'skincare' | 'work' | 'school' | 'rest';
  duration: number;
}

export const weekdaySchedule: ScheduleBlock[] = [
  { time: '5:30', activity: 'Despertar + tender cama', notes: '', category: 'hygiene', duration: 5 },
  { time: '5:35', activity: 'Skincare AM + Eucerin 50+ + Cicavit', notes: '', category: 'skincare', duration: 10 },
  { time: '5:45', activity: 'Cocinar + desayuno + ORATANE + OMEGA-3', notes: 'CON GRASA', category: 'meal', duration: 15 },
  { time: '6:00', activity: 'Ej. faciales 5 min + estiramientos postura 5 min', notes: '', category: 'gym', duration: 10 },
  { time: '6:10', activity: 'n8n (L/M/V) o CapCut (M/J)', notes: '1hr 20min', category: 'work', duration: 80 },
  { time: '7:30', activity: 'Quehacer 15 min', notes: '', category: 'hygiene', duration: 15 },
  { time: '7:50', activity: 'Traslado servicio', notes: '10 min', category: 'rest', duration: 10 },
  { time: '8:00', activity: 'Servicio Social', notes: 'Mewing', category: 'school', duration: 60 },
  { time: '9:00', activity: 'Traslado escuela', notes: '+ Cicavit', category: 'rest', duration: 10 },
  { time: '9:10', activity: 'Escuela', notes: 'Mewing', category: 'school', duration: 50 },
  { time: '10:00', activity: 'Snack: 2 plátanos + cacahuates + barra + huevo', notes: '~550 kcal', category: 'meal', duration: 15 },
  { time: '12:00', activity: 'Chicle duro 20 min', notes: '', category: 'gym', duration: 20 },
  { time: '14:00', activity: 'Comida: pechuga + arroz + frijoles + tortillas', notes: '~900 kcal', category: 'meal', duration: 30 },
  { time: '18:00', activity: 'Sale escuela → casa', notes: '10 min', category: 'rest', duration: 10 },
  { time: '18:10', activity: 'Pre-gym: avena + plátano + crema cacahuate', notes: '~500 kcal', category: 'meal', duration: 10 },
  { time: '18:20', activity: 'Traslado gym', notes: '10 min', category: 'rest', duration: 10 },
  { time: '18:30', activity: 'Movilidad 5 min + GYM 1.5 hrs + cuello', notes: 'ANOTAR PESOS', category: 'gym', duration: 90 },
  { time: '20:00', activity: 'Traslado casa', notes: '10 min', category: 'rest', duration: 10 },
  { time: '20:10', activity: 'Baño', notes: '', category: 'hygiene', duration: 10 },
  { time: '20:20', activity: 'Cena: 2 latas atún + ensalada + tortillas', notes: '~600 kcal', category: 'meal', duration: 15 },
  { time: '20:35', activity: 'Tarea 15 min', notes: '', category: 'school', duration: 15 },
  { time: '20:50', activity: 'n8n / CapCut 20 min', notes: '', category: 'work', duration: 20 },
  { time: '21:10', activity: 'Skincare PM + Regenue (L/M/V) + Sertralina', notes: '+ Aceite ricino cejas', category: 'skincare', duration: 5 },
  { time: '21:15', activity: 'Hielo 5 min + ej. faciales + estiramientos', notes: '', category: 'gym', duration: 10 },
  { time: '21:25', activity: 'Pantallas APAGADAS. Cuarto oscuro.', notes: 'Calidad de sueño', category: 'rest', duration: 5 },
  { time: '21:30', activity: 'DORMIR → 5:30 = 8 HORAS', notes: 'GH se libera en sueño profundo', category: 'rest', duration: 480 },
];

export const categoryScheduleColors: Record<string, string> = {
  hygiene: 'bg-blue-500/20 border-blue-400',
  meal: 'bg-green-500/20 border-green-400',
  gym: 'bg-red-500/20 border-red-400',
  skincare: 'bg-violet-500/20 border-violet-400',
  work: 'bg-orange-500/20 border-orange-400',
  school: 'bg-cyan-500/20 border-cyan-400',
  rest: 'bg-slate-500/20 border-slate-500',
};
