import React, { type Dispatch, type SetStateAction, createContext} from 'react'

export interface UserContextType {
    isLightTheme: boolean;
    setIsLightTheme: Dispatch<SetStateAction<boolean>>; 
    gameLevel: number;
    setGameLevel: Dispatch<SetStateAction<number>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export default UserContext