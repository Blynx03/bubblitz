import React, { use, useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

const ShowTimer = () => {
    const { gameTimer } = useContext(UserContext) as UserContextType;

  return (
    <div className='timer-container'>
        <div className="timer">{`${gameTimer}:00`}</div>
    </div>
  )
}

export default ShowTimer