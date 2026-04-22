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
