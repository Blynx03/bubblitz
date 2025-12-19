export type BallCharacterType = {
    ballValue: number;
    ballColor: number;
    
} & MovingType & RotatingType & ChangingSizeType & VanishingValueType;

type MovingType = 
    | { isMoving: true; move: { moveSpeed: number }}
    | { isMoving?: false; move?: never };

type RotatingType = 
    | { isRotating: true; rotate: { rotateClockwise: boolean }}
    | { isRotating?: false; rotate?: never };

type ChangingSizeType =
    | { isChangingSize: true; sizeChange: { minSize: number, maxSize: number }}
    | { isChangingSize?: false; sizeChange?: never };

type VanishingValueType = 
    | { vanishingValue: true; speed: { fast: boolean } }
    | { vanishingValue?: false; speed?: never }


export type BallCharacterKey = keyof BallCharacterType;

export const BALL_CHARACTER: Record<number, BallCharacterType> = {};