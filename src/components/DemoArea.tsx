import { useContext, useEffect, useRef } from 'react'
import useContainerSize from '../hooks/useContainerSize';
import UserContext, { type UserContextType } from '../context/UserContext';
import generateBallCharacters from '../utilities/generateBallCharacters';
import animateContainer from '../utilities/animateContainer';
import type { BallCharacterType } from '../types/BallCharacter';
import getTrueOrFalse from '../utilities/getTrueOrFalse';

const DemoArea = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const container = useContainerSize(containerRef);
    const { gameLevel, setIsAscending, ballsCharacter, setBallsCharacter, ballRefs } = useContext(UserContext) as UserContextType;

    useEffect(() => {
        if (!container || !containerRef) return;
        const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
        animateContainer({container, generatedBalls, ballRefs});
        setBallsCharacter(generatedBalls);
    }, [gameLevel, container]);

    const getAnimateValue = (rotateClockwise?: boolean, changeBallSize?: boolean ) => {
        return (`${rotateClockwise ? 'rotate-cw' : 'rotate-ccw'} linear 3s infinite 
                ${changeBallSize ? ', change-ball-size linear 3s infinite' : ''}`
        )}      

    return ( 
        <div ref={containerRef} className='demo-container'>
            {ballsCharacter.map((ball, i) => 
                (
                <div 
                    key={ball.ballId} 
                    ref={el => { if (el) ballRefs.current[ball.ballId] = el}} 
                    className={'ball'} 
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
                        }}
                    >{ball.ballValue}</div>
                    {/* <div className='ball-value' style={{fontSize: `${ball.ballSize - 70}px`}}>{ball.ballValue}</div> */}
                </div>
                )
            )}
        </div>
    )
}

export default DemoArea