import type { BallCharacterType } from '../types/BallCharacter';
import { LEVEL_CONFIG } from '../types/LevelConfig';
import getRandomValue from './getRandomValue';
import getTrueOrFalse from './getTrueOrFalse';

const generateBallCharacters = (level: number) => {

    const character: BallCharacterType = {
        ballValue: getRandomValue(LEVEL_CONFIG[level].minValue, LEVEL_CONFIG[level].maxValue),
        ballColor: getRandomValue(0, 14, 'ballColor'),
    }

    const movingPart = LEVEL_CONFIG[level].moving
        ? { isMoving: true as const, move: { moveSpeed: getRandomValue(0, 8)}}
        : { isMoving: false as const }
    
    const rotatingPart = LEVEL_CONFIG[level].rotating
        ? { isRotating: true as const, rotate: { rotateClockwise: getTrueOrFalse() }}
        : { isRotating: false as const }

    const changingSizePart = LEVEL_CONFIG[level].changingSize 
        ? { isChangingSize: true as const, sizeChange: { minSize: 20, maxSize: getRandomValue(20, 50) }}
        : { isChangingSize: false as const }

    const vanishingPart = LEVEL_CONFIG[level].vanishingValue
        ? { vanishingValue: true as const, speed: { fast: getTrueOrFalse() }}
        : { vanishingValue: false as const }   
    
    return {
        ...character,
        ...movingPart,
        ...rotatingPart,
        ...changingSizePart,
        ...vanishingPart
    };
}

export default generateBallCharacters