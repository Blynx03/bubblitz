import React, { type Dispatch, type RefObject, type SetStateAction, createContext} from 'react'
import type { BallCharacterType } from '../types/BallCharacter';

export interface UserContextType {
    isLightTheme: boolean;
    setIsLightTheme: Dispatch<SetStateAction<boolean>>; 
    gameLevel: number;
    setGameLevel: Dispatch<SetStateAction<number>>;
    ballsCharacter: BallCharacterType[];
    setBallsCharacter: Dispatch<SetStateAction<BallCharacterType[]>>;
    ballRefs: RefObject<HTMLDivElement[]>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export default UserContext