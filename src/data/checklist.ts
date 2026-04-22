export type ChecklistCategory = 'morning' | 'skincare' | 'diet' | 'gym' | 'facial' | 'hair' | 'medication' | 'sleep';

export interface ChecklistItemDef {
  id: string;
  label: string;
  category: ChecklistCategory;
  icon: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening';
}

export const checklistItems: ChecklistItemDef[] = [
  // MAÑANA
  { id: 'wake-530', label: 'Despertar 5:30 + tender cama', category: 'morning', icon: '⏰', timeOfDay: 'morning' },
  { id: 'skincare-am', label: 'Skincare AM + Eucerin 50+', category: 'skincare', icon: '🧴', timeOfDay: 'morning' },
  { id: 'oratane', label: 'ORATANE + OMEGA-3 con desayuno (CON GRASA)', category: 'medication', icon: '💊', timeOfDay: 'morning' },
  { id: 'breakfast', label: 'Desayuno 670 kcal + 32g prot', category: 'diet', icon: '🍳', timeOfDay: 'morning' },
  { id: 'facial-am', label: 'Ej. faciales 5 min + estiramientos postura 5 min', category: 'facial', icon: '💪', timeOfDay: 'morning' },
  { id: 'n8n-capcut', label: '1hr 20min n8n o CapCut', category: 'morning', icon: '💻', timeOfDay: 'morning' },

  // DÍA
  { id: 'cicavit', label: 'Cicavit labios cada 2-3 hrs', category: 'skincare', icon: '👄', timeOfDay: 'afternoon' },
  { id: 'snack', label: 'Snack: plátanos + cacahuates + barra + huevo', category: 'diet', icon: '🥜', timeOfDay: 'afternoon' },
  { id: 'mewing', label: 'Mewing todo el día + chicle 20 min', category: 'facial', icon: '👅', timeOfDay: 'afternoon' },
  { id: 'water', label: '3.5 litros agua + 1 agua de coco', category: 'diet', icon: '💧', timeOfDay: 'afternoon' },
  { id: 'no-dairy', label: 'CERO lácteos/refrescos/azúcar', category: 'diet', icon: '🚫', timeOfDay: 'afternoon' },
  { id: 'lunch', label: 'Comida: pechuga + arroz + frijoles', category: 'diet', icon: '🍗', timeOfDay: 'afternoon' },

  // GYM
  { id: 'pre-gym', label: 'Pre-gym: avena + plátano + crema cacahuate', category: 'diet', icon: '🥣', timeOfDay: 'afternoon' },
  { id: 'gym', label: 'Movilidad 5 min + GYM al FALLO + ANOTAR PESOS', category: 'gym', icon: '🏋️', timeOfDay: 'afternoon' },
  { id: 'belt-rule', label: 'Faja SOLO sentadilla/peso muerto', category: 'gym', icon: '🔒', timeOfDay: 'afternoon' },

  // NOCHE
  { id: 'dinner', label: 'Cena: 2 latas atún + tortillas + aguacate', category: 'diet', icon: '🐟', timeOfDay: 'evening' },
  { id: 'skincare-pm', label: 'Skincare PM + Sertralina + aceite ricino (masaje 2 min/ceja)', category: 'skincare', icon: '🌙', timeOfDay: 'evening' },
  { id: 'ice-facial', label: 'Hielo 5 min + ej. faciales + estiramientos postura', category: 'facial', icon: '🧊', timeOfDay: 'evening' },
  { id: 'screens-off', label: 'Pantallas OFF 9:00 PM. Cuarto oscuro.', category: 'sleep', icon: '📵', timeOfDay: 'evening' },
  { id: 'hair-care', label: 'NO cortar pelo + acondicionador', category: 'hair', icon: '💇', timeOfDay: 'evening' },
  { id: 'no-pluck', label: 'NO arrancar pelitos cejas', category: 'hair', icon: '🚫', timeOfDay: 'evening' },
  { id: 'sleep', label: 'DORMIR 9:30 PM = 8 hrs', category: 'sleep', icon: '😴', timeOfDay: 'evening' },
];

export const categoryLabels: Record<ChecklistCategory, string> = {
  morning: 'Mañana',
  skincare: 'Skincare',
  diet: 'Dieta',
  gym: 'Gym',
  facial: 'Ejercicios Faciales',
  hair: 'Pelo & Cejas',
  medication: 'Medicamentos',
  sleep: 'Sueño',
};

export const categoryColors: Record<ChecklistCategory, string> = {
  morning: 'border-amber-400',
  skincare: 'border-violet-400',
  diet: 'border-green-400',
  gym: 'border-red-400',
  facial: 'border-cyan-400',
  hair: 'border-orange-400',
  medication: 'border-blue-400',
  sleep: 'border-indigo-400',
};
