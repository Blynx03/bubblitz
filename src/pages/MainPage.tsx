import React, { useContext } from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import DemoArea from '../components/DemoArea'
import UserContext, { type UserContextType } from '../context/UserContext'
import TitleCaption from '../components/TitleCaption'

const MainPage = () => {
    const { isLightTheme, setIsLightTheme } = useContext(UserContext) as UserContextType;
    let mode = isLightTheme ? 'light-mode' : 'dark-mode';

    return (
        <div className={`main-page-container ${mode}`}>
            <Title />
            <TitleCaption />
            <DemoArea />

            <Footer />
        </div>
    )
}

export default MainPage