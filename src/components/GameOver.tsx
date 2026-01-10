import useQuit from '../utilities/useQuit';
import Button from './Button'

const GameOver = ({onRestart}: {onRestart: () => void}) => {
  const quitGame = useQuit();

  return (
    <div className='game-over-container'>
        <div className='game-over'>GAME OVER!</div>
        <Button btnClass='game-over-play-again-btn btn' btnText='PLAY AGAIN' onClick={onRestart}/>
        <Button btnClass='game-over-quit-btn btn' btnText='QUIT' onClick={quitGame} />
    </div>
  )
}

export default GameOver