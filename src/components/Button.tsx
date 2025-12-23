import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = (btnClass: string, btnText: string, btnPage: string) => {
    const nav = useNavigate();

    const handleClick = () => {
        nav(`/${btnPage}`)
    }

    return (
        <div className={btnClass} onClick={() => handleClick()}>{btnText}</div>
    )
}

export default Button