import React from 'react'
import type { ContainerRectType } from '../types/ContainerSize'
import getRandomValue from './getRandomValue'
import type { BallCharacterType } from '../types/BallCharacter'

type animateType = {
    gameLevel: number,
    container: ContainerRectType,
    containerRef: React.RefObject<HTMLDivElement | null>,
    generatedBalls: BallCharacterType[],
    ballRefs: React.RefObject<HTMLElement[]>
}

// gameLevel: number, container: ContainerRectType, containerRef: React.RefObject<HTMLElement>, ballsCharacter: BallCharacterType[]

const animateContainer = ({gameLevel, container, containerRef, generatedBalls, ballRefs }: animateType) => {
    let speed: number = getRandomValue(1, 8); // random speed
    let rafId: number;

    const animate = () => {

        generatedBalls.forEach((ball, i) => {

            if (!ball.isMoving) return;

            if (ball.move.xDirection === 'right') {
                ball.xStartingPosition += speed;
            } else {
                ball.xStartingPosition -= speed;
            }

            if (ball.xStartingPosition >= container.x + container.width - ball.ballSize) {
                ball.move.xDirection = 'left';
            }

            if (ball.xStartingPosition <= container.x) {
                ball.move.xDirection = 'right';
            }

            // y-axis
            if (ball.move.yDirection === 'down') {
                ball.yStartingPosition += speed;
            } else {
                ball.yStartingPosition -= speed;
            }

            if (ball.yStartingPosition >= container.y + container.height - ball.ballSize) {
                ball.move.yDirection = 'up';
            }

            if (ball.yStartingPosition <= container.y) {
                ball.move.yDirection === 'down';
            }
            
            const el = ballRefs.current[ball.ballId];
            if (!el) return;

                el.style.left = `${ball.xStartingPosition}px`
                el.style.top = `${ball.yStartingPosition}px`
            
        }); 
        rafId = requestAnimationFrame(animate);              
    }
    rafId = requestAnimationFrame(animate);

}

export default animateContainer