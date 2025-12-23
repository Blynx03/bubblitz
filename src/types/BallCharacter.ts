export type BallCharacterType = {
    ballId: number,
    ballValue: number,
    xStartingPosition: number,
    yStartingPosition: number,
    zIndex?: number,
    ballColor: number,
    ballSize: number
} & MovingType & RotatingType & ChangingSizeType & VanishingValueType;

export type MovingType = 
    | { isMoving: true; move: { moveSpeed: number, xDirection: 'left' | 'right', yDirection: 'up' | 'down' }}
    | { isMoving?: false; move: { moveSpeed: number, xDirection: 'left' | 'right', yDirection: 'up' | 'down' }};

export type RotatingType = 
    | { isRotating: true; rotate: { rotateClockwise: boolean }}
    | { isRotating?: false; rotate?: never }

export type ChangingSizeType =
    | { isChangingSize: true; sizeChange: { sizeOffset: number, sizeChangeSpeed: number }}
    | { isChangingSize?: false; sizeChange?: never };

export type VanishingValueType = 
    | { isVanishingValue: true; vanishingSpeed: number }
    | { isVanishingValue?: false; vanishingSpeed?: never }


export type BallCharacterKey = keyof BallCharacterType;

export const BALL_CHARACTER: Record<number, BallCharacterType> = {};