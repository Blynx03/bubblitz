import React, { useContext, useEffect, useRef } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

const ThemeMode = () => {

    const { isLightTheme, setIsLightTheme } = useContext(UserContext) as UserContextType;
    
    function handleClick() {
        setIsLightTheme(prev => !prev);
    }

    return (
        <div className="theme-container">
            <div className="theme-btn-container">
                <div 
                    className={`theme-btn ${isLightTheme ? 'light-mode' : 'dark-mode'}`}
                    onClick={handleClick}>
                    <span className="theme material-symbols-outlined">
                        {isLightTheme ? 'light_mode' : 'dark_mode'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ThemeMode