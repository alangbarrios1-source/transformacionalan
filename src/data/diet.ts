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
