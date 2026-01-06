import { type Dispatch, type RefObject, type SetStateAction, createContext} from 'react'
import type { BallCharacterType } from '../types/BallCharacter';

export interface UserContextType {
    isLightTheme: boolean;
    setIsLightTheme: Dispatch<SetStateAction<boolean>>; 
    gameLevel: number;
    setGameLevel: Dispatch<SetStateAction<number>>;
    ballsCharacter: BallCharacterType[];
    setBallsCharacter: Dispatch<SetStateAction<BallCharacterType[]>>;
    ballRefs: RefObject<HTMLElement[]>;
    isAscending: boolean;
    setIsAscending: Dispatch<SetStateAction<boolean>>;
    playKey: number;
    setPlayKey: Dispatch<SetStateAction<number>>;
    hasTimer: boolean;
    setHasTimer: Dispatch<SetStateAction<boolean>>;
    gameTimer: number;
    setGameTimer: Dispatch<SetStateAction<number>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export default UserContext