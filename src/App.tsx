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
  let ballRefs = useRef<HTMLElement[]>([]);
  const [ isAscending, setIsAscending ] = useState(true);
  const [ playKey, setPlayKey ] = useState(0);
  const [ hasTimer, setHasTimer ] = useState(false);
  const [ gameTimer, setGameTimer ] = useState<number>(0);

  const value = {
    isLightTheme, setIsLightTheme,
    gameLevel, setGameLevel,
    ballsCharacter, setBallsCharacter,
    ballRefs,
    isAscending, setIsAscending,
    playKey, setPlayKey,
    hasTimer, setHasTimer,
    gameTimer, setGameTimer,
  }

  return (
    // <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/bubblitz/' : '/'}>

    // for gh-pages
    <BrowserRouter basename='/bubblitz/'>
    {/* <BrowserRouter basename='/'> */}

    {/* // for local access  */}
    {/* <BrowserRouter > */}
      <UserContext.Provider value={value}>
        <Routes >
          <Route index element={<MainPage/>} />
          <Route path='/play' element={<PlayPage key={playKey}/>} />
          <Route path='/how-to-play' element={<HowToPlayPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
