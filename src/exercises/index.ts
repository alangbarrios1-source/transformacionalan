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
