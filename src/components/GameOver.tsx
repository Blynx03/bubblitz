import Button from './Button'
import { useNavigate } from 'react-router-dom'

const GameOver = ({onRestart}: {onRestart: () => void}) => {
    const nav = useNavigate();

  return (
    <div className='game-over-container'>
        <div className='game-over'>GAME OVER!</div>
        <Button btnClass='game-over-play-again-btn btn' btnText='PLAY AGAIN' onClick={onRestart}/>
        <Button btnClass='game-over-quit-btn btn' btnText='QUIT' onClick={() => nav('/')} />
    </div>
  )
}

export default GameOver