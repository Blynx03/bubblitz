import { useContext, type RefObject } from 'react';
import type { BallCharacterType } from '../types/BallCharacter';
import { LEVEL_CONFIG } from '../types/LevelConfig';
import getRandomValue from './getRandomValue';
import getTrueOrFalse from './getTrueOrFalse';
import type { ContainerRectType } from '../types/ContainerSize';
import animateContainer from './animateContainer';

const generateBallCharacters = (level: number, container: ContainerRectType, containerRef: RefObject<HTMLDivElement | null>): BallCharacterType[] => {
    const ballArray = Array.from({length: LEVEL_CONFIG[level].numberOfBalls});
    // const { setBallsCharacter } = useContext(UserContext) as UserContextType;

    const existingBallArray: BallCharacterType[] = [];

  
    
    return ballArray.map((_,i) => {
        const movingPart = LEVEL_CONFIG[level].moving 
            ? getTrueOrFalse()
                ? { isMoving: true as const, move: { moveSpeed: getRandomValue(0, 8)}}
                : { isMoving: false as const }
            : { isMoving: false as const }
        
        const rotatingPart = LEVEL_CONFIG[level].rotating
            ? getTrueOrFalse()
                ? { isRotating: true as const, rotate: { rotateClockwise: getTrueOrFalse() }}
                : { isRotating: false as const }
            : { isRotating: false as const }

        const changingSizePart = LEVEL_CONFIG[level].changingSize 
            ? getTrueOrFalse()
                ? { isChangingSize: true as const, sizeChange: { sizeOffset: getRandomValue(20, 30), sizeChangeSpeed: getRandomValue(0, 8) }}
                : { isChangingSize: false as const }
            : { isChangingSize: false as const }

        const vanishingPart = LEVEL_CONFIG[level].vanishingValue
            ? getTrueOrFalse()
                ? { isVanishingValue: true as const, speed: { fast: getRandomValue(0, 8) }}
                : { isVanishingValue: false as const }  
            : { isVanishingValue: false as const }  
        
        const ballSize = getRandomValue(70, 200, 'ballSize', existingBallArray);

        const ball: BallCharacterType = {
            ballId: i,
            ballValue: getRandomValue(LEVEL_CONFIG[level].minValue, LEVEL_CONFIG[level].maxValue, 'ballValue', existingBallArray),     
            xStartingPosition: getRandomValue(0, container.width - ballSize, 'xStartingPosition', existingBallArray),
            yStartingPosition: getRandomValue(0, container.height - ballSize, 'yStartingPosition', existingBallArray),
            ballColor: getRandomValue(0, 14, 'ballColor', existingBallArray),
            ballSize,
            ...movingPart,
            ...rotatingPart,
            ...changingSizePart,
            ...vanishingPart
        }
        existingBallArray.push(ball);
        animateContainer(level, container, containerRef, existingBallArray);
        return ball;
    });
}

export default generateBallCharacters