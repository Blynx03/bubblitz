import { BALL_CHARACTER, type BallCharacterKey, type BallCharacterType } from '../types/BallCharacter';

const getRandomValue = (min: number, max: number, char?: BallCharacterKey, genBalls?: BallCharacterType[]) => {
    let value: number = -1;
    do {
        value = Math.floor(Math.random() * (max + 1));
    } while (value < min || value > max || (char && genBalls?.some(ball => ball[char] === value)))
    // } while (value < min || value > max)
  return value;
}

export default getRandomValue