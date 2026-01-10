import { useCallback, useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { playSound } from './playSound';

const useQuit = () => {
    const { setGameLevel, setBallsCharacter, ballRefs } = useContext(UserContext) as UserContextType;
    const nav = useNavigate();
    playSound('click');

    return useCallback(() => {
        setGameLevel(0);
        setBallsCharacter([]);
        ballRefs.current = [];
        nav('/');
    }, [setGameLevel, setBallsCharacter, ballRefs, nav])
    
}

export default useQuit