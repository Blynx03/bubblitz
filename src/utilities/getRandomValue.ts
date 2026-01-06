import { type BallCharacterKey, type BallCharacterType } from '../types/BallCharacter';

const getRandomValue = (min: number, max: number, char?: BallCharacterKey, genBalls?: BallCharacterType[]) => {
    let value: number = -1;
    do {
        value = Math.floor(Math.random() * (max + 1));
    } while (value < min || value > max || (char && genBalls?.some(ball => ball[char] === value)))
  return value;
}

export default getRandomValue