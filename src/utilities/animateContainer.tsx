import React from 'react'
import type { ContainerRectType } from '../types/ContainerSize'
import type { BallCharacterType } from '../types/BallCharacter'

type animateType = {
    gameLevel?: number,
    container: ContainerRectType,
    containerRef?: React.RefObject<HTMLDivElement | null>,
    generatedBalls: BallCharacterType[],
    ballRefs: React.RefObject<HTMLElement[]>
}

const animateContainer = ({container, generatedBalls, ballRefs }: animateType) => {
    let rafId: number;

    const animate = () => {

        generatedBalls.forEach((ball) => {

            // for moving animation

            if (ball.move.xDirection === 'right') {
                ball.xStartingPosition += ball.move.moveSpeed;
            } else {
                ball.xStartingPosition -= ball.move.moveSpeed;
            }

            if (ball.xStartingPosition >= container.width - ball.ballSize) {
                ball.xStartingPosition = container.width - ball.ballSize
                ball.move.xDirection = 'left';
            }

            if (ball.xStartingPosition <= 0) {
                ball.xStartingPosition = 0;
                ball.move.xDirection = 'right';
            }

            // y-axis
            if (ball.move.yDirection === 'down') {
                ball.yStartingPosition += ball.move.moveSpeed;
            } else {
                ball.yStartingPosition -= ball.move.moveSpeed;
            }

            if (ball.yStartingPosition >= container.height - ball.ballSize) {
                ball.yStartingPosition = container.height - ball.ballSize;
                ball.move.yDirection = 'up';
            }

            if (ball.yStartingPosition <= 0) {
                ball.yStartingPosition = 0;
                ball.move.yDirection = 'down';
            }

            const el = ballRefs.current[ball.ballId];

            if (!el) return;
            el.style.left = `${ball.xStartingPosition}px`;
            el.style.top = `${ball.yStartingPosition}px`;
        }); 

        rafId = requestAnimationFrame(animate);              
    };
    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
}

export default animateContainer