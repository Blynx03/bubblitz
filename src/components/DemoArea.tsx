import { useContext, useEffect, useRef, useState } from 'react'
import useContainerSize from '../hooks/useContainerSize';
import UserContext, { type UserContextType } from '../context/UserContext';
import generateBallCharacters from '../utilities/generateBallCharacters';
import animateContainer from '../utilities/animateContainer';
import type { BallCharacterType } from '../types/BallCharacter';

const DemoArea = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const container = useContainerSize(containerRef);
    const [ demoBalls, setDemoBalls ] = useState<BallCharacterType[]>([])
    const { setIsAscending } = useContext(UserContext) as UserContextType;
    const demoRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        if (!container) return;
        if (container.width === 0 || container.height === 0) return;
        demoRefs.current = [];

        const generatedBalls: BallCharacterType[] = generateBallCharacters(0, container, setIsAscending);
        setDemoBalls(generatedBalls);

        const stopAnimation = animateContainer({container, generatedBalls, ballRefs: demoRefs});
        return () => { 
            stopAnimation();
            demoRefs.current = [];
        };
    }, [container?.width, container?.height]);

    const getAnimateValue = (ball: BallCharacterType | null, changeBallSize?: boolean ) => {
        let rotateDirection = '';
        if (ball) {
            rotateDirection = `${ball.rotate?.rotateClockwise ? 'rotate-cw' : 'rotate-ccw'}`
        }
        return (`${rotateDirection} linear 3s infinite
                 ${changeBallSize ? `, change-ball-size linear ${ball?.sizeChange?.sizeChangeSpeed}s infinite` : ''}`
        )}      

    return ( 
        <div ref={containerRef} className='demo-container'>
            {demoBalls.map((ball, i) => 
                (
                <div 
                    key={ball.ballId} 
                    ref={el => { if (el) demoRefs.current[ball.ballId] = el}} 
                    className={'ball'} 
                    style={{ 
                        backgroundColor:`var(--ball-color${ball.ballColor})`, 
                        width: ball.ballSize, 
                        height: ball.ballSize,
                        fontSize: `${ball.ballSize}px`, 
                        left: `${ball.xStartingPosition}px`, 
                        top: `${ball.yStartingPosition}px`, 
                        zIndex: demoBalls.length - i,
                        animation: ball.isRotating || ball.isChangingSize ? getAnimateValue(ball, ball.isChangingSize) : undefined
                    }}>

                    <div 
                        className={`ball-value ${[6, 9, 66, 68, 86, 89, 98, 99].includes(ball.ballValue) ? 'six' : ''}`}
                        style={{
                            animation: `${ball.isVanishingValue ? `vanish ${ball.vanishingSpeed}s linear infinite` : undefined}`
                        }}
                    >{ball.ballValue}</div>
                </div>
                )
            )}
        </div>
    )
}

export default DemoArea