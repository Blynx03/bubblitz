import React, { useContext } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import UserContext, { type UserContextType } from '../context/UserContext';

const GameOver = () => {
    const nav = useNavigate();
    const { setPlayKey } = useContext(UserContext) as UserContextType;

    function handleClick() {
        setPlayKey(key => key + 1);
        nav('/play');
    }

  return (
    <div className='game-over-container'>
        <div className='game-over'>GAME OVER!</div>
        <Button btnClass='game-over-play-again-btn btn' btnText='PLAY AGAIN' onClick={() => handleClick()}/>
        <Button btnClass='game-over-quit-btn btn' btnText='QUIT' onClick={() => nav('/')} />
    </div>
  )
}

export default GameOver