# Codigo fuente - Transformacion 90 Dias (PWA React + Vite + Tailwind + Dexie)

Estructura: app PWA en React 19 + TypeScript, Vite, TailwindCSS v4, IndexedDB via Dexie, React Router 7.

## package.json
```json
{
  "name": "app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "dexie": "^4.4.2",
    "dexie-react-hooks": "^4.4.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router-dom": "^7.14.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@tailwindcss/vite": "^4.2.4",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "tailwindcss": "^4.2.4",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.9",
    "vite-plugin-pwa": "^1.2.0"
  }
}
```

## index.html
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/icon-192.png" />
    <link rel="apple-touch-icon" href="/icon-192.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#0f172a" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>Transformación 90 Días</title>
  </head>
  <body class="bg-slate-900 text-slate-100">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Transformación 90 Días - Alan',
        short_name: 'Transform',
        description: 'Tu plan de transformación completo',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})
```

## tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## eslint.config.js
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
```

## src/App.tsx
```tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { GymPage } from './pages/GymPage';
import { DietPage } from './pages/DietPage';
import { SkincarePage } from './pages/SkincarePage';
import { ProgressPage } from './pages/ProgressPage';
import { SchedulePage } from './pages/SchedulePage';
import { SettingsPage } from './pages/SettingsPage';
import { WeightLogPage } from './pages/WeightLogPage';
import { ProgressPhotosPage } from './pages/ProgressPhotosPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/diet" element={<DietPage />} />
          <Route path="/skincare" element={<SkincarePage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Route>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/weight-log" element={<WeightLogPage />} />
        <Route path="/progress-photos" element={<ProgressPhotosPage />} />
      </Routes>
    </HashRouter>
  );
}
```

## src/components/BottomNav.tsx
```tsx
import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  { path: '/', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4' },
  { path: '/gym', label: 'Gym', icon: 'M4 6h16M4 12h16m-7 6h7M4 18h4' },
  { path: '/diet', label: 'Dieta', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
  { path: '/skincare', label: 'Piel', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { path: '/progress', label: 'Progreso', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-card border-t border-slate-700/50 pb-[env(safe-area-inset-bottom)] z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                active ? 'text-accent' : 'text-text-muted'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
              </svg>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
```

## src/components/ChecklistItem.tsx
```tsx
import { categoryColors, type ChecklistItemDef } from '../data/checklist';

interface Props {
  item: ChecklistItemDef;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistItem({ item, checked, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 p-3 rounded-xl border-l-4 transition-all duration-200 active:scale-[0.98] ${
        categoryColors[item.category]
      } ${checked ? 'bg-success/10' : 'bg-bg-card'}`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          checked
            ? 'bg-success border-success'
            : 'border-text-muted'
        }`}
      >
        {checked && (
          <svg className="w-4 h-4 text-bg-primary animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-lg mr-1">{item.icon}</span>
      <span className={`text-sm text-left flex-1 transition-all duration-200 ${checked ? 'text-text-muted line-through' : 'text-text-primary'}`}>
        {item.label}
      </span>
    </button>
  );
}
```

## src/components/ExerciseCard.tsx
```tsx
import type { ExerciseDef } from '../data/workouts';
import { getExerciseSets } from '../utils/periodization';
import { exerciseSvgs } from '../exercises';

interface Props {
  exercise: ExerciseDef;
  month: 1 | 2 | 3;
  onClick: () => void;
  lastWeight?: number;
}

export function ExerciseCard({ exercise, month, onClick, lastWeight }: Props) {
  const sets = getExerciseSets(exercise, month);
  const SvgIcon = exerciseSvgs[exercise.id];

  return (
    <button
      onClick={onClick}
      className="w-full bg-bg-card rounded-xl p-4 border border-slate-700/50 flex items-center gap-3 active:scale-[0.98] transition-transform"
    >
      <div className="w-14 h-14 bg-bg-elevated rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
        {SvgIcon ? <SvgIcon className="w-10 h-10" /> : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7M4 18h4" />
          </svg>
        )}
      </div>
      <div className="flex-1 text-left">
        <h4 className="text-sm font-semibold text-text-primary">{exercise.name}</h4>
        <p className="text-xs text-text-muted">{exercise.muscleGroup}</p>
        <div className="flex gap-2 mt-1">
          <span className="text-xs text-accent font-mono">{sets} × {exercise.reps}</span>
          {exercise.useBelt && <span className="text-xs bg-amber-400/20 text-amber-400 px-1.5 rounded">FAJA</span>}
        </div>
      </div>
      {lastWeight != null && (
        <div className="text-right flex-shrink-0">
          <span className="text-sm font-bold text-text-primary">{lastWeight}kg</span>
          <p className="text-[10px] text-text-muted">último</p>
        </div>
      )}
      <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
```

## src/components/Layout.tsx
```tsx
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function Layout() {
  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      <div className="max-w-lg mx-auto px-4">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
```

## src/components/MealCard.tsx
```tsx
import type { Meal } from '../data/diet';

interface Props {
  meal: Meal;
}

export function MealCard({ meal }: Props) {
  const protPct = (meal.totalProtein * 4 / (meal.totalCalories || 1)) * 100;
  const carbPct = (meal.totalCarbs * 4 / (meal.totalCalories || 1)) * 100;
  const fatPct = (meal.totalFat * 9 / (meal.totalCalories || 1)) * 100;

  return (
    <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-text-primary">{meal.name}</h3>
          <span className="text-xs text-text-muted">{meal.time}</span>
        </div>
        <span className="text-lg font-bold text-accent">{meal.totalCalories} kcal</span>
      </div>

      <div className="flex gap-3 mb-3 text-xs">
        <span className="text-green-400">P: {meal.totalProtein}g</span>
        <span className="text-amber-400">C: {meal.totalCarbs}g</span>
        <span className="text-orange-400">G: {meal.totalFat}g</span>
      </div>

      <div className="h-2 bg-bg-elevated rounded-full overflow-hidden flex mb-3">
        <div className="bg-green-400 h-full" style={{ width: `${protPct}%` }} />
        <div className="bg-amber-400 h-full" style={{ width: `${carbPct}%` }} />
        <div className="bg-orange-400 h-full" style={{ width: `${fatPct}%` }} />
      </div>

      <ul className="space-y-1">
        {meal.foods.map((food, i) => (
          <li key={i} className="text-xs text-text-secondary flex justify-between">
            <span>{food.name}</span>
            <span className="text-text-muted">{food.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## src/components/ProgressRing.tsx
```tsx
interface Props {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function ProgressRing({ percentage, size = 140, strokeWidth = 10 }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  const color = percentage >= 80 ? '#4ade80' : percentage >= 50 ? '#fbbf24' : percentage >= 20 ? '#fb923c' : '#64748b';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={center} cy={center} r={radius} stroke="#334155" strokeWidth={strokeWidth} fill="none" />
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="animate-ring transition-all duration-500"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold" style={{ color }}>{percentage}%</span>
        <span className="text-xs text-text-muted">completado</span>
      </div>
    </div>
  );
}
```

## src/components/Spinner.tsx
```tsx
export function Spinner({ label = 'Cargando...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3 text-text-muted animate-fade-in">
      <div className="w-8 h-8 rounded-full border-2 border-bg-elevated border-t-accent animate-spin" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
```

## src/data/checklist.ts
```ts
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
```

## src/data/diet.ts
```ts
export interface Food {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  foods: Food[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export const meals: Meal[] = [
  {
    id: 'breakfast',
    name: 'Desayuno',
    time: '5:45',
    foods: [
      { name: '4 huevos', calories: 280, protein: 24, carbs: 2, fat: 20 },
      { name: '3 tortillas', calories: 195, protein: 5, carbs: 33, fat: 4 },
      { name: '1 cucharón frijoles', calories: 80, protein: 5, carbs: 14, fat: 1 },
      { name: 'Medio aguacate', calories: 80, protein: 1, carbs: 4, fat: 7 },
      { name: '1 cda aceite', calories: 35, protein: 0, carbs: 0, fat: 4 },
    ],
    totalCalories: 670,
    totalProtein: 32,
    totalCarbs: 55,
    totalFat: 35,
  },
  {
    id: 'snack',
    name: 'Snack',
    time: '10:00',
    foods: [
      { name: '2 plátanos', calories: 210, protein: 3, carbs: 54, fat: 1 },
      { name: '1 puño cacahuates', calories: 170, protein: 7, carbs: 5, fat: 14 },
      { name: '1 barra avena', calories: 100, protein: 2, carbs: 18, fat: 3 },
      { name: '1 huevo duro', calories: 70, protein: 6, carbs: 1, fat: 5 },
    ],
    totalCalories: 550,
    totalProtein: 18,
    totalCarbs: 65,
    totalFat: 20,
  },
  {
    id: 'lunch',
    name: 'Comida',
    time: '14:00',
    foods: [
      { name: '1 pechuga entera', calories: 280, protein: 35, carbs: 0, fat: 6 },
      { name: '1.5 tazas arroz', calories: 300, protein: 6, carbs: 66, fat: 1 },
      { name: 'Frijoles', calories: 80, protein: 5, carbs: 14, fat: 1 },
      { name: '3 tortillas', calories: 195, protein: 5, carbs: 33, fat: 4 },
      { name: 'Aguacate', calories: 80, protein: 1, carbs: 4, fat: 7 },
      { name: 'Agua de coco', calories: 45, protein: 0, carbs: 11, fat: 0 },
    ],
    totalCalories: 900,
    totalProtein: 48,
    totalCarbs: 110,
    totalFat: 25,
  },
  {
    id: 'pre-gym',
    name: 'Pre-Gym',
    time: '18:10',
    foods: [
      { name: '2 tazas avena', calories: 300, protein: 10, carbs: 54, fat: 6 },
      { name: '1 plátano', calories: 105, protein: 1, carbs: 27, fat: 0 },
      { name: '2 cdas crema cacahuate', calories: 190, protein: 7, carbs: 7, fat: 16 },
      { name: 'Miel', calories: 60, protein: 0, carbs: 17, fat: 0 },
    ],
    totalCalories: 550,
    totalProtein: 16,
    totalCarbs: 85,
    totalFat: 22,
  },
  {
    id: 'dinner',
    name: 'Cena',
    time: '20:20',
    foods: [
      { name: '2 latas atún', calories: 200, protein: 30, carbs: 0, fat: 8 },
      { name: '3 tortillas', calories: 195, protein: 5, carbs: 33, fat: 4 },
      { name: 'Medio aguacate', calories: 80, protein: 1, carbs: 4, fat: 7 },
      { name: 'Ensalada grande', calories: 55, protein: 2, carbs: 10, fat: 1 },
    ],
    totalCalories: 630,
    totalProtein: 36,
    totalCarbs: 45,
    totalFat: 22,
  },
];

export const dailyTotals = {
  calories: 3300,
  protein: 150,
  carbs: 360,
  fat: 124,
};

export const dietRules = [
  { rule: 'CERO lácteos, refrescos, azúcar', reason: 'Causa acné + inflama cara' },
  { rule: 'MÍNIMA sal', reason: 'Hincha cara' },
  { rule: '3.5+ litros agua', reason: 'Oratane deshidrata' },
  { rule: '1 agua de coco/día', reason: 'OK con la comida' },
  { rule: 'Compras dom 9AM tianguis', reason: '~$550 MXN/semana' },
];
```

## src/data/schedule.ts
```ts
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
```

## src/data/skincare.ts
```ts
export interface SkincareStep {
  step: number;
  product: string;
  how: string;
  frequency?: string;
}

export const morningRoutine: SkincareStep[] = [
  { step: 1, product: 'SVR Sebiaclear gel', how: 'Lavar cara agua tibia, secar toallita' },
  { step: 2, product: 'Eucerin Hydrofluid 50+', how: 'Protector solar toda la cara. OBLIGATORIO.' },
  { step: 3, product: 'Cicavit lèvres', how: 'Labios. Llevar en mochila SIEMPRE.' },
];

export const nightRoutine: SkincareStep[] = [
  { step: 1, product: 'SVR Sebiaclear gel', how: 'Lavar cara' },
  { step: 2, product: 'Regenue 50', how: 'Toda la cara EXCEPTO ojos', frequency: 'solo L/M/V' },
  { step: 3, product: 'Aceite de ricino en cejas', how: 'Cotonete + masaje circular suave 1-2 min por ceja. El masaje activa la circulación del folículo.' },
  { step: 4, product: 'Cicavit lèvres', how: 'Labios' },
  { step: 5, product: 'Sertralina 50mg', how: 'Dosis nocturna' },
];

export const medications = [
  { name: 'ORATANE 20mg', dose: '1/día', when: 'Desayuno', rule: 'SIEMPRE con grasa. Duplica absorción.' },
  { name: 'OMEGA-3 1,000mg', dose: '1/día', when: 'Desayuno', rule: 'Reduce resequedad. ~$100-150/mes' },
  { name: 'Sertralina 50mg', dose: '1/día', when: 'Noche', rule: '' },
  { name: 'Cicavit labios', dose: 'Varias', when: 'Cada 2-3 hrs', rule: 'En mochila/bolsillo' },
];

export const orataneRules = [
  { rule: 'NO sol sin protector', reason: 'Quema en minutos' },
  { rule: 'NO ácidos/BP/mascarillas', reason: 'Piel hipersensible' },
  { rule: 'NO vitamina A / multivit con vit A', reason: 'Oratane YA es vit A = toxicidad' },
  { rule: 'NO Minoxidil (aún)', reason: 'Pregunta a Dra. Jessica en 2-3 meses' },
  { rule: 'NO arrancar/jalar pelitos cejas', reason: 'Cada folículo dañado tarda meses' },
  { rule: 'NO dejar tratamiento', reason: 'Ya dejaste Neotrex y recaíste' },
  { rule: 'Purga semanas 1-3 = NORMAL', reason: 'Empeora antes de mejorar. NO dejes.' },
];

export const eyebrowTechnique = [
  'Moja cotonete/hisopo en aceite de ricino (poco, no chorreando)',
  'Aplica en la ceja siguiendo la dirección del pelo',
  'Con la yema del dedo, haz masaje CIRCULAR suave 1-2 minutos por ceja',
  'El masaje activa la circulación del folículo = pelo crece más rápido',
  'Déjalo toda la noche. No laves hasta la mañana.',
  'NO te arranques pelitos NI te perfiles en casa. Solo en barbería.',
];
```

## src/data/workouts.ts
```ts
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
```

## src/exercises/BenchPress.tsx
```tsx
export function BenchPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="36" width="36" height="4" rx="1" />
      <line x1="18" y1="40" x2="18" y2="52" />
      <line x1="46" y1="40" x2="46" y2="52" />
      <line x1="14" y1="52" x2="22" y2="52" />
      <line x1="42" y1="52" x2="50" y2="52" />
      <line x1="8" y1="24" x2="56" y2="24" strokeWidth="3" />
      <rect x="4" y="18" width="5" height="12" rx="1" />
      <rect x="55" y="18" width="5" height="12" rx="1" />
      <circle cx="32" cy="30" r="4" />
      <line x1="32" y1="34" x2="32" y2="36" />
      <line x1="32" y1="31" x2="22" y2="25" />
      <line x1="32" y1="31" x2="42" y2="25" />
      <line x1="32" y1="36" x2="26" y2="44" />
      <line x1="32" y1="36" x2="38" y2="44" />
    </svg>
  );
}
```

## src/exercises/BicepCurl.tsx
```tsx
export function BicepCurl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="36" />
      <line x1="32" y1="22" x2="40" y2="34" />
      <line x1="40" y1="34" x2="40" y2="22" />
      <rect x="38" y="18" width="4" height="6" rx="1" />
      <line x1="32" y1="22" x2="24" y2="34" />
      <line x1="24" y1="34" x2="24" y2="22" />
      <rect x="22" y="18" width="4" height="6" rx="1" />
      <line x1="32" y1="36" x2="26" y2="52" />
      <line x1="32" y1="36" x2="38" y2="52" />
    </svg>
  );
}
```

## src/exercises/CalfRaise.tsx
```tsx
export function CalfRaise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="36" />
      <line x1="32" y1="22" x2="24" y2="28" />
      <line x1="32" y1="22" x2="40" y2="28" />
      <line x1="32" y1="36" x2="30" y2="48" />
      <line x1="32" y1="36" x2="34" y2="48" />
      <line x1="30" y1="48" x2="28" y2="52" />
      <line x1="34" y1="48" x2="36" y2="52" />
      <rect x="22" y="52" width="20" height="4" rx="1" />
      <path d="M28 52 L28 48" strokeDasharray="2 2" />
      <path d="M36 52 L36 48" strokeDasharray="2 2" />
    </svg>
  );
}
```

## src/exercises/Crunch.tsx
```tsx
export function Crunch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="22" r="5" />
      <path d="M24 27 Q28 34 36 38" />
      <line x1="36" y1="38" x2="50" y2="38" />
      <line x1="24" y1="27" x2="20" y2="32" />
      <line x1="24" y1="27" x2="28" y2="32" />
      <line x1="36" y1="38" x2="32" y2="50" />
      <line x1="50" y1="38" x2="52" y2="50" />
      <line x1="8" y1="42" x2="56" y2="42" opacity="0.3" />
    </svg>
  );
}
```

## src/exercises/Deadlift.tsx
```tsx
export function Deadlift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="32" />
      <line x1="32" y1="22" x2="24" y2="42" />
      <line x1="32" y1="22" x2="40" y2="42" />
      <line x1="32" y1="32" x2="26" y2="42" />
      <line x1="32" y1="32" x2="38" y2="42" />
      <line x1="26" y1="42" x2="24" y2="54" />
      <line x1="38" y1="42" x2="40" y2="54" />
      <line x1="12" y1="42" x2="52" y2="42" strokeWidth="3" />
      <circle cx="10" cy="42" r="4" />
      <circle cx="54" cy="42" r="4" />
      <line x1="21" y1="54" x2="27" y2="54" />
      <line x1="37" y1="54" x2="43" y2="54" />
    </svg>
  );
}
```

## src/exercises/Dips.tsx
```tsx
export function Dips({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="34" />
      <line x1="32" y1="22" x2="18" y2="22" />
      <line x1="32" y1="22" x2="46" y2="22" />
      <line x1="18" y1="22" x2="18" y2="30" />
      <line x1="46" y1="22" x2="46" y2="30" />
      <line x1="14" y1="18" x2="14" y2="30" strokeWidth="3" />
      <line x1="50" y1="18" x2="50" y2="30" strokeWidth="3" />
      <line x1="32" y1="34" x2="28" y2="50" />
      <line x1="32" y1="34" x2="36" y2="50" />
    </svg>
  );
}
```

## src/exercises/FacePull.tsx
```tsx
export function FacePull({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="24" x2="22" y2="16" />
      <line x1="32" y1="24" x2="42" y2="16" />
      <line x1="22" y1="16" x2="8" y2="16" strokeDasharray="3 2" />
      <line x1="42" y1="16" x2="56" y2="16" strokeDasharray="3 2" />
      <rect x="4" y="10" width="4" height="12" rx="1" opacity="0.5" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
```

## src/exercises/FarmerWalk.tsx
```tsx
export function FarmerWalk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="8" r="5" />
      <line x1="32" y1="13" x2="32" y2="34" />
      <line x1="32" y1="20" x2="20" y2="34" />
      <line x1="32" y1="20" x2="44" y2="34" />
      <rect x="16" y="34" width="6" height="10" rx="1" />
      <rect x="42" y="34" width="6" height="10" rx="1" />
      <line x1="32" y1="34" x2="26" y2="52" />
      <line x1="32" y1="34" x2="38" y2="52" />
      <line x1="23" y1="52" x2="29" y2="52" />
      <line x1="35" y1="52" x2="41" y2="52" />
    </svg>
  );
}
```

## src/exercises/HipThrust.tsx
```tsx
export function HipThrust({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="28" width="16" height="12" rx="2" />
      <circle cx="16" cy="24" r="4" />
      <line x1="16" y1="34" x2="36" y2="22" />
      <line x1="36" y1="22" x2="44" y2="34" />
      <line x1="44" y1="34" x2="44" y2="46" />
      <line x1="36" y1="34" x2="36" y2="46" />
      <line x1="26" y1="28" x2="42" y2="28" strokeWidth="3" />
      <rect x="22" y="24" width="4" height="8" rx="1" />
      <rect x="42" y="24" width="4" height="8" rx="1" />
    </svg>
  );
}
```

## src/exercises/InclineWalk.tsx
```tsx
export function InclineWalk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="12" r="5" />
      <line x1="28" y1="17" x2="30" y2="34" />
      <line x1="30" y1="24" x2="22" y2="30" />
      <line x1="30" y1="24" x2="36" y2="30" />
      <line x1="30" y1="34" x2="24" y2="48" />
      <line x1="30" y1="34" x2="36" y2="48" />
      <line x1="8" y1="52" x2="56" y2="40" strokeWidth="3" />
      <line x1="22" y1="48" x2="26" y2="48" />
      <line x1="34" y1="48" x2="38" y2="48" />
    </svg>
  );
}
```

## src/exercises/LateralRaise.tsx
```tsx
export function LateralRaise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="24" x2="14" y2="24" />
      <line x1="32" y1="24" x2="50" y2="24" />
      <rect x="8" y="22" width="6" height="4" rx="1" />
      <rect x="50" y="22" width="6" height="4" rx="1" />
      <line x1="32" y1="38" x2="26" y2="54" />
      <line x1="32" y1="38" x2="38" y2="54" />
    </svg>
  );
}
```

## src/exercises/LegCurl.tsx
```tsx
export function LegCurl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="24" width="40" height="6" rx="2" />
      <circle cx="18" cy="20" r="4" />
      <line x1="18" y1="24" x2="18" y2="24" />
      <line x1="18" y1="30" x2="14" y2="38" />
      <line x1="42" y1="30" x2="48" y2="30" />
      <line x1="48" y1="30" x2="52" y2="20" />
      <line x1="48" y1="30" x2="52" y2="40" />
      <rect x="50" y="18" width="6" height="4" rx="1" />
    </svg>
  );
}
```

## src/exercises/LegPress.tsx
```tsx
export function LegPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="20" r="4" />
      <line x1="22" y1="24" x2="22" y2="36" />
      <line x1="22" y1="36" x2="32" y2="44" />
      <line x1="32" y1="44" x2="42" y2="36" />
      <line x1="42" y1="36" x2="50" y2="36" />
      <rect x="48" y="30" width="8" height="12" rx="1" />
      <line x1="22" y1="36" x2="16" y2="48" />
      <line x1="22" y1="28" x2="14" y2="32" />
      <line x1="14" y1="48" x2="20" y2="48" />
      <rect x="10" y="14" width="24" height="4" rx="1" opacity="0.3" />
    </svg>
  );
}
```

## src/exercises/Lunges.tsx
```tsx
export function Lunges({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="10" r="5" />
      <line x1="32" y1="15" x2="32" y2="32" />
      <line x1="32" y1="22" x2="24" y2="28" />
      <line x1="32" y1="22" x2="40" y2="28" />
      <line x1="32" y1="32" x2="20" y2="44" />
      <line x1="20" y1="44" x2="16" y2="54" />
      <line x1="32" y1="32" x2="44" y2="42" />
      <line x1="44" y1="42" x2="48" y2="54" />
      <line x1="13" y1="54" x2="19" y2="54" />
      <line x1="45" y1="54" x2="51" y2="54" />
    </svg>
  );
}
```

## src/exercises/MachineFly.tsx
```tsx
export function MachineFly({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="14" r="5" />
      <line x1="32" y1="19" x2="32" y2="38" />
      <path d="M32 24 Q22 20 18 28" />
      <path d="M32 24 Q42 20 46 28" />
      <line x1="18" y1="28" x2="12" y2="28" />
      <line x1="46" y1="28" x2="52" y2="28" />
      <line x1="12" y1="22" x2="12" y2="34" strokeWidth="3" />
      <line x1="52" y1="22" x2="52" y2="34" strokeWidth="3" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
```

## src/exercises/NeckExercise.tsx
```tsx
export function NeckExercise({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="16" r="8" />
      <line x1="32" y1="24" x2="32" y2="28" strokeWidth="4" />
      <line x1="32" y1="28" x2="32" y2="44" />
      <line x1="32" y1="32" x2="22" y2="38" />
      <line x1="32" y1="32" x2="42" y2="38" />
      <line x1="32" y1="44" x2="26" y2="56" />
      <line x1="32" y1="44" x2="38" y2="56" />
      <path d="M24 10 L20 6" strokeWidth="1.5" />
      <path d="M40 10 L44 6" strokeWidth="1.5" />
      <path d="M32 8 L32 2" strokeWidth="1.5" />
    </svg>
  );
}
```

## src/exercises/OverheadPress.tsx
```tsx
export function OverheadPress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="16" r="5" />
      <line x1="32" y1="21" x2="32" y2="40" />
      <line x1="32" y1="26" x2="22" y2="10" />
      <line x1="32" y1="26" x2="42" y2="10" />
      <line x1="16" y1="8" x2="48" y2="8" strokeWidth="3" />
      <rect x="12" y="4" width="4" height="8" rx="1" />
      <rect x="48" y="4" width="4" height="8" rx="1" />
      <line x1="32" y1="40" x2="26" y2="54" />
      <line x1="32" y1="40" x2="38" y2="54" />
      <line x1="23" y1="54" x2="29" y2="54" />
      <line x1="35" y1="54" x2="41" y2="54" />
    </svg>
  );
}
```

## src/exercises/Plank.tsx
```tsx
export function Plank({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="30" r="4" />
      <line x1="18" y1="32" x2="50" y2="36" />
      <line x1="14" y1="34" x2="14" y2="44" />
      <line x1="14" y1="44" x2="18" y2="44" />
      <line x1="50" y1="36" x2="50" y2="46" />
      <line x1="50" y1="46" x2="54" y2="46" />
      <line x1="48" y1="46" x2="52" y2="46" />
    </svg>
  );
}
```

## src/exercises/Pullover.tsx
```tsx
export function Pullover({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="30" width="36" height="6" rx="2" />
      <circle cx="32" cy="26" r="4" />
      <line x1="32" y1="30" x2="32" y2="36" />
      <line x1="32" y1="28" x2="20" y2="16" />
      <line x1="32" y1="28" x2="44" y2="16" />
      <rect x="16" y="12" width="8" height="6" rx="2" />
      <line x1="32" y1="36" x2="26" y2="48" />
      <line x1="32" y1="36" x2="38" y2="48" />
    </svg>
  );
}
```

## src/exercises/Pullups.tsx
```tsx
export function Pullups({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="8" x2="54" y2="8" strokeWidth="3" />
      <line x1="10" y1="4" x2="10" y2="12" />
      <line x1="54" y1="4" x2="54" y2="12" />
      <circle cx="32" cy="18" r="5" />
      <line x1="32" y1="23" x2="32" y2="40" />
      <line x1="32" y1="25" x2="24" y2="10" />
      <line x1="32" y1="25" x2="40" y2="10" />
      <line x1="32" y1="40" x2="26" y2="54" />
      <line x1="32" y1="40" x2="38" y2="54" />
    </svg>
  );
}
```

## src/exercises/Row.tsx
```tsx
export function Row({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="14" r="5" />
      <line x1="28" y1="19" x2="32" y2="36" />
      <line x1="32" y1="36" x2="24" y2="52" />
      <line x1="32" y1="36" x2="40" y2="52" />
      <line x1="32" y1="28" x2="42" y2="38" />
      <line x1="42" y1="38" x2="42" y2="28" />
      <line x1="32" y1="28" x2="20" y2="38" />
      <line x1="14" y1="42" x2="50" y2="42" strokeWidth="2.5" />
      <rect x="10" y="38" width="4" height="8" rx="1" />
      <rect x="50" y="38" width="4" height="8" rx="1" />
    </svg>
  );
}
```

## src/exercises/SkullCrusher.tsx
```tsx
export function SkullCrusher({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="32" width="40" height="4" rx="1" />
      <circle cx="22" cy="28" r="4" />
      <line x1="22" y1="32" x2="22" y2="36" />
      <line x1="22" y1="34" x2="30" y2="22" />
      <line x1="30" y1="22" x2="36" y2="22" />
      <line x1="28" y1="20" x2="38" y2="20" strokeWidth="2.5" />
      <rect x="26" y="16" width="3" height="6" rx="1" />
      <rect x="35" y="16" width="3" height="6" rx="1" />
      <line x1="22" y1="36" x2="16" y2="46" />
      <line x1="22" y1="36" x2="28" y2="46" />
    </svg>
  );
}
```

## src/exercises/Squat.tsx
```tsx
export function Squat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="34" />
      <line x1="22" y1="22" x2="32" y2="20" />
      <line x1="42" y1="22" x2="32" y2="20" />
      <line x1="20" y1="18" x2="44" y2="18" strokeWidth="3" />
      <rect x="14" y="14" width="4" height="8" rx="1" />
      <rect x="46" y="14" width="4" height="8" rx="1" />
      <line x1="32" y1="34" x2="24" y2="44" />
      <line x1="32" y1="34" x2="40" y2="44" />
      <line x1="24" y1="44" x2="22" y2="56" />
      <line x1="40" y1="44" x2="42" y2="56" />
      <line x1="19" y1="56" x2="25" y2="56" />
      <line x1="39" y1="56" x2="45" y2="56" />
    </svg>
  );
}
```

## src/exercises/TricepExtension.tsx
```tsx
export function TricepExtension({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="12" r="5" />
      <line x1="32" y1="17" x2="32" y2="38" />
      <line x1="32" y1="22" x2="38" y2="14" />
      <line x1="38" y1="14" x2="38" y2="6" />
      <rect x="36" y="2" width="4" height="6" rx="1" />
      <line x1="32" y1="22" x2="26" y2="32" />
      <line x1="32" y1="38" x2="26" y2="52" />
      <line x1="32" y1="38" x2="38" y2="52" />
    </svg>
  );
}
```

## src/exercises/index.ts
```ts
import React from 'react';
import { BenchPress } from './BenchPress';
import { Squat } from './Squat';
import { Deadlift } from './Deadlift';
import { Pullups } from './Pullups';
import { OverheadPress } from './OverheadPress';
import { LateralRaise } from './LateralRaise';
import { BicepCurl } from './BicepCurl';
import { TricepExtension } from './TricepExtension';
import { LegPress } from './LegPress';
import { Row } from './Row';
import { Dips } from './Dips';
import { CalfRaise } from './CalfRaise';
import { Plank } from './Plank';
import { LegCurl } from './LegCurl';
import { FacePull } from './FacePull';
import { HipThrust } from './HipThrust';
import { Lunges } from './Lunges';
import { FarmerWalk } from './FarmerWalk';
import { InclineWalk } from './InclineWalk';
import { NeckExercise } from './NeckExercise';
import { Pullover } from './Pullover';
import { MachineFly } from './MachineFly';
import { SkullCrusher } from './SkullCrusher';
import { Crunch } from './Crunch';

type SvgComponent = React.FC<{ className?: string }>;

export const exerciseSvgs: Record<string, SvgComponent> = {
  'bench-press': BenchPress,
  'incline-db-press': BenchPress,
  'incline-bb-press': BenchPress,
  'flat-db-press': BenchPress,
  'machine-fly': MachineFly,
  'machine-fly-v2': MachineFly,
  'dips': Dips,
  'dips-v2': Dips,
  'db-ohp': OverheadPress,
  'barbell-ohp': OverheadPress,
  'cable-lateral': LateralRaise,
  'cable-lateral-v2': LateralRaise,
  'overhead-ext': TricepExtension,
  'tricep-pushdown': TricepExtension,
  'tricep-pushdown-v2': TricepExtension,
  'skull-crusher': SkullCrusher,
  'skull-crusher-v2': SkullCrusher,
  'pullups': Pullups,
  'pullups-v2': Pullups,
  'close-grip-pulldown': Pullups,
  't-bar-row': Row,
  't-bar-row-v2': Row,
  'machine-row': Row,
  'machine-row-v2': Row,
  'pullover': Pullover,
  'pullover-v2': Pullover,
  'face-pull': FacePull,
  'face-pull-v2': FacePull,
  'barbell-curl': BicepCurl,
  'barbell-curl-v2': BicepCurl,
  'hammer-curl': BicepCurl,
  'hammer-curl-v2': BicepCurl,
  'incline-curl': BicepCurl,
  'incline-curl-v2': BicepCurl,
  'neck-flexion': NeckExercise,
  'neck-extension': NeckExercise,
  'neck-lateral': NeckExercise,
  'neck-maintenance': NeckExercise,
  'neck-full': NeckExercise,
  'squat': Squat,
  'bulgarian-split': Squat,
  'leg-press': LegPress,
  'lunges': Lunges,
  'rdl': Deadlift,
  'leg-extension': LegPress,
  'leg-extension-v2': LegPress,
  'leg-curl': LegCurl,
  'leg-curl-v2': LegCurl,
  'calf-raise': CalfRaise,
  'plank': Plank,
  'hip-thrust': HipThrust,
  'farmer-walk': FarmerWalk,
  'crunch': Crunch,
  'incline-walk': InclineWalk,
};
```

## src/hooks/useChecklist.ts
```ts
import { useState, useEffect, useCallback } from 'react';
import { db } from '../storage/db';
import { checklistItems } from '../data/checklist';
import { getTodayString } from '../utils/dates';

export function useChecklist() {
  const today = getTodayString();
  const [items, setItems] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    db.dailyChecklists.get(today).then((record) => {
      if (record) {
        setItems(record.items);
      } else {
        const fresh: Record<string, boolean> = {};
        checklistItems.forEach((i) => (fresh[i.id] = false));
        setItems(fresh);
      }
      setLoaded(true);
    });
  }, [today]);

  const toggle = useCallback(
    async (id: string) => {
      const newItems = { ...items, [id]: !items[id] };
      setItems(newItems);
      const completedCount = Object.values(newItems).filter(Boolean).length;
      await db.dailyChecklists.put({
        date: today,
        items: newItems,
        completedCount,
        totalCount: checklistItems.length,
      });
    },
    [items, today]
  );

  const completedCount = Object.values(items).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return { items, toggle, completedCount, totalCount, percentage, loaded };
}
```

## src/hooks/useCurrentMonth.ts
```ts
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
```

## src/hooks/useNotifications.ts
```ts
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
```

## src/hooks/useProgress.ts
```ts
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
```

## src/hooks/useProgressPhotos.ts
```ts
import { useState, useEffect, useCallback } from 'react';
import { db, type ProgressPhoto } from '../storage/db';
import { getTodayString } from '../utils/dates';
import { compressImage } from '../utils/image';

export interface PhotoWithUrl extends ProgressPhoto {
  id: number;
  url: string;
}

export function useProgressPhotos() {
  const [photos, setPhotos] = useState<PhotoWithUrl[]>([]);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async () => {
    const all = await db.progressPhotos.orderBy('date').reverse().toArray();
    setPhotos(
      all.map((p) => ({ ...p, id: p.id!, url: URL.createObjectURL(p.blob) }))
    );
    setLoaded(true);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Libera los object URLs del render anterior cuando la lista cambia o al desmontar.
  useEffect(() => {
    return () => {
      photos.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [photos]);

  const addPhoto = useCallback(
    async (file: File, note?: string) => {
      const blob = await compressImage(file);
      await db.progressPhotos.add({
        date: getTodayString(),
        blob,
        note,
        createdAt: Date.now(),
      });
      await load();
    },
    [load]
  );

  const deletePhoto = useCallback(
    async (id: number) => {
      await db.progressPhotos.delete(id);
      await load();
    },
    [load]
  );

  return { photos, loaded, addPhoto, deletePhoto };
}
```

## src/hooks/useWeightLog.ts
```ts
import { useState, useEffect, useCallback } from 'react';
import { db, type WeightLogEntry } from '../storage/db';
import { getTodayString } from '../utils/dates';

export function useWeightLog(exerciseId: string) {
  const today = getTodayString();
  const [todayEntry, setTodayEntry] = useState<WeightLogEntry | null>(null);
  const [lastEntry, setLastEntry] = useState<WeightLogEntry | null>(null);
  const [history, setHistory] = useState<WeightLogEntry[]>([]);

  const load = useCallback(async () => {
    const entries = await db.weightLogs
      .where('exerciseId')
      .equals(exerciseId)
      .reverse()
      .sortBy('date');

    setHistory(entries);

    const todayLog = entries.find((e) => e.date === today);
    setTodayEntry(todayLog || null);

    const previous = entries.find((e) => e.date !== today);
    setLastEntry(previous || null);
  }, [exerciseId, today]);

  useEffect(() => {
    load();
  }, [load]);

  const saveEntry = useCallback(
    async (sets: { setNumber: number; weight: number; reps: number }[]) => {
      if (todayEntry?.id) {
        await db.weightLogs.update(todayEntry.id, { sets });
      } else {
        await db.weightLogs.add({ date: today, exerciseId, sets });
      }
      await load();
    },
    [todayEntry, today, exerciseId, load]
  );

  return { todayEntry, lastEntry, history, saveEntry };
}

export function useAllWeightLogs() {
  const [logs, setLogs] = useState<WeightLogEntry[]>([]);

  useEffect(() => {
    db.weightLogs.toArray().then(setLogs);
  }, []);

  return logs;
}
```

## src/index.css
```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #0f172a;
  --color-bg-card: #1e293b;
  --color-bg-elevated: #334155;
  --color-accent: #22d3ee;
  --color-accent-glow: #06b6d4;
  --color-success: #4ade80;
  --color-warning: #fbbf24;
  --color-danger: #f87171;
  --color-skincare: #a78bfa;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
}

* {
  -webkit-tap-highlight-color: transparent;
}

html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

@keyframes checkmark {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ringFill {
  from { stroke-dashoffset: 283; }
}

.animate-check {
  animation: checkmark 0.3s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

.animate-ring {
  animation: ringFill 1s ease-out;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
```

## src/main.tsx
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## src/pages/DietPage.tsx
```tsx
import { meals, dailyTotals, dietRules } from '../data/diet';
import { MealCard } from '../components/MealCard';

export function DietPage() {
  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Dieta</h1>
      <p className="text-xs text-text-muted">3,300 kcal · 140g proteína · Ectomorfo</p>

      {/* Daily Totals */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">TOTAL DÍA</h3>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <span className="text-lg font-bold text-text-primary">{dailyTotals.calories}</span>
            <p className="text-[10px] text-text-muted">kcal</p>
          </div>
          <div>
            <span className="text-lg font-bold text-green-400">{dailyTotals.protein}g</span>
            <p className="text-[10px] text-text-muted">proteína</p>
          </div>
          <div>
            <span className="text-lg font-bold text-amber-400">{dailyTotals.carbs}g</span>
            <p className="text-[10px] text-text-muted">carbos</p>
          </div>
          <div>
            <span className="text-lg font-bold text-orange-400">{dailyTotals.fat}g</span>
            <p className="text-[10px] text-text-muted">grasa</p>
          </div>
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-3">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {/* Rules */}
      <div className="bg-danger/10 rounded-xl p-4 border border-danger/30">
        <h3 className="text-xs font-semibold text-danger mb-2">REGLAS</h3>
        <ul className="space-y-2">
          {dietRules.map((r, i) => (
            <li key={i} className="text-xs">
              <span className="text-text-primary font-medium">{r.rule}</span>
              <span className="text-text-muted ml-1">— {r.reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prep Sunday */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-2">PREP DOMINGO (1 hr)</h3>
        <ul className="space-y-1 text-xs text-text-secondary">
          <li>1. Frijoles — 1 kg olla presión, 45 min</li>
          <li>2. Arroz — 2 tazas, hervir 20 min</li>
          <li>3. Pollo — 2 kg pechuga, sartén 7min/lado</li>
          <li>4. Huevos duros — 10 huevos, 12 min</li>
          <li>5. Verduras — Picar nopales, jitomates, pepinos</li>
          <li>6. Snacks — 5 bolsitas cacahuates + 10 plátanos + barras</li>
        </ul>
      </div>
    </div>
  );
}
```

## src/pages/ExerciseDetail.tsx
```tsx
import { useState, useEffect } from 'react';
import type { ExerciseDef } from '../data/workouts';
import { getExerciseSets } from '../utils/periodization';
import { useWeightLog } from '../hooks/useWeightLog';
import { exerciseSvgs } from '../exercises';

interface Props {
  exercise: ExerciseDef;
  month: 1 | 2 | 3;
  onBack: () => void;
}

export function ExerciseDetail({ exercise, month, onBack }: Props) {
  const sets = getExerciseSets(exercise, month);
  const { todayEntry, lastEntry, saveEntry } = useWeightLog(exercise.id);
  const SvgIcon = exerciseSvgs[exercise.id];

  const [setsData, setSetsData] = useState<{ weight: number; reps: number }[]>(
    Array.from({ length: sets }, () => ({ weight: 0, reps: 0 }))
  );

  useEffect(() => {
    if (todayEntry) {
      const filled = Array.from({ length: sets }, (_, i) => {
        const s = todayEntry.sets.find((x) => x.setNumber === i + 1);
        return s ? { weight: s.weight, reps: s.reps } : { weight: 0, reps: 0 };
      });
      setSetsData(filled);
    }
  }, [todayEntry, sets]);

  const handleSave = async () => {
    await saveEntry(setsData.map((s, i) => ({ setNumber: i + 1, weight: s.weight, reps: s.reps })));
  };

  const updateSet = (index: number, field: 'weight' | 'reps', value: number) => {
    const next = [...setsData];
    next[index] = { ...next[index], [field]: value };
    setSetsData(next);
  };

  return (
    <div className="pt-6 pb-4 space-y-5 animate-fade-in">
      {/* Back */}
      <button onClick={onBack} className="flex items-center gap-1 text-text-muted text-sm active:text-accent">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      {/* SVG */}
      <div className="flex justify-center">
        <div className="w-40 h-40 bg-bg-card rounded-2xl flex items-center justify-center text-accent border border-slate-700/50">
          {SvgIcon ? <SvgIcon className="w-32 h-32" /> : (
            <svg className="w-20 h-20 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7M4 18h4" />
            </svg>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-text-primary">{exercise.name}</h1>
        <p className="text-sm text-text-muted">{exercise.muscleGroup}</p>
        <div className="flex justify-center gap-3 mt-2">
          <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full font-mono">
            {sets} × {exercise.reps}
          </span>
          {exercise.useBelt && (
            <span className="text-sm bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full">FAJA</span>
          )}
        </div>
      </div>

      {/* Technique */}
      {exercise.technique && (
        <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-accent mb-1">TÉCNICA</h3>
          <p className="text-sm text-text-secondary">{exercise.technique}</p>
        </div>
      )}

      {/* Last session */}
      {lastEntry && (
        <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-text-muted mb-1">ÚLTIMA SESIÓN ({lastEntry.date})</h3>
          <div className="flex gap-2 flex-wrap">
            {lastEntry.sets.map((s) => (
              <span key={s.setNumber} className="text-xs bg-bg-elevated px-2 py-1 rounded text-text-secondary">
                S{s.setNumber}: {s.weight}kg × {s.reps}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Weight Input */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3">Registrar Pesos</h3>
        <div className="space-y-2">
          {setsData.map((set, i) => (
            <div key={i} className="flex items-center gap-2 bg-bg-card rounded-xl p-3 border border-slate-700/50">
              <span className="text-xs text-text-muted w-8">S{i + 1}</span>
              <div className="flex-1 flex items-center gap-1">
                <input
                  type="number"
                  inputMode="decimal"
                  value={set.weight || ''}
                  onChange={(e) => updateSet(i, 'weight', Number(e.target.value))}
                  placeholder="0"
                  className="w-16 bg-bg-elevated text-center text-text-primary rounded-lg py-2 text-sm border border-slate-600 focus:border-accent focus:outline-none"
                />
                <span className="text-xs text-text-muted">kg</span>
              </div>
              <span className="text-text-muted">×</span>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  inputMode="numeric"
                  value={set.reps || ''}
                  onChange={(e) => updateSet(i, 'reps', Number(e.target.value))}
                  placeholder="0"
                  className="w-14 bg-bg-elevated text-center text-text-primary rounded-lg py-2 text-sm border border-slate-600 focus:border-accent focus:outline-none"
                />
                <span className="text-xs text-text-muted">reps</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        className="w-full bg-accent text-bg-primary font-semibold py-3 rounded-xl active:scale-95 transition-transform text-sm"
      >
        Guardar Pesos
      </button>
    </div>
  );
}
```

## src/pages/GymPage.tsx
```tsx
import { useState } from 'react';
import { workouts, warmups, periodization } from '../data/workouts';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { ExerciseCard } from '../components/ExerciseCard';
import { ExerciseDetail } from './ExerciseDetail';
import { getDayOfWeek, getDayName } from '../utils/dates';
import type { ExerciseDef } from '../data/workouts';

export function GymPage() {
  const { month } = useCurrentMonth();
  const dayOfWeek = getDayOfWeek();
  const [selectedExercise, setSelectedExercise] = useState<ExerciseDef | null>(null);

  const todayWorkout = workouts.find((w) => w.dayOfWeek === dayOfWeek);
  const currentPeriod = periodization[month - 1];

  if (dayOfWeek === 7) {
    return (
      <div className="pt-8 text-center animate-fade-in">
        <div className="text-6xl mb-4">😴</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Domingo — Descanso</h1>
        <p className="text-text-secondary">Estiramientos postura + ej. faciales</p>
        <p className="text-sm text-text-muted mt-2">Prep comida · Compras tianguis 9AM</p>
      </div>
    );
  }

  if (!todayWorkout) return <div className="pt-8 text-center text-text-muted">No hay rutina para hoy</div>;

  if (selectedExercise) {
    return <ExerciseDetail exercise={selectedExercise} month={month} onBack={() => setSelectedExercise(null)} />;
  }

  const warmupType = todayWorkout.name.includes('PUSH') || todayWorkout.name.includes('Push')
    ? 'Push'
    : todayWorkout.name.includes('PULL') || todayWorkout.name.includes('Pull')
    ? 'Pull'
    : 'Legs';

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      {/* Header */}
      <div>
        <p className="text-xs text-text-muted uppercase tracking-wider">{getDayName(dayOfWeek)}</p>
        <h1 className="text-2xl font-bold text-text-primary">{todayWorkout.name}</h1>
        <p className="text-sm text-text-secondary">{todayWorkout.focus}</p>
      </div>

      {/* Period Badge */}
      <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <span className="text-xs text-accent font-semibold">MES {month}: {currentPeriod.name}</span>
        </div>
        <p className="text-xs text-text-muted mt-1">{currentPeriod.focus}</p>
      </div>

      {/* Warmup */}
      <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-amber-400 mb-2">CALENTAMIENTO — 5 min</h3>
        <ul className="space-y-1">
          {warmups[warmupType]?.map((w, i) => (
            <li key={i} className="text-xs text-text-secondary">• {w}</li>
          ))}
        </ul>
      </div>

      {/* Exercises */}
      <div className="space-y-2">
        {todayWorkout.exercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            month={month}
            onClick={() => setSelectedExercise(ex)}
          />
        ))}
      </div>

      {/* Belt reminder */}
      {todayWorkout.exercises.some((e) => e.useBelt) && (
        <div className="bg-amber-400/10 rounded-xl p-3 border border-amber-400/30">
          <p className="text-xs text-amber-400 font-semibold">🔒 FAJA solo en: Sentadilla pesada + Peso muerto</p>
          <p className="text-xs text-text-muted">Todo lo demás: aprieta abdomen como si te fueran a pegar = faja natural</p>
        </div>
      )}
    </div>
  );
}
```

## src/pages/HomePage.tsx
```tsx
import { useChecklist } from '../hooks/useChecklist';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { ProgressRing } from '../components/ProgressRing';
import { ChecklistItem } from '../components/ChecklistItem';
import { checklistItems } from '../data/checklist';
import { getDayName, getDayOfWeek } from '../utils/dates';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { Spinner } from '../components/Spinner';

const quotes = [
  'Septiembre 2026: irreconocible. Vamos, Alan.',
  'Cada día cuenta. Sin excusas.',
  'La disciplina le gana al talento.',
  'Hoy es el día que tu yo del futuro agradecerá.',
  'No pares. La transformación ya empezó.',
  'Más fuerte que ayer. Siempre.',
  'El dolor es temporal. Los resultados son permanentes.',
  '90 días. Sin fallar. Sin detenerte.',
];

export function HomePage() {
  const { items, toggle, completedCount, totalCount, percentage, loaded } = useChecklist();
  const { month, dayOfPlan } = useCurrentMonth();
  const progress = useProgress();
  const navigate = useNavigate();

  const todayQuote = quotes[new Date().getDate() % quotes.length];
  const dayName = getDayName(getDayOfWeek());

  if (!loaded) return <Spinner />;

  const planPct = Math.min((dayOfPlan / 90) * 100, 100);

  const morningItems = checklistItems.filter((i) => i.timeOfDay === 'morning');
  const afternoonItems = checklistItems.filter((i) => i.timeOfDay === 'afternoon');
  const eveningItems = checklistItems.filter((i) => i.timeOfDay === 'evening');

  return (
    <div className="pt-6 pb-4 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex items-center gap-2 bg-bg-card border border-slate-700/50 rounded-full px-4 py-1.5">
          <span className="text-xs text-text-muted uppercase tracking-wider">{dayName}</span>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span className="text-xs font-bold text-accent">Día {dayOfPlan} de 90</span>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span className="text-xs text-text-secondary">Mes {month}</span>
        </div>
        <div className="w-44 h-1 bg-bg-elevated rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${planPct}%` }} />
        </div>
        <p className="text-sm text-accent italic text-center">"{todayQuote}"</p>
      </div>

      {/* Progress Ring + Streak */}
      <div className="flex flex-col items-center gap-3">
        <ProgressRing percentage={percentage} />
        <div className="flex gap-4 text-center">
          <div>
            <span className="text-2xl font-bold text-amber-400">🔥 {progress.streak}</span>
            <p className="text-[10px] text-text-muted">racha</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-text-primary">{completedCount}/{totalCount}</span>
            <p className="text-[10px] text-text-muted">hábitos</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-green-400">{progress.weeklyAverage}%</span>
            <p className="text-[10px] text-text-muted">semanal</p>
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="flex gap-2">
        <button onClick={() => navigate('/schedule')} className="flex-1 bg-bg-card border border-slate-700/50 rounded-xl py-2.5 text-xs text-text-secondary active:scale-95 transition-transform">
          📋 Horario
        </button>
        <button onClick={() => navigate('/settings')} className="flex-1 bg-bg-card border border-slate-700/50 rounded-xl py-2.5 text-xs text-text-secondary active:scale-95 transition-transform">
          ⚙️ Ajustes
        </button>
      </div>

      {/* Checklist */}
      <Section title="🌅 Mañana" items={morningItems} checkedItems={items} onToggle={toggle} />
      <Section title="☀️ Día" items={afternoonItems} checkedItems={items} onToggle={toggle} />
      <Section title="🌙 Noche" items={eveningItems} checkedItems={items} onToggle={toggle} />
    </div>
  );
}

function Section({ title, items: sectionItems, checkedItems, onToggle }: {
  title: string;
  items: typeof checklistItems;
  checkedItems: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const done = sectionItems.filter((i) => checkedItems[i.id]).length;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-text-secondary">{title}</h2>
        <span className="text-xs text-text-muted">{done}/{sectionItems.length}</span>
      </div>
      <div className="space-y-2">
        {sectionItems.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            checked={!!checkedItems[item.id]}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
```

## src/pages/ProgressPage.tsx
```tsx
import { useProgress } from '../hooks/useProgress';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { formatDateShort } from '../utils/dates';
import { useNavigate } from 'react-router-dom';

export function ProgressPage() {
  const progress = useProgress();
  const { dayOfPlan, month } = useCurrentMonth();
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-4 space-y-5 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Progreso</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Racha" value={`${progress.streak}`} icon="🔥" color="text-amber-400" />
        <StatCard label="Mejor racha" value={`${progress.bestStreak}`} icon="🏆" color="text-yellow-400" />
        <StatCard label="Semanal" value={`${progress.weeklyAverage}%`} icon="📊" color="text-accent" />
      </div>

      {/* Day of Plan */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 text-center">
        <span className="text-4xl font-bold text-accent">{dayOfPlan}</span>
        <p className="text-xs text-text-muted mt-1">de 90 días</p>
        <div className="mt-2 h-2 bg-bg-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${Math.min((dayOfPlan / 90) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Fotos de progreso */}
      <button
        onClick={() => navigate('/progress-photos')}
        className="w-full bg-bg-card border border-slate-700/50 rounded-xl p-4 flex items-center gap-3 active:scale-[0.98] transition-transform"
      >
        <span className="text-2xl">📸</span>
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold text-text-primary">Fotos de progreso</p>
          <p className="text-xs text-text-muted">Compara tu cambio físico antes → después</p>
        </div>
        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Heatmap */}
      <div>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Últimos 90 días</h3>
        <div className="grid grid-cols-13 gap-[3px]">
          {progress.last90Days.map((day, i) => (
            <div
              key={i}
              title={`${formatDateShort(day.date)}: ${day.percentage}%`}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor:
                  day.percentage === 0
                    ? '#1e293b'
                    : day.percentage < 30
                    ? '#7f1d1d'
                    : day.percentage < 50
                    ? '#92400e'
                    : day.percentage < 80
                    ? '#a16207'
                    : '#166534',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 justify-end">
          <span className="text-[10px] text-text-muted">Menos</span>
          {['#1e293b', '#7f1d1d', '#92400e', '#a16207', '#166534'].map((c) => (
            <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
          ))}
          <span className="text-[10px] text-text-muted">Más</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">META: SEPTIEMBRE 2026</h3>
        <div className="space-y-3">
          {[
            { month: 'Junio', face: 'Oratane empieza. Purga posible.', body: 'Mes 1: técnica, tempo 3-1-0', money: 'n8n + datos curiosos' },
            { month: 'Julio', face: 'Menos brotes. Pómulos salen.', body: 'Mes 2: volumen, 3 series. +2-3kg', money: '1 cliente nuevo' },
            { month: 'Agosto', face: 'Piel limpia visible. Mandíbula.', body: 'Mes 3: intensidad. +4-5kg', money: '2-3 clientes' },
            { month: 'SEPT', face: 'IRRECONOCIBLE. Piel limpia. Pómulos. Pelo.', body: '54-56 kg. V-taper. Cuello.', money: 'AutoPilot + canal' },
          ].map((item, i) => {
            const isGoal = i === 3;
            const isCurrent = i === month - 1;
            return (
              <div
                key={i}
                className={`flex gap-3 rounded-lg ${isCurrent || isGoal ? '-mx-2 px-2 py-2' : ''} ${isGoal ? 'bg-accent/10' : ''} ${isCurrent ? 'bg-accent/5 ring-1 ring-accent/40' : ''}`}
              >
                <span className={`text-xs font-bold w-12 ${isCurrent || isGoal ? 'text-accent' : 'text-text-muted'}`}>{item.month}</span>
                <div className="flex-1 text-xs text-text-secondary">
                  <p>
                    {item.face}
                    {isCurrent && <span className="text-accent font-semibold"> · aquí vas</span>}
                  </p>
                  <p className="text-text-muted">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  return (
    <div className="bg-bg-card rounded-xl p-3 border border-slate-700/50 text-center">
      <span className="text-xl">{icon}</span>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
      <p className="text-[10px] text-text-muted">{label}</p>
    </div>
  );
}
```

## src/pages/ProgressPhotosPage.tsx
```tsx
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressPhotos, type PhotoWithUrl } from '../hooks/useProgressPhotos';
import { formatDateShort } from '../utils/dates';
import { Spinner } from '../components/Spinner';

export function ProgressPhotosPage() {
  const navigate = useNavigate();
  const { photos, loaded, addPhoto, deletePhoto } = useProgressPhotos();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [viewer, setViewer] = useState<PhotoWithUrl | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      for (const file of Array.from(files)) {
        await addPhoto(file);
      }
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const oldest = photos[photos.length - 1];
  const latest = photos[0];

  return (
    <div className="min-h-screen bg-bg-primary pb-8">
      <div className="max-w-lg mx-auto px-4 pt-6 space-y-5 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/progress')} className="text-text-muted active:text-accent">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-text-primary">Fotos de progreso</h1>
        </div>

        {/* Add button */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={busy}
          className="w-full bg-accent/20 text-accent text-sm font-semibold py-3 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {busy ? (
            'Guardando...'
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Agregar foto
            </>
          )}
        </button>

        {!loaded && <Spinner />}

        {loaded && photos.length === 0 && (
          <div className="text-center text-text-muted text-sm py-12">
            <p className="text-4xl mb-3">📸</p>
            <p>Aún no tienes fotos.</p>
            <p className="text-xs mt-1">Toma una hoy para marcar tu punto de partida.</p>
          </div>
        )}

        {/* Comparación antes / después */}
        {loaded && photos.length >= 2 && (
          <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
            <h3 className="text-xs font-semibold text-accent mb-3">ANTES → DESPUÉS</h3>
            <div className="grid grid-cols-2 gap-3">
              <CompareTile label="Inicio" photo={oldest} onClick={() => setViewer(oldest)} />
              <CompareTile label="Ahora" photo={latest} onClick={() => setViewer(latest)} />
            </div>
          </div>
        )}

        {/* Galería */}
        {loaded && photos.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-text-secondary mb-3">
              Todas ({photos.length})
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {photos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setViewer(p)}
                  className="relative aspect-square rounded-lg overflow-hidden bg-bg-elevated active:scale-95 transition-transform"
                >
                  <img src={p.url} alt={p.date} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/50 text-[10px] text-white py-0.5 text-center">
                    {formatDateShort(p.date)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Visor a pantalla completa */}
      {viewer && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={() => setViewer(null)}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-sm text-text-secondary">{formatDateShort(viewer.date)}</span>
            <button onClick={() => setViewer(null)} className="text-white text-2xl leading-none px-2">
              ✕
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img src={viewer.url} alt={viewer.date} className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
          <div className="p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={async () => {
                if (confirm('¿Borrar esta foto?')) {
                  await deletePhoto(viewer.id);
                  setViewer(null);
                }
              }}
              className="w-full bg-danger/20 text-danger text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
            >
              🗑️ Borrar foto
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompareTile({ label, photo, onClick }: { label: string; photo: PhotoWithUrl; onClick: () => void }) {
  return (
    <button onClick={onClick} className="active:scale-95 transition-transform">
      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-elevated">
        <img src={photo.url} alt={label} className="w-full h-full object-cover" />
      </div>
      <p className="text-xs text-text-secondary mt-1">{label}</p>
      <p className="text-[10px] text-text-muted">{formatDateShort(photo.date)}</p>
    </button>
  );
}
```

## src/pages/SchedulePage.tsx
```tsx
import { weekdaySchedule, categoryScheduleColors } from '../data/schedule';
import { useNavigate } from 'react-router-dom';

export function SchedulePage() {
  const navigate = useNavigate();
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Horario</h1>
      </div>
      <p className="text-xs text-text-muted">Lunes a Viernes · 5:30am — 9:30pm</p>

      <div className="space-y-1.5">
        {weekdaySchedule.map((block, i) => {
          const blockMinutes = timeToMinutes(block.time);
          const nextBlock = weekdaySchedule[i + 1];
          const nextMinutes = nextBlock ? timeToMinutes(nextBlock.time) : blockMinutes + block.duration;
          const isCurrent = currentMinutes >= blockMinutes && currentMinutes < nextMinutes;
          const isPast = currentMinutes >= nextMinutes;
          const colors = categoryScheduleColors[block.category] || 'bg-slate-500/20 border-slate-500';

          return (
            <div
              key={i}
              className={`flex gap-3 p-3 rounded-xl border-l-4 transition-all ${colors} ${
                isCurrent ? 'ring-2 ring-accent/50 scale-[1.01]' : ''
              } ${isPast ? 'opacity-50' : ''}`}
            >
              <div className="w-12 flex-shrink-0">
                <span className={`text-sm font-mono ${isCurrent ? 'text-accent font-bold' : 'text-text-muted'}`}>
                  {block.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${isCurrent ? 'text-text-primary font-semibold' : 'text-text-secondary'}`}>
                  {block.activity}
                </p>
                {block.notes && <p className="text-[10px] text-text-muted mt-0.5">{block.notes}</p>}
              </div>
              {isCurrent && (
                <span className="text-[10px] text-accent font-semibold self-center flex-shrink-0">AHORA</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Weekend */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 mt-4">
        <h3 className="text-xs font-semibold text-accent mb-2">FIN DE SEMANA</h3>
        <p className="text-xs text-text-secondary"><strong>SÁB:</strong> Sin escuela. n8n+CapCut 6hrs. Gym 3PM (Legs+caminata inclinada 15min).</p>
        <p className="text-xs text-text-secondary mt-1"><strong>DOM:</strong> Descanso. Prep comida. Compras tianguis 9AM.</p>
      </div>

      {/* Sleep Hygiene */}
      <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/30">
        <h3 className="text-xs font-semibold text-indigo-400 mb-2">HIGIENE DEL SUEÑO</h3>
        <ul className="space-y-1.5 text-xs text-text-secondary">
          <li>📵 Pantallas apagadas 9:00 PM (30 min antes)</li>
          <li>🌑 Cuarto oscuro y fresco (18-20°C)</li>
          <li>🍽️ No comer menos de 45 min antes</li>
          <li>☕ Nada de café después de las 2 PM</li>
        </ul>
      </div>
    </div>
  );
}
```

## src/pages/SettingsPage.tsx
```tsx
import { useState, useRef } from 'react';
import { useCurrentMonth } from '../hooks/useCurrentMonth';
import { useNotifications } from '../hooks/useNotifications';
import { db } from '../storage/db';
import { useNavigate } from 'react-router-dom';

export function SettingsPage() {
  const navigate = useNavigate();
  const { month, dayOfPlan, startDate, updateStartDate } = useCurrentMonth();
  const { permission, enabledIds, requestPermission, toggleNotification, toggleAll, notifications } = useNotifications();
  const [showNotifs, setShowNotifs] = useState(false);
  const [exportMsg, setExportMsg] = useState('');
  const importRef = useRef<HTMLInputElement>(null);

  const blobToDataURL = (blob: Blob) =>
    new Promise<string>((resolve) => {
      const r = new FileReader();
      r.onloadend = () => resolve(r.result as string);
      r.readAsDataURL(blob);
    });

  const handleExport = async () => {
    setExportMsg('Generando backup...');
    const checklists = await db.dailyChecklists.toArray();
    const weights = await db.weightLogs.toArray();
    const settings = await db.appSettings.toArray();
    const rawPhotos = await db.progressPhotos.toArray();
    const photos = await Promise.all(
      rawPhotos.map(async (p) => ({
        date: p.date,
        note: p.note,
        createdAt: p.createdAt,
        data: await blobToDataURL(p.blob),
      }))
    );
    const data = { checklists, weights, settings, photos, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transform-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportMsg(`Backup descargado (${photos.length} fotos)`);
    setTimeout(() => setExportMsg(''), 3000);
  };

  const handleImport = async (file: File | undefined) => {
    if (!file) return;
    if (!confirm('Esto restaurará el backup sobre tus datos actuales. ¿Continuar?')) return;
    try {
      const data = JSON.parse(await file.text());
      if (Array.isArray(data.checklists)) await db.dailyChecklists.bulkPut(data.checklists);
      if (Array.isArray(data.weights)) await db.weightLogs.bulkPut(data.weights);
      if (Array.isArray(data.settings)) await db.appSettings.bulkPut(data.settings);
      if (Array.isArray(data.photos)) {
        for (const p of data.photos) {
          const blob = await (await fetch(p.data)).blob();
          await db.progressPhotos.add({ date: p.date, note: p.note, createdAt: p.createdAt, blob });
        }
      }
      alert('Backup restaurado. La app se recargará.');
      window.location.reload();
    } catch {
      alert('No se pudo leer el archivo de backup.');
    } finally {
      if (importRef.current) importRef.current.value = '';
    }
  };

  const handleClear = async () => {
    if (confirm('¿Borrar TODOS los datos? Esta acción no se puede deshacer.')) {
      await db.dailyChecklists.clear();
      await db.weightLogs.clear();
      await db.appSettings.clear();
      window.location.reload();
    }
  };

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Ajustes</h1>
      </div>

      {/* Plan Info */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <h3 className="text-xs font-semibold text-accent">PLAN</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary">Mes actual</span>
          <span className="text-sm font-bold text-text-primary">Mes {month}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary">Día del plan</span>
          <span className="text-sm font-bold text-text-primary">{dayOfPlan} de 90</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-sm text-text-secondary">Fecha de inicio</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => updateStartDate(e.target.value)}
            className="bg-bg-elevated text-text-primary text-sm rounded-lg px-2 py-1 border border-slate-600 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-accent">NOTIFICACIONES</h3>
          <span className="text-xs text-text-muted">
            {permission === 'granted' ? '✅ Activas' : permission === 'denied' ? '❌ Bloqueadas' : '⏳ Sin permiso'}
          </span>
        </div>

        {permission !== 'granted' && (
          <button
            onClick={requestPermission}
            className="w-full bg-accent/20 text-accent text-sm py-2 rounded-lg active:scale-95 transition-transform"
          >
            Activar notificaciones
          </button>
        )}

        {permission === 'granted' && (
          <>
            <div className="flex gap-2">
              <button
                onClick={() => toggleAll(true)}
                className="flex-1 bg-success/20 text-success text-xs py-2 rounded-lg"
              >
                Activar todas
              </button>
              <button
                onClick={() => toggleAll(false)}
                className="flex-1 bg-danger/20 text-danger text-xs py-2 rounded-lg"
              >
                Desactivar todas
              </button>
            </div>

            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className="w-full text-left text-xs text-text-muted py-1"
            >
              {showNotifs ? '▼' : '▶'} {enabledIds.size}/{notifications.length} activas · Personalizar
            </button>

            {showNotifs && (
              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => toggleNotification(n.id)}
                    className="w-full flex items-center gap-2 text-left py-1.5"
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      enabledIds.has(n.id) ? 'bg-accent border-accent' : 'border-text-muted'
                    }`}>
                      {enabledIds.has(n.id) && (
                        <svg className="w-3 h-3 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-text-muted font-mono w-10">{String(n.hour).padStart(2, '0')}:{String(n.minute).padStart(2, '0')}</span>
                    <span className="text-xs text-text-secondary flex-1">{n.title}</span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Data */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50 space-y-3">
        <h3 className="text-xs font-semibold text-accent">DATOS</h3>
        <button
          onClick={handleExport}
          className="w-full bg-bg-elevated text-text-primary text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          📥 Exportar datos + fotos (JSON)
        </button>
        <input
          ref={importRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => handleImport(e.target.files?.[0])}
        />
        <button
          onClick={() => importRef.current?.click()}
          className="w-full bg-bg-elevated text-text-primary text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          📤 Importar / restaurar backup
        </button>
        {exportMsg && <p className="text-xs text-success text-center">{exportMsg}</p>}
        <button
          onClick={handleClear}
          className="w-full bg-danger/20 text-danger text-sm py-2.5 rounded-lg active:scale-95 transition-transform"
        >
          🗑️ Borrar todos los datos
        </button>
      </div>
    </div>
  );
}
```

## src/pages/SkincarePage.tsx
```tsx
import { useState } from 'react';
import { morningRoutine, nightRoutine, medications, orataneRules, eyebrowTechnique } from '../data/skincare';

export function SkincarePage() {
  const [tab, setTab] = useState<'am' | 'pm'>('am');

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold text-text-primary">Skincare</h1>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('am')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'am' ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' : 'bg-bg-card text-text-muted border border-slate-700/50'
          }`}
        >
          ☀️ Mañana (5:35)
        </button>
        <button
          onClick={() => setTab('pm')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'pm' ? 'bg-indigo-400/20 text-indigo-400 border border-indigo-400/30' : 'bg-bg-card text-text-muted border border-slate-700/50'
          }`}
        >
          🌙 Noche (9:10)
        </button>
      </div>

      {/* Routine */}
      <div className="space-y-2">
        {(tab === 'am' ? morningRoutine : nightRoutine).map((step) => (
          <div key={step.step} className="bg-bg-card rounded-xl p-4 border border-slate-700/50 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-skincare/20 text-skincare flex items-center justify-center text-sm font-bold flex-shrink-0">
              {step.step}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-text-primary">{step.product}</h4>
              {step.frequency && <span className="text-[10px] text-skincare">{step.frequency}</span>}
              <p className="text-xs text-text-secondary mt-1">{step.how}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Medications */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-accent mb-3">MEDICAMENTOS + SUPLEMENTO</h3>
        <div className="space-y-3">
          {medications.map((med, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-lg">💊</span>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{med.name}</h4>
                <p className="text-xs text-text-muted">{med.dose} · {med.when}</p>
                {med.rule && <p className="text-xs text-amber-400 mt-0.5">{med.rule}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Oratane Rules */}
      <div className="bg-danger/10 rounded-xl p-4 border border-danger/30">
        <h3 className="text-xs font-semibold text-danger mb-2">REGLAS ORATANE</h3>
        <ul className="space-y-2">
          {orataneRules.map((r, i) => (
            <li key={i} className="text-xs">
              <span className="text-danger font-medium">{r.rule}</span>
              <span className="text-text-muted ml-1">— {r.reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Eyebrow Technique */}
      <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
        <h3 className="text-xs font-semibold text-skincare mb-2">CEJAS — TÉCNICA ACEITE DE RICINO</h3>
        <ol className="space-y-1.5">
          {eyebrowTechnique.map((step, i) => (
            <li key={i} className="text-xs text-text-secondary flex gap-2">
              <span className="text-skincare font-bold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
```

## src/pages/WeightLogPage.tsx
```tsx
import { useState, useMemo } from 'react';
import { workouts } from '../data/workouts';
import { useWeightLog } from '../hooks/useWeightLog';
import { formatDateShort } from '../utils/dates';
import { useNavigate } from 'react-router-dom';

const allExercises = workouts.flatMap((w) => w.exercises);
const uniqueExercises = allExercises.filter((e, i, arr) => arr.findIndex((x) => x.id === e.id) === i);

export function WeightLogPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(uniqueExercises[0]?.id || '');
  const { history } = useWeightLog(selectedId);

  const maxWeight = useMemo(() => {
    let max = 0;
    history.forEach((e) => e.sets.forEach((s) => { if (s.weight > max) max = s.weight; }));
    return max;
  }, [history]);

  const pr = useMemo(() => {
    let best = { weight: 0, reps: 0, date: '' };
    history.forEach((e) => e.sets.forEach((s) => {
      if (s.weight > best.weight || (s.weight === best.weight && s.reps > best.reps)) {
        best = { weight: s.weight, reps: s.reps, date: e.date };
      }
    }));
    return best;
  }, [history]);

  return (
    <div className="pt-6 pb-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/gym')} className="text-text-muted active:text-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-text-primary">Historial de Pesos</h1>
      </div>

      {/* Exercise Selector */}
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full bg-bg-card border border-slate-700/50 rounded-xl p-3 text-sm text-text-primary focus:outline-none focus:border-accent"
      >
        {uniqueExercises.map((ex) => (
          <option key={ex.id} value={ex.id}>{ex.name}</option>
        ))}
      </select>

      {/* PR */}
      {pr.weight > 0 && (
        <div className="bg-amber-400/10 rounded-xl p-3 border border-amber-400/30 flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="text-sm font-bold text-amber-400">Record Personal</p>
            <p className="text-xs text-text-secondary">{pr.weight}kg × {pr.reps} reps — {formatDateShort(pr.date)}</p>
          </div>
        </div>
      )}

      {/* Chart */}
      {history.length > 1 && (
        <div className="bg-bg-card rounded-xl p-4 border border-slate-700/50">
          <h3 className="text-xs font-semibold text-text-muted mb-3">Progresión</h3>
          <div className="flex items-end gap-1 h-32">
            {history.slice(-20).reverse().map((entry, i) => {
              const topWeight = Math.max(...entry.sets.map((s) => s.weight));
              const height = maxWeight > 0 ? (topWeight / maxWeight) * 100 : 0;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[8px] text-text-muted">{topWeight}</span>
                  <div
                    className="w-full bg-accent rounded-t-sm min-h-[2px]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* History Table */}
      <div className="space-y-2">
        {history.length === 0 && (
          <p className="text-center text-text-muted text-sm py-8">Aún no hay registros para este ejercicio</p>
        )}
        {history.map((entry, i) => (
          <div key={i} className="bg-bg-card rounded-xl p-3 border border-slate-700/50">
            <p className="text-xs text-text-muted mb-1">{formatDateShort(entry.date)}</p>
            <div className="flex gap-2 flex-wrap">
              {entry.sets.map((s) => (
                <span key={s.setNumber} className="text-xs bg-bg-elevated px-2 py-1 rounded text-text-secondary">
                  S{s.setNumber}: {s.weight}kg × {s.reps}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## src/storage/db.ts
```ts
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
```

## src/utils/dates.ts
```ts
export function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDayOfWeek(): number {
  const d = new Date();
  const day = d.getDay();
  return day === 0 ? 7 : day;
}

export function formatDateShort(dateStr: string): string {
  const [, m, d] = dateStr.split('-').map(Number);
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${d} ${months[m - 1]}`;
}

export function getDayName(dayOfWeek: number): string {
  const names = ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  return names[dayOfWeek];
}

export function daysBetween(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

export function getDateNDaysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
```

## src/utils/image.ts
```ts
// Reduce el tamaño de una imagen antes de guardarla en IndexedDB,
// para que las fotos de progreso no llenen la memoria del teléfono.
export async function compressImage(
  file: File,
  maxSize = 1280,
  quality = 0.82
): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    let { width, height } = bitmap;

    if (width >= height && width > maxSize) {
      height = Math.round((height * maxSize) / width);
      width = maxSize;
    } else if (height > width && height > maxSize) {
      width = Math.round((width * maxSize) / height);
      height = maxSize;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    return await new Promise<Blob>((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob ?? file),
        'image/jpeg',
        quality
      );
    });
  } catch {
    // Si el navegador no soporta createImageBitmap, guarda el original.
    return file;
  }
}
```

## src/utils/notifications.ts
```ts
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
```

## src/utils/periodization.ts
```ts
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
```
