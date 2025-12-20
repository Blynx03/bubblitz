import { useContext, useEffect, useRef } from 'react'
import useContainerSize from '../utilities/useContainerSize';
import UserContext, { type UserContextType } from '../context/UserContext';
import generateBallCharacters from '../utilities/generateBallCharacters';

const DemoArea = () => {
    const demoContainerRef = useRef<HTMLDivElement | null>(null);
    const container = useContainerSize(demoContainerRef);
    const { gameLevel, ballsCharacter, setBallsCharacter, ballRefs } = useContext(UserContext) as UserContextType;

    useEffect(() => {
        if (!container || !demoContainerRef) return;
        setBallsCharacter(generateBallCharacters(gameLevel, container, demoContainerRef));
    }, [gameLevel, container]);

    console.log('balls character = ', ballsCharacter);

    return (
        <div ref={demoContainerRef} className='demo-container'>
            {ballsCharacter.map((ball, i) => 
                (
                <div key={i} ref={el => { if (el) ballRefs.current[i] = el}} className={'ball'} style={{backgroundColor:`var(--ball-color${ball.ballColor})`, width: ball.ballSize, height: ball.ballSize, left: `${ball.xStartingPosition}px`, top: `${ball.yStartingPosition}px`}}>
                    <div className='ball-value' style={{fontSize: `${ball.ballSize - 70}px`}}>{ball.ballValue}</div>
                </div>
                )
            )}
        </div>
    )
}

export default DemoArea