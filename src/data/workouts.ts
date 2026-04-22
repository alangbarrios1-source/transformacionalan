export interface ExerciseDef {
  id: string;
  name: string;
  muscleGroup: string;
  sets: { month1: number; month2: number; month3: number };
  reps: string;
  technique: string;
  useBelt: boolean;
  isWarmup?: boolean;
}

export interface WorkoutDay {
  dayOfWeek: number;
  name: string;
  focus: string;
  exercises: ExerciseDef[];
}

export const workouts: WorkoutDay[] = [
  {
    dayOfWeek: 1,
    name: 'PUSH',
    focus: 'Pecho, Hombros, Tríceps',
    exercises: [
      { id: 'bench-press', name: 'Press banca barra', muscleGroup: 'Pecho', sets: { month1: 2, month2: 3, month3: 3 }, reps: '6-8', technique: 'Tempo 3-1-0. M3: rest pause último set', useBelt: false, isWarmup: true },
      { id: 'incline-db-press', name: 'Press inclinado mancuernas', muscleGroup: 'Pecho Superior', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: 'Pecho superior', useBelt: false },
      { id: 'machine-fly', name: 'Aperturas en máquina', muscleGroup: 'Pecho', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'M2+: dropset último set', useBelt: false },
      { id: 'dips', name: 'Fondos', muscleGroup: 'Pecho/Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: 'Al fallo', technique: '', useBelt: false },
      { id: 'db-ohp', name: 'Press militar mancuerna', muscleGroup: 'Hombros', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: 'Hombros anchos', useBelt: false },
      { id: 'cable-lateral', name: 'Laterales en polea', muscleGroup: 'Hombros', sets: { month1: 2, month2: 2, month3: 3 }, reps: '12-15', technique: 'DROPSET siempre', useBelt: false },
      { id: 'overhead-ext', name: 'Extensiones tras nuca', muscleGroup: 'Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: '', useBelt: false },
      { id: 'tricep-pushdown', name: 'Extensiones tríceps polea', muscleGroup: 'Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'M2+: rest pause', useBelt: false },
      { id: 'skull-crusher', name: 'Press francés', muscleGroup: 'Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Tempo 3-1-0', useBelt: false },
    ],
  },
  {
    dayOfWeek: 2,
    name: 'PULL + CUELLO',
    focus: 'Espalda, Bíceps, Cuello',
    exercises: [
      { id: 'pullups', name: 'DOMINADAS (o jalón con banda)', muscleGroup: 'Espalda', sets: { month1: 3, month2: 3, month3: 3 }, reps: 'Al fallo', technique: 'OBLIGATORIO. #1 para V-taper. Banda si no puedes.', useBelt: false },
      { id: 'close-grip-pulldown', name: 'Jalón agarre cerrado', muscleGroup: 'Espalda', sets: { month1: 2, month2: 2, month3: 3 }, reps: '8-10', technique: '', useBelt: false },
      { id: 't-bar-row', name: 'Remo en T', muscleGroup: 'Espalda', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: 'Tempo 3-1-0', useBelt: false },
      { id: 'machine-row', name: 'Remo en máquina', muscleGroup: 'Espalda', sets: { month1: 2, month2: 2, month3: 3 }, reps: '8-10', technique: 'Squeeze 2s arriba', useBelt: false },
      { id: 'pullover', name: 'Pull over', muscleGroup: 'Espalda', sets: { month1: 2, month2: 2, month3: 2 }, reps: '10-12', technique: 'Caja torácica', useBelt: false },
      { id: 'face-pull', name: 'Face pull', muscleGroup: 'Espalda/Hombros', sets: { month1: 2, month2: 2, month3: 2 }, reps: '15-20', technique: 'Postura', useBelt: false },
      { id: 'barbell-curl', name: 'Curl barra Z', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '8-10', technique: 'Tempo 3-1-0', useBelt: false },
      { id: 'hammer-curl', name: 'Curl martillo', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'M2+: dropset', useBelt: false },
      { id: 'incline-curl', name: 'Curl inclinado', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 2 }, reps: '10-12', technique: 'Estiramiento', useBelt: false },
      { id: 'neck-flexion', name: 'CUELLO flexión', muscleGroup: 'Cuello', sets: { month1: 3, month2: 3, month3: 3 }, reps: '15-20', technique: 'Sem1: 2.5kg → Sem3: 5kg → Sem6: 7.5kg', useBelt: false },
      { id: 'neck-extension', name: 'CUELLO extensión', muscleGroup: 'Cuello', sets: { month1: 3, month2: 3, month3: 3 }, reps: '15-20', technique: 'Misma progresión', useBelt: false },
      { id: 'neck-lateral', name: 'CUELLO lateral', muscleGroup: 'Cuello', sets: { month1: 2, month2: 2, month3: 2 }, reps: '15/lado', technique: 'Progresa 0.5-1kg por semana', useBelt: false },
    ],
  },
  {
    dayOfWeek: 3,
    name: 'LEGS',
    focus: 'Pierna completa + Core',
    exercises: [
      { id: 'squat', name: 'Sentadilla barra', muscleGroup: 'Cuádriceps', sets: { month1: 2, month2: 3, month3: 3 }, reps: '6-8', technique: 'Tempo 3-1-0', useBelt: true, isWarmup: true },
      { id: 'leg-press', name: 'Prensa pierna', muscleGroup: 'Cuádriceps', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: '', useBelt: false },
      { id: 'lunges', name: 'Desplantes mancuernas', muscleGroup: 'Cuádriceps/Glúteos', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10/pierna', technique: '', useBelt: false },
      { id: 'rdl', name: 'Peso muerto rumano', muscleGroup: 'Isquiotibiales', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: '', useBelt: true },
      { id: 'leg-extension', name: 'Extensión cuádriceps', muscleGroup: 'Cuádriceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'M2+: dropset', useBelt: false },
      { id: 'leg-curl', name: 'Curl femoral', muscleGroup: 'Isquiotibiales', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'M2+: dropset', useBelt: false },
      { id: 'calf-raise', name: 'Elevación pantorrilla', muscleGroup: 'Pantorrillas', sets: { month1: 3, month2: 3, month3: 3 }, reps: '15-20', technique: 'Rango completo', useBelt: false },
      { id: 'plank', name: 'Plancha', muscleGroup: 'Core', sets: { month1: 3, month2: 3, month3: 3 }, reps: '45-60s', technique: 'SIN FAJA. Core fuerte = cintura chica', useBelt: false },
      { id: 'neck-maintenance', name: 'CUELLO (mantenimiento)', muscleGroup: 'Cuello', sets: { month1: 2, month2: 2, month3: 2 }, reps: '15-20', technique: 'Flexión + extensión ligero', useBelt: false },
    ],
  },
  {
    dayOfWeek: 4,
    name: 'PUSH var',
    focus: 'Pecho, Hombros, Tríceps (variante)',
    exercises: [
      { id: 'incline-bb-press', name: 'Press inclinado barra', muscleGroup: 'Pecho Superior', sets: { month1: 2, month2: 3, month3: 3 }, reps: '6-8', technique: '', useBelt: false, isWarmup: true },
      { id: 'flat-db-press', name: 'Press plano mancuernas', muscleGroup: 'Pecho', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: 'Tempo 3-1-0', useBelt: false },
      { id: 'dips-v2', name: 'Fondos', muscleGroup: 'Pecho/Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: 'Al fallo', technique: '', useBelt: false },
      { id: 'machine-fly-v2', name: 'Aperturas máquina', muscleGroup: 'Pecho', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Dropset', useBelt: false },
      { id: 'barbell-ohp', name: 'Press militar barra', muscleGroup: 'Hombros', sets: { month1: 2, month2: 3, month3: 3 }, reps: '6-8', technique: '', useBelt: false },
      { id: 'cable-lateral-v2', name: 'Laterales polea', muscleGroup: 'Hombros', sets: { month1: 2, month2: 2, month3: 3 }, reps: '12-15', technique: 'DROPSET siempre', useBelt: false },
      { id: 'skull-crusher-v2', name: 'Press francés', muscleGroup: 'Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: '', useBelt: false },
      { id: 'tricep-pushdown-v2', name: 'Extensiones tríceps', muscleGroup: 'Tríceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Rest pause', useBelt: false },
    ],
  },
  {
    dayOfWeek: 5,
    name: 'PULL var + CUELLO',
    focus: 'Espalda, Bíceps, Cuello (variante)',
    exercises: [
      { id: 'pullups-v2', name: 'DOMINADAS', muscleGroup: 'Espalda', sets: { month1: 3, month2: 3, month3: 3 }, reps: 'Al fallo', technique: 'OBLIGATORIO', useBelt: false },
      { id: 't-bar-row-v2', name: 'Remo en T', muscleGroup: 'Espalda', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8-10', technique: '', useBelt: false },
      { id: 'machine-row-v2', name: 'Remo máquina', muscleGroup: 'Espalda', sets: { month1: 2, month2: 2, month3: 3 }, reps: '8-10', technique: '', useBelt: false },
      { id: 'pullover-v2', name: 'Pull over', muscleGroup: 'Espalda', sets: { month1: 2, month2: 2, month3: 2 }, reps: '10-12', technique: '', useBelt: false },
      { id: 'face-pull-v2', name: 'Face pull', muscleGroup: 'Espalda/Hombros', sets: { month1: 2, month2: 2, month3: 2 }, reps: '15-20', technique: '', useBelt: false },
      { id: 'barbell-curl-v2', name: 'Curl barra Z', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '8-10', technique: '', useBelt: false },
      { id: 'hammer-curl-v2', name: 'Curl martillo', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Dropset', useBelt: false },
      { id: 'incline-curl-v2', name: 'Curl inclinado', muscleGroup: 'Bíceps', sets: { month1: 2, month2: 2, month3: 2 }, reps: '10-12', technique: '', useBelt: false },
      { id: 'neck-full', name: 'CUELLO 4 direcciones', muscleGroup: 'Cuello', sets: { month1: 3, month2: 3, month3: 3 }, reps: '15-20', technique: 'Sesión completa', useBelt: false },
    ],
  },
  {
    dayOfWeek: 6,
    name: 'LEGS (Sábado)',
    focus: 'Pierna + Caminata inclinada',
    exercises: [
      { id: 'bulgarian-split', name: 'Sentadilla búlgara', muscleGroup: 'Cuádriceps/Glúteos', sets: { month1: 2, month2: 3, month3: 3 }, reps: '8/pierna', technique: '', useBelt: false },
      { id: 'hip-thrust', name: 'Hip thrust', muscleGroup: 'Glúteos', sets: { month1: 2, month2: 3, month3: 3 }, reps: '10-12', technique: '', useBelt: false },
      { id: 'leg-extension-v2', name: 'Ext. cuádriceps', muscleGroup: 'Cuádriceps', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Dropset', useBelt: false },
      { id: 'leg-curl-v2', name: 'Curl femoral', muscleGroup: 'Isquiotibiales', sets: { month1: 2, month2: 2, month3: 3 }, reps: '10-12', technique: 'Dropset', useBelt: false },
      { id: 'farmer-walk', name: 'Caminata granjero', muscleGroup: 'Core/Agarre', sets: { month1: 3, month2: 3, month3: 3 }, reps: '30s', technique: '', useBelt: false },
      { id: 'crunch', name: 'Crunch', muscleGroup: 'Core', sets: { month1: 3, month2: 3, month3: 3 }, reps: '15-20', technique: 'SIN FAJA. NO oblicuos con peso', useBelt: false },
      { id: 'incline-walk', name: 'Caminata inclinada 15 min', muscleGroup: 'Cardio', sets: { month1: 1, month2: 1, month3: 1 }, reps: '15 min', technique: 'Reemplaza HIIT. No come músculo.', useBelt: false },
    ],
  },
];

export const warmups: Record<string, string[]> = {
  Push: ['Círculos de hombros × 20', 'Rotación interna/externa con banda × 15', 'Dislocaciones con palo × 10'],
  Pull: ['Círculos de hombros × 20', 'Colgarse de barra 20s × 2', 'Rotaciones de muñeca × 15'],
  Legs: ['Sentadilla sin peso × 15', 'Círculos de cadera × 10/lado', 'Estiramiento de cadera 30s/lado'],
};

export const periodization = [
  { month: 1, name: 'TÉCNICA', focus: 'Tempo 3-1-0 estricto. Aprender fallo real. Anotar pesos.', note: 'Domina la forma. No subas peso si la técnica falla.' },
  { month: 2, name: 'VOLUMEN', focus: 'Mismo tempo + empieza dropsets en último set', note: 'Sube peso cuando puedas hacer 3 series limpias' },
  { month: 3, name: 'INTENSIDAD', focus: 'Dropsets, rest-pause, negativas lentas en CADA ejercicio', note: 'Pesos máximos + técnicas avanzadas' },
];
