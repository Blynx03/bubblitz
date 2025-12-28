import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import type { BallCharacterType } from '../types/BallCharacter';
import generateBallCharacters from '../utilities/generateBallCharacters';
import useContainerSize from '../hooks/useContainerSize';
import animateContainer from '../utilities/animateContainer';
import ThemeMode from '../components/ThemeMode';
import Title from '../components/Title';
import getTrueOrFalse from '../utilities/getTrueOrFalse';
import GameOver from '../components/GameOver';

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement | null>(null);
  const container = useContainerSize(playAreaRef);
  const { isLightTheme, isAscending, setIsAscending, gameLevel, setGameLevel, ballsCharacter, setBallsCharacter, ballRefs } = useContext(UserContext) as UserContextType;
  const mode = isLightTheme ? 'light-mode' : 'dark-mode';
  const [ targetBallIndex, setTargetBallIndex ] = useState<number>(0);
  const newTargetIndex: number = 0;
  const [ lives, setLives ] = useState<number>(3);
  const [ isGameOver, setIsGameOver ] = useState(false);


  useEffect(() => {
    if (!playAreaRef || !container) return;
    setIsAscending(true);
    setTargetBallIndex(0);
    ballRefs.current = [];
    const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
    animateContainer({container, generatedBalls, ballRefs});
    console.log('container size', container.width, container.height);
    setBallsCharacter(generatedBalls);
  },[gameLevel, container])

  console.log('balls characters ', ballsCharacter)
  // const getAnimateValue = (rotating: boolean, rotateClockwise?: boolean, changeBallSize?: boolean ) => {
  //   let isBallRotating = rotating ? getTrueOrFalse() : false;
  //   let rotationalDirection = rotateClockwise ? 'rotate-cw' : 'rotate-ccw';
  //   let rotateAnimation = isBallRotating ? `${rotationalDirection} linear 3s infinite` : '';

  //   return (`${rotateAnimation}, ${changeBallSize ? ', change-ball-size linear 3s infinite' : ''}`
  //   )}      

  const getAnimateValue = (rotateClockwise?: boolean, changeBallSize?: boolean ) => {
    return (`${rotateClockwise ? 'rotate-cw' : 'rotate-ccw'} linear 3s infinite 
            ${changeBallSize ? ', change-ball-size linear 3s infinite' : ''}`
    )}      

  // This is where the game logic lives
  
  function handleClick(clickedBall: BallCharacterType, el: HTMLElement | null) {
    if (!el) return;
    if ( ballsCharacter[targetBallIndex].ballValue === clickedBall.ballValue) {
      const newTargetIndex = targetBallIndex + 1;
      setTargetBallIndex(newTargetIndex)
      el.style.display = 'none';
      if (ballsCharacter.length === newTargetIndex) {
        // show level is cleared...and button "Click to continue"
        setGameLevel((prev) => prev + 1);
        setBallsCharacter([]); // reset play-area-container children
      }
    } else {
      const livesLeft = lives - 1;
      if (livesLeft === 0) {
        console.log('game over!')
        setIsGameOver(true);
      } else {
        setLives(livesLeft);
        setIsGameOver(false);
      }
      // reduce number of lives... if lives are !0 then proceed with the current level. Show continue button.
      // Also show the should be next ball 
      // if lost 3 times...then game over
    }
  }
  
  return (
    <div className={`play-page-container ${mode}`}>
      <ThemeMode />
      <div className='play-page-title-instruction-level-container'>
        <div className='play-page-title-container'>
          <Title />
        </div>
        <div className='play-page-instruction-level-container'>
          <div className='play-page-instruction-container'>
              <span className='instruction-pre'>Pop the balls in </span>
              <span className='instruction-ball-order'>{isAscending ? 'ASCENDING' : 'DESCENDING'}</span>
              <span className='instruction-post'> order!</span>
          </div>
          <div className='play-page-level'>Level: {gameLevel}</div>
        </div>
      </div>
      <div className='play-page-lives'>Lives: {lives}</div>
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
                className={`ball-value ${ball.ballValue === 6 ? 'six' : ''}`}
                style={{
                  animation: `${ball.isVanishingValue ? 'vanish 5s linear infinite' : ''}`
                }}>
              {ball.ballValue}
              </div>
            </div>
          ))
        }
        {isGameOver ? <GameOver/> : null}
      </div>

    </div>
  )
}

export default PlayPage