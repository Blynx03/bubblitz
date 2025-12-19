import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import PlayPage from './pages/PlayPage'
import { useState } from 'react'
import UserContext from './context/UserContext'

function App() {
  const [ isLightTheme, setIsLightTheme ] = useState(true);
  const [ gameLevel, setGameLevel ] = useState<number>(0);  

  const value = {
    isLightTheme, setIsLightTheme,
    gameLevel, setGameLevel
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/play' element={<PlayPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
