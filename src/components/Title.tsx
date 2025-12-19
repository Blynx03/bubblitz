import { useContext, useRef } from "react";
import UserContext, { type UserContextType } from "../context/UserContext";

const Title = () => {
    const { isLightTheme, setIsLightTheme } = useContext(UserContext) as UserContextType;
    const themeRef = useRef<HTMLDivElement | null>(null);

    function handleClick() {
        setIsLightTheme(!isLightTheme);
        (themeRef.current)
            if (isLightTheme) {
                themeRef.current!.style.animation = `slide-right 0.1s forwards`;
            } else {
                themeRef.current!.style.animation = `slide-left linear 0.1s forwards`;
            }
    }

    return (
        <div className='title-container'>
            <div className='title'>
                <span className="bub-title">Bub</span>
                <span className="bl-title">bl</span>
                <span className="i-title">i</span>
                <span className="tz-title">tz</span>
                <span className="reg-title">&reg;</span>
                {/* <span className="date-title">&nbsp;{date}</span> */}
            </div>
            <div className="theme-container">
                <div className="theme-btn-container">
                    <div ref={themeRef} className="theme-btn" onClick={() => handleClick()}><span className="theme material-symbols-outlined">{isLightTheme ? 'light_mode' : 'dark_mode'}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Title