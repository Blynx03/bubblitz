export type BallCharacterType = {
    ballId: number;
    ballValue: number;
    xStartingPosition: number;
    yStartingPosition: number;
    ballColor: number;
    ballSize: number;
    
} & MovingType & RotatingType & ChangingSizeType & VanishingValueType;

type MovingType = 
    | { isMoving: true; move: { moveSpeed: number }}
    | { isMoving?: false; move?: never };

type RotatingType = 
    | { isRotating: true; rotate: { rotateClockwise: boolean }}
    | { isRotating?: false; rotate?: never };

type ChangingSizeType =
    | { isChangingSize: true; sizeChange: { sizeOffset: number, sizeChangeSpeed: number }}
    | { isChangingSize?: false; sizeChange?: never };

type VanishingValueType = 
    | { isVanishingValue: true; speed: { fast: number } }
    | { isVanishingValue?: false; speed?: never }


export type BallCharacterKey = keyof BallCharacterType;

export const BALL_CHARACTER: Record<number, BallCharacterType> = {};