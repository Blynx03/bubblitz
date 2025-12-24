import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import type { BallCharacterType } from '../types/BallCharacter';
import generateBallCharacters from '../utilities/generateBallCharacters';
import useContainerSize from '../hooks/useContainerSize';
import animateContainer from '../utilities/animateContainer';
import ThemeMode from '../components/ThemeMode';

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement | null>(null);
  const container = useContainerSize(playAreaRef);
  const { isLightTheme, isAscending, setIsAscending, gameLevel, ballsCharacter, setBallsCharacter, ballRefs } = useContext(UserContext) as UserContextType;
  const mode = isLightTheme ? 'light-mode' : 'dark-mode';
  const [ targetBallIndex, setTargetBallIndex ] = useState<number>(0);

  useEffect(() => {
    if (!playAreaRef || !container) return;
    setIsAscending(true);
    const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
    animateContainer({container, generatedBalls, ballRefs});
    setBallsCharacter(generatedBalls);
  },[gameLevel, container])

  const getAnimateValue = (rotateClockwise?: boolean, changeBallSize?: boolean ) => {
    return (`${rotateClockwise ? 'rotate-cw' : 'rotate-ccw'} linear 3s infinite 
            ${changeBallSize ? ', change-ball-size linear 3s infinite' : ''}`
    )}      

  const instruction = `Pop the balls in ${isAscending ? 'ASCENDING' : 'DESCENDING'} order!`;
    console.log('ascending? = ', isAscending)
  // This is where the game logic lives
  function handleClick(clickedBall: BallCharacterType, el: HTMLElement | null) {
    if (!el) return;
    if ( ballsCharacter[targetBallIndex].ballValue === clickedBall.ballValue) {
      setTargetBallIndex(i => i + 1)
      el.style.display = 'none';
    } else {
      console.log('game over!')
      // reduce number of lives... if lives are !0 then proceed with the current level. Show continue button.
      // Also show the should be next ball 
      // if lost 3 times...then game over
    }
  }
  
  return (
    <div className={`play-page-container ${mode}`}>
      <div className='play-page-instruction-level-container'>
        <div className='play-page-instruction'>{instruction}</div>
        <div className='play-page-level'>Level: {gameLevel}</div>
      </div>
      <ThemeMode />
      <div ref={playAreaRef} className='play-area-container'>
        {ballsCharacter.map((ball,i) => 
          (
            <div
              key={ball.ballId}
              ref={el => { if (el) ballRefs.current[ball.ballId] = el}}
              className={'ball'}
              onClick={() => handleClick(ball, ballRefs.current[ball.ballId])}
              style={{
                backgroundColor:`var(--ball-color${ball.ballColor})`, 
                width: ball.ballSize,
                height: ball.ballSize,
                fontSize: `${ball.ballSize}px`,
                left: `${ball.xStartingPosition}px`,
                top: `${ball.yStartingPosition}px`,
                zIndex: `${ball.zIndex}`,
                animation: getAnimateValue(ball.isRotating ? ball.rotate?.rotateClockwise : false, ball.isChangingSize )
              }}>
              <div 
                className='ball-value'
                style={{
                  animation: `${ball.isVanishingValue ? 'vanish 5s linear infinite' : ''}`
                }}>
              {ball.ballValue}
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default PlayPage