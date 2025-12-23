import React, { useContext, useRef } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

const ThemeMode = () => {

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
        <div className="theme-container">
            <div className="theme-btn-container">
                <div ref={themeRef} className="theme-btn" onClick={() => handleClick()}><span className="theme material-symbols-outlined">{isLightTheme ? 'light_mode' : 'dark_mode'}</span></div>
            </div>
        </div>
    )
}

export default ThemeMode