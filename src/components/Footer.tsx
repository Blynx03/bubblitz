const Footer = () => {
    const date = new Date().getFullYear();
    const footer = `The Dreamer &copy; - copyright ${date}`;

    return (
        <div className='footer-container'>
            <div className='footer'>
                <span className="material-symbols-outlined rocket-footer">rocket_launch</span>
                The Dreamer <span className="reg-footer">&reg;</span> - copyright {date}
            </div>
        </div>
    )
}

export default Footer