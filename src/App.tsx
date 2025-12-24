import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import PlayPage from './pages/PlayPage'
import { useRef, useState } from 'react'
import UserContext from './context/UserContext'
import type { BallCharacterType } from './types/BallCharacter'
import HowToPlayPage from './pages/HowToPlayPage'

function App() {
  const [ isLightTheme, setIsLightTheme ] = useState(true);
  const [ gameLevel, setGameLevel ] = useState<number>(0);  
  const [ ballsCharacter, setBallsCharacter ] = useState<BallCharacterType[]>([]);
  const ballRefs = useRef<HTMLDivElement[]>([]);
  const [ isAscending, setIsAscending ] = useState(true);


  const value = {
    isLightTheme, setIsLightTheme,
    gameLevel, setGameLevel,
    ballsCharacter, setBallsCharacter,
    ballRefs,
    isAscending, setIsAscending
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes >
          <Route index element={<MainPage/>} />
          <Route path='/play' element={<PlayPage />} />
          <Route path='/how-to-play' element={<HowToPlayPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
