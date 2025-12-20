import React from 'react'
import { LEVEL_CONFIG } from '../types/LevelConfig'
import type { ContainerRectType } from '../types/ContainerSize'
import getRandomValue from './getRandomValue'
import type { BallCharacterType } from '../types/BallCharacter'

const animateContainer = (gameLevel: number, container: ContainerRectType, containerRef: React.RefObject<HTMLElement | null>, ballsCharacter: BallCharacterType[]) => {
    let speed: number = getRandomValue(1, 8); // random speed
    const ballArray = Array.from({length: LEVEL_CONFIG[gameLevel].numberOfBalls})

    if (!container) return;

    ballArray.forEach((_,i) => {
            
        let ballSize = getRandomValue(getRandomValue(20, 30), getRandomValue(35, 80));
        let xPosition: number = getRandomValue(0 + ballSize, container.width - ballSize);
        let yPosition: number = getRandomValue(0 + ballSize, container.height - ballSize);
        
        const animate = () => {
            xPosition += speed;
            yPosition += speed;

            if (xPosition < container.x + ballSize && yPosition < container.y + container.height + ballSize) {
                xPosition += speed;
                if (!containerRef.current) return;
                    containerRef.current.style.right = `${xPosition}px`
            }
            if (xPosition > container.x - ballSize || yPosition > container.y + container.height - ballSize) {
                yPosition += speed;

            }            
        }
    })

    

  return (
    <div>animateContainer</div>
  )
}

export default animateContainer