import { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

const ShowTimer = () => {
    const { gameTimer } = useContext(UserContext) as UserContextType;

    const time = gameTimer < 10 ? `0:0${gameTimer}` : `0:${gameTimer}`

  return (
    <div className='timer-container'>
        <div className="timer">{time}</div>
    </div>
  )
}

export default ShowTimer