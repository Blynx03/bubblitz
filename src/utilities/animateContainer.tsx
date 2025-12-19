import React from 'react'
import { BALL_CHARACTER } from '../types/BallCharacter'
import { LEVEL_CONFIG } from '../types/LevelConfig'
import generateBallCharacters from './generateBallCharacters'
import type { ContainerRectType } from '../types/ContainerSize'
import getRandomValue from './getRandomValue'

const animateContainer = (gameLevel: number, container: ContainerRectType, containerRef: React.RefObject<HTMLElement | null>) => {
    let speed: number = getRandomValue(1, 8); // random speed
    let sizeChangeSpeed: number;
    const ballArray = Array.from({length: LEVEL_CONFIG[gameLevel].numberOfBalls})

    if (!container) return;

    ballArray.forEach((_,i) => {
        const character = generateBallCharacters(gameLevel);
        if (character.isChangingSize === true) {
            sizeChangeSpeed = getRandomValue(0, 8);
        }
            
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