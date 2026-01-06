import { type Dispatch, type RefObject, type SetStateAction } from 'react';
import type { BallCharacterType, ChangingSizeType, MovingType, RotatingType, VanishingValueType } from '../types/BallCharacter';
import { LEVEL_CONFIG } from '../types/LevelConfig';
import getRandomValue from './getRandomValue';
import getTrueOrFalse from './getTrueOrFalse';
import type { ContainerRectType } from '../types/ContainerSize';

const generateBallCharacters = (level: number, container: ContainerRectType, setIsAscending: Dispatch<SetStateAction<boolean>>): BallCharacterType[] => {
    const ballArray = Array.from({length: LEVEL_CONFIG[level].numberOfBalls});
    const existingBallArray: BallCharacterType[] = [];

    const xDir: 'left' | 'right' = getTrueOrFalse() ? 'right' : 'left';
    const yDir: 'up' | 'down' = getTrueOrFalse() ? 'up' : 'down';
    
    const movingQ: boolean[] = [];
    const rotatingQ: boolean[] = [];
    const changingSizeQ: boolean[] = [];
    const vanishingQ: boolean[] = [];
    let timer: number;

    ballArray.forEach((_,i) => {
        LEVEL_CONFIG[level].moving === undefined 
            ? movingQ[i] = false
            : movingQ[i] = getTrueOrFalse() 
        LEVEL_CONFIG[level].rotating === undefined
            ? rotatingQ[i] = false 
            : rotatingQ[i] = getTrueOrFalse()
        LEVEL_CONFIG[level].changingSize === undefined
            ? changingSizeQ[i] = false
            : changingSizeQ[i] = getTrueOrFalse()
        LEVEL_CONFIG[level].vanishingValue === undefined
            ? vanishingQ[i] = false
            : vanishingQ[i] = getTrueOrFalse()
    });

    const generatedBalls = ballArray.map((_,i) => {
        const movingPart: MovingType = LEVEL_CONFIG[level].moving 
            ? movingQ[i]
                ? { isMoving: true as const, move: { moveSpeed: getRandomValue(0, 2), xDirection: xDir, yDirection: yDir}}
                : { isMoving: false as const, move: { moveSpeed: 0, xDirection: xDir, yDirection: yDir} }
            : { isMoving: false as const, move: { moveSpeed: 0, xDirection: xDir, yDirection: yDir } }
        
        const rotatingPart: RotatingType = LEVEL_CONFIG[level].rotating
            ? rotatingQ[i]
                ? { isRotating: true as const, rotate: { rotateClockwise: getTrueOrFalse() }}
                : { isRotating: false as const }
            : { isRotating: false as const }

        const changingSizePart: ChangingSizeType = LEVEL_CONFIG[level].changingSize 
            ? changingSizeQ[i]
                ? { isChangingSize: true as const, sizeChange: { sizeOffset: getRandomValue(20, 30), sizeChangeSpeed: getRandomValue(0, 8) }}
                : { isChangingSize: false as const }
            : { isChangingSize: false as const }

        const vanishingPart: VanishingValueType = LEVEL_CONFIG[level].vanishingValue
            ? vanishingQ[i]
                ? { isVanishingValue: true as const, vanishingSpeed: getRandomValue(0, 8) }
                : { isVanishingValue: false as const }  
            : { isVanishingValue: false as const }  

        // *** GET SCREEN SIZE WIDTH AND PLAY WITH THE MAX SIZE
        const ballSize = getRandomValue(70, 140, 'ballSize', existingBallArray);

        if (LEVEL_CONFIG[level].timer) {
            
            timer = LEVEL_CONFIG[level].timer
        }

        const ball: BallCharacterType = {
            ballId: i,
            ballValue: getRandomValue(LEVEL_CONFIG[level].minValue, LEVEL_CONFIG[level].maxValue, 'ballValue', existingBallArray),     
            xStartingPosition: getRandomValue(0, container.width - ballSize, 'xStartingPosition', existingBallArray),
            yStartingPosition: getRandomValue(0, container.height - ballSize, 'yStartingPosition', existingBallArray),
            ballColor: getRandomValue(0, 35, 'ballColor', existingBallArray),
            ballSize,
            timer,
            ...movingPart,
            ...rotatingPart,
            ...changingSizePart,
            ...vanishingPart
        }
        existingBallArray.push(ball);
        return ball;
    });
    // sort balls depending on values

    const isToBeSortedAscending = LEVEL_CONFIG[level].ballValueOrder ? getTrueOrFalse() : true;

    setIsAscending(isToBeSortedAscending);

    const sortedBalls = [...generatedBalls].sort((a, b) => isToBeSortedAscending ? a.ballValue - b.ballValue : b.ballValue - a.ballValue);
    
    return sortedBalls;
}

export default generateBallCharacters