import React from 'react'
import { BALL_CHARACTER, type BallCharacterKey } from '../types/BallCharacter';

const getRandomValue = (min: number, max: number, char?: BallCharacterKey) => {
    let value: number = -1;
    do {
        value = Math.floor(Math.random() * max);
    } while (value < min || value > max || (char && Object.values(BALL_CHARACTER).some(ball => ball[char] === value)))
  return value;
}

export default getRandomValue