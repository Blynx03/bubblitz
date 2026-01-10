import { useContext, useEffect } from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import DemoArea from '../components/DemoArea'
import UserContext, { type UserContextType } from '../context/UserContext'
import TitleCaption from '../components/TitleCaption'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ThemeMode from '../components/ThemeMode'
import { playSound } from '../utilities/playSound'

const MainPage = () => {
    const { isLightTheme, setGameLevel, setBallsCharacter, ballRefs, setHasTimer, setGameTimer } = useContext(UserContext) as UserContextType;
    let mode = isLightTheme ? 'light-mode' : 'dark-mode';
    const nav = useNavigate();

    const hardResetGame = () => {
        setBallsCharacter([]);
        ballRefs.current = [];
        setGameLevel(1);
        setHasTimer(false);
        setGameTimer(0);
    }

    function handleClick(page: string) {
        playSound('click');
        if (page === 'play') {
            // reset values
            hardResetGame();
        }
        nav(`/${page}`);

    }

    useEffect(() => {
        playSound('intro');
    },[]);

    return (
        <div className={`main-page-container ${mode}`}>
            <div className="main-title-and-theme-container">
                <Title />
                <ThemeMode />
            </div>
            <TitleCaption />
            <DemoArea />
            <div className='main-btn-container'>
                <Button btnClass='how-to-btn btn' btnText='How To Play' onClick={() => handleClick('how-to-play')} />
                <Button btnClass='play-btn btn' btnText={`Let's Play`} onClick={() => handleClick('play')} />
            </div>
            <Footer />
        </div>
    )
}

export default MainPage