import React, { useContext } from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import DemoArea from '../components/DemoArea'
import UserContext, { type UserContextType } from '../context/UserContext'
import TitleCaption from '../components/TitleCaption'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const { isLightTheme } = useContext(UserContext) as UserContextType;
    let mode = isLightTheme ? 'light-mode' : 'dark-mode';
    const nav = useNavigate();

    const handleClick = (page: string) => {
        nav(`/${page}`);
    }
    return (
        <div className={`main-page-container ${mode}`}>
            <Title />
            <TitleCaption />
            <DemoArea />
            <div className='main-btn-container'>
                <button className='how-to-btn btn' onClick={() => handleClick('how-to-play')}>How To Play</button>
                <button className='play-btn btn' onClick={() => handleClick('play')}>Let's Play!</button>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage