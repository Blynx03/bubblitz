const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className='footer-container'>
            <div className='footer'>
                <span className="material-symbols-outlined rocket-footer">rocket_launch</span>
                The Dreamer <span className="reg-footer">&copy;</span> - copyright {date}
            </div>
        </div>
    )
}

export default Footer