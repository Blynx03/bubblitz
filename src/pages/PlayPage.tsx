import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import type { BallCharacterType } from '../types/BallCharacter';
import generateBallCharacters from '../utilities/generateBallCharacters';
import useContainerSize from '../hooks/useContainerSize';
import animateContainer from '../utilities/animateContainer';
import ThemeMode from '../components/ThemeMode';
import Title from '../components/Title';
import GameOver from '../components/GameOver';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ShowTimer from '../components/ShowTimer';
import { LEVEL_CONFIG } from '../types/LevelConfig';

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement | null>(null);
  const container = useContainerSize(playAreaRef);
  const { isLightTheme, isAscending, setIsAscending, setPlayKey, gameLevel, setGameLevel, gameTimer, setGameTimer, ballsCharacter, setBallsCharacter, ballRefs, hasTimer, setHasTimer } = useContext(UserContext) as UserContextType;
  const mode = isLightTheme ? 'light-mode' : 'dark-mode';
  const [ targetBallIndex, setTargetBallIndex ] = useState<number>(0);
  const newTargetIndex: number = 0;
  const [ lives, setLives ] = useState<number>(3);
  const [ isGameOver, setIsGameOver ] = useState(false);
  const [ animateLives, setAnimateLives ] = useState(false);
  const [ animateLevel, setAnimateLevel ] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (!playAreaRef || !container) return;
    setIsAscending(true);
    setTargetBallIndex(0);
    ballRefs.current = [];

    const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
    animateContainer({container, generatedBalls, ballRefs});
    setBallsCharacter(generatedBalls);
  },[gameLevel, container]);

  useEffect(() => {
    if (LEVEL_CONFIG[gameLevel].timer) {
      setHasTimer(true);
      setGameTimer(LEVEL_CONFIG[gameLevel].timer);
    } else {
      setHasTimer(false)
    }
  },[gameLevel])

  useEffect(() => {
    setAnimateLives(true);
    const id = setTimeout(() => {
      setAnimateLives(false)}, 1000);
    return () => clearTimeout(id);
  },[lives]);

  useEffect(() => {
    setAnimateLevel(true);
    const id = setTimeout(() => {
      setAnimateLevel(false)}, 1000);
    return () => clearTimeout(id);
  },[gameLevel]);

  useEffect(() => {
    if (!hasTimer) return;
    if (isGameOver) return;

    if (gameTimer > 0) {
      const id = setInterval(() => {
        setGameTimer((prev) => {
          if (prev <= 1) {
            setIsGameOver(true);
            clearInterval(id);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [gameLevel, hasTimer, isGameOver]);

  const getAnimateValue = (ball: BallCharacterType | null, changeBallSize?: boolean ) => {
    let rotateDirection = '';
    if (ball) {
      rotateDirection = `${ball.rotate?.rotateClockwise ? 'rotate-cw' : 'rotate-ccw'}`
    }
    return (`${rotateDirection} linear 3s infinite 
            ${changeBallSize ? ', change-ball-size linear 3s infinite' : ''}`
    )}      

  // Game Logic
  
  function handleClick(clickedBall: BallCharacterType, el: HTMLElement | null) {
    if (!el) return;
    if ( ballsCharacter[targetBallIndex].ballValue === clickedBall.ballValue) {
      const newTargetIndex = targetBallIndex + 1;
      el.style.animation = 'pop 0.6s linear forwards';
      el.style.pointerEvents = 'none';
      el.addEventListener('animationend', () => { 
        removeBall(el);
      },
      { once: true }
    );
      setTargetBallIndex(newTargetIndex);

      if (ballsCharacter.length === newTargetIndex) {
        // show level is cleared...and button "Click to continue"
        setGameLevel((prev) => prev + 1);
        setBallsCharacter([]); // reset play-area-container children
      }
    } else {
        el.style.animation = 'shake 2.6s linear';
        const correctBall = ballRefs.current[clickedBall.ballId];
        correctBall.style.animation = 'wrong-guess 2s linear';
        const child = correctBall.firstElementChild as HTMLElement | null;
        if (!child) return;

        child.style.animation = 'change-color 2s linear';

      const livesLeft = lives - 1;
      setLives(livesLeft);
      if (livesLeft === 0) {
        console.log('game over!')
        setIsGameOver(true);
      } else {
        // setLives(livesLeft);
        setIsGameOver(false);
      }
      // reduce number of lives... if lives are !0 then proceed with the current level. Show continue button.
      // Also show the should be next ball 
      // if lost 3 times...then game over
    }
  }

  console.log('balls character = ', ballsCharacter)

  function removeBall(el: HTMLElement | null) {
    if (!el) return;
    el.style.display = 'none';
  }

  const resetGame = () => {
    setGameLevel(1);
    setLives(3);
    setIsGameOver(false);
    setBallsCharacter([]);
    setHasTimer(false);
    setPlayKey(key => key + 1);
    nav('/play');
  }
  
  console.log('game over = ', isGameOver)
  return (
    <div className={`play-page-container ${mode}`}>
      <div className='play-page-hud-container'>
        <div className='play-page-title-and-theme-container'>
          <Title />
          <ThemeMode />
        </div>
        <div className='play-page-instruction-container'>
            <span className='instruction-pre'>Pop the balls in&nbsp;</span>
            <span className='instruction-ball-order'>{isAscending ? 'ASCENDING' : 'DESCENDING'}</span>
            <span className='instruction-post'>&nbsp;order!</span>
        </div>
        <div className='play-page-level-lives-container'>
          <div className='play-page-level'>Level: 
            <span className={`play-page-level-value ${animateLevel ? 'emphasize' : ''}`}> {gameLevel}</span>
          </div>
          <div className='play-page-lives'>Lives: 
            <span className={`play-page-lives-value ${animateLives ? 'emphasize' : ''}`}> {lives}</span>
          </div>
        </div>
      </div>
      <div ref={playAreaRef} className='play-area-container'>
        {hasTimer ? <ShowTimer /> : null}
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
                pointerEvents: `${isGameOver ? 'none' : 'auto'}`,
                fontSize: `${ball.ballSize}px`,
                left: `${ball.xStartingPosition}px`,
                top: `${ball.yStartingPosition}px`,
                // zIndex: `${ball.zIndex}`,
                zIndex: ballsCharacter.length - i,
                animation: getAnimateValue(ball.isRotating ? ball : null, ball.isChangingSize )
              }}
                onAnimationEnd={() => isGameOver ? removeBall(ballRefs.current[ball.ballId]) : null}>
              <div 
                className={`ball-value ${ball.ballValue === 6 || ball.ballValue === 66 || ball.ballValue === 9 || ball.ballValue === 99 ? 'six' : ''}`}
                style={{
                  animation: `${ball.isVanishingValue ? 'vanish 5s linear infinite' : ''}`
                }}>
              {ball.ballValue}
              </div>
            </div>
          ))
        }
        {isGameOver ? <GameOver onRestart={resetGame}/> : null}
      </div>
      <Button btnClass='play-btn btn' btnText='Quit' onClick={() => nav('/')} />
      <Footer />
    </div>
  )
}

export default PlayPage