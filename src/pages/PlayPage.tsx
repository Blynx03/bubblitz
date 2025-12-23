import React, { useRef } from 'react'

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement>(null);

  const gameStart = () => {
    <div>
      
    </div>
  }

  return (
    <div className='play-page-container'>
      <div ref={playAreaRef} className='play-area-container'>
        {gameStart}
      </div>

    </div>
  )
}

export default PlayPage