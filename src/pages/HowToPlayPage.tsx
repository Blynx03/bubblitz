import { useContext } from 'react'
import Footer from '../components/Footer'
import ThemeMode from '../components/ThemeMode'
import UserContext, { type UserContextType } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const HowToPlayPage = () => {
    const { isLightTheme, setGameLevel, setBallsCharacter } = useContext(UserContext) as UserContextType;
    const mode = isLightTheme ? 'light-mode' : 'dark-mode';
    const nav = useNavigate();

    function handleClick(page:string) {
        if (page === 'play') {
            setGameLevel(1);
            setBallsCharacter([]); // reset values
        }
        nav(`/${page}`);
    }

    return (
        <div className={mode}>
        <ThemeMode />
        <section className="how-to-play">

         {/* Header  */}
            <header className="how-to-play__header-container">
                <h1 className="how-to-play__title">How to Play</h1>
                <p className="how-to-play__subtitle">
                Pop the balls in the correct order before time runs out.
                </p>
            </header>

            {/* Objective */}
            <div className='how-to-play-content-container'>
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🎯 Objective</h2>
                    <p className="how-to-play__text">
                    Each level generates a set of numbered balls inside the play area.
                    Your goal is to <strong>pop the balls in the correct order</strong> based on the instruction shown at the start of the level.
                    </p>
                    <ul className="how-to-play__list">
                    <li>Ascending order (lowest to highest)</li>
                    <li>Descending order (highest to lowest)</li>
                    </ul>
                </section>

                {/* Basic Rules  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🟢 Basic Rules</h2>
                    <ul className="how-to-play__list">
                    <li>Each level contains at least <strong>8 balls</strong></li>
                    <li>Every ball has a <strong>unique value</strong></li>
                    <li>Click balls <strong>one at a time</strong></li>
                    <li>Clicking the wrong ball costs <strong>one life</strong></li>
                    </ul>
                </section>

                {/* Difficulty  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🧠 Increasing Difficulty</h2>
                    <p className="how-to-play__text">
                    As you progress, balls gain new behaviors designed to challenge your attention and memory.
                    </p>

                    <ul className="how-to-play__list how-to-play__list--behaviors">
                    <li>Balls may move side-to-side or up-and-down</li>
                    <li>Balls may rotate clockwise or counterclockwise</li>
                    <li>Ball values may disappear and reappear</li>
                    <li>Balls may shrink and return to normal size</li>
                    <li>Multiple behaviors may happen at the same time</li>
                    </ul>
                </section>

                {/* Timed Levels */}
                <section className="how-to-play__section how-to-play__section--highlight">
                    <h2 className="how-to-play__heading">⏱️ Timed Levels (Level 30+)</h2>
                    <p className="how-to-play__text">
                    Starting at Level 30, a timer is introduced.
                    </p>
                    <ul className="how-to-play__list">
                    <li>You must finish the level before time runs out</li>
                    <li>The timer continues while balls move and animate</li>
                    <li>Running out of time counts as a failed attempt</li>
                    </ul>
                </section>

                {/* Lives  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">❤️ Lives & Progression</h2>
                    <ul className="how-to-play__list">
                    <li>You start with <strong>3 lives</strong></li>
                    <li>Each mistake or timeout costs one life</li>
                    <li>Lose all lives and the game ends</li>
                    <li>You may continue as long as you still have lives remaining</li>
                    </ul>
                </section>

                {/* Tips */}
                <section className="how-to-play__section how-to-play__section--tips">
                    <h2 className="how-to-play__heading">🏆 Tips for Success</h2>
                    <ul className="how-to-play__list">
                    <li>Read the order instruction carefully</li>
                    <li>Track values even when they disappear</li>
                    <li>Anticipate movement patterns</li>
                    <li>Stay calm — speed comes with focus</li>
                    </ul>
                </section>
            </div>
            <div className='how-to-play__btn-container'>
                <Button btnClass='how-to-play-main-page-btn how-to-play-btns btn' btnText='Main Page' onClick={() => handleClick('')} />
                <Button btnClass='how-to-play-play-btn how-to-play-btns btn' btnText={`Let's play!`} onClick={() => handleClick('play')}  />
            </div>
        </section>
    
        <Footer />
    </div>
  )
}

export default HowToPlayPage