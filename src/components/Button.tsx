type ButtonType = {
    btnClass: string;
    btnText: string;
    onClick?: () => void;
}

const Button = ({btnClass, btnText, onClick}: ButtonType) => {

    return (
        <button className={btnClass} onClick={onClick}>{btnText}</button>
    )
}

export default Button