import { useContext, useEffect, useRef, useState } from 'react'
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
import useQuit from '../utilities/useQuit';
import { playSound } from '../utilities/playSound';

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement | null>(null);
  const container = useContainerSize(playAreaRef);
  const { isLightTheme, isAscending, setIsAscending, setPlayKey, gameLevel, setGameLevel, gameTimer, setGameTimer, ballsCharacter, setBallsCharacter, ballRefs, hasTimer, setHasTimer } = useContext(UserContext) as UserContextType;
  const mode = isLightTheme ? 'light-mode' : 'dark-mode';
  const [ targetBallIndex, setTargetBallIndex ] = useState<number>(0);
  const [ lives, setLives ] = useState<number>(3);
  const [ isGameOver, setIsGameOver ] = useState(false);
  const [ animateLives, setAnimateLives ] = useState(false);
  const [ animateLevel, setAnimateLevel ] = useState(false);
  const nav = useNavigate();
  const quitGame = useQuit();

  useEffect(() => {
    if (!playAreaRef || !container) return;
    setIsAscending(true);
    setTargetBallIndex(0);
    ballRefs.current = [];

    const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
    setBallsCharacter(generatedBalls);

    const stopAnimation = animateContainer({container, generatedBalls, ballRefs});

    return () => {
      stopAnimation();
    };
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
            playSound('gameover');
            clearInterval(id);
            return 0;
          } else {
            playSound('tick')
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
            ${changeBallSize ? `, change-ball-size linear ${ball?.sizeChange?.sizeChangeSpeed}s infinite` : ''}`
    )}      

  // Game Logic
  
  function handleClick(clickedBall: BallCharacterType, el: HTMLElement | null) {
    if (!el) return;
    playSound('choice')
    if ( ballsCharacter[targetBallIndex].ballValue === clickedBall.ballValue) {
      // correct chosen ball
      const newTargetIndex = targetBallIndex + 1;
      el.style.animation = 'pop 50ms linear forwards';
      el.style.pointerEvents = 'none';
      el.addEventListener('animationend', () => { 
        removeBall(el);
      },
      { once: true }
    );
      setTargetBallIndex(newTargetIndex);

      if (ballsCharacter.length === newTargetIndex) {
        // after last correct ball is selected
        const newLevel = gameLevel + 1;
        if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].includes(newLevel)) {
          setLives(prev => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].includes(newLevel) ? prev + 1 : prev);
          playSound('extralife');
        }
        playSound('levelup');
        setGameLevel(newLevel);
        setBallsCharacter([]); 
      }
    } else {
      // wrong chosen ball
        playSound('losealife');
        el.style.animation = 'shake 0.2s linear';
        const correctBall = ballRefs.current[clickedBall.ballId];
        correctBall.style.animation = 'change-background-color 0.2s linear';
        const child = correctBall.firstElementChild as HTMLElement | null;
        if (!child) return;

        child.style.animation = 'shake 0.1s linear';

      const livesLeft = lives - 1;
      setLives(livesLeft);
      if (livesLeft === 0) {
        playSound('gameover');
        setIsGameOver(true);
      } else {
        setIsGameOver(false);
      }
    }
  }

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
        <div className='play-page-level-timer-lives-container'>
          <div className='play-page-level'>Level: 
            <span className={`play-page-level-value ${animateLevel ? 'emphasize-level' : ''}`}> {gameLevel}</span>
          </div>
        {hasTimer ? <ShowTimer /> : null}
          <div className='play-page-lives'>Lives: 
            <span className={`play-page-lives-value ${animateLives ? 'emphasize-lives' : ''}`}> {lives}</span>
          </div>
        </div>
      </div>
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
                pointerEvents: `${isGameOver ? 'none' : 'auto'}`,
                fontSize: `${ball.ballSize}px`,
                left: `${ball.xStartingPosition}px`,
                top: `${ball.yStartingPosition}px`,
                zIndex: ballsCharacter.length - i,
                animation: ball.isRotating || ball.isChangingSize ? getAnimateValue(ball, ball.isChangingSize) : undefined
              }}
                onAnimationEnd={() => isGameOver ? removeBall(ballRefs.current[ball.ballId]) : null}>
              <div 
                className={`ball-value ${[6, 9, 66, 68, 86, 89, 98, 99].includes(ball.ballValue) ? 'six' : ''}`}
                style={{
                  animation: `${ball.isVanishingValue ? `vanish ${ball.vanishingSpeed}s linear infinite` : ''}`
                }}>
              {ball.ballValue}
              </div>
            </div>
          ))
        }
        {isGameOver ? <GameOver onRestart={resetGame}/> : null}
      </div>
      <Button btnClass='quit-btn btn' btnText='Quit' onClick={quitGame} />
      <Footer />
    </div>
  )
}

export default PlayPage