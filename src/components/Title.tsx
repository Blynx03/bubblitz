import ThemeMode from "./ThemeMode"

const Title = () => {

    return (
        <div className='title-container'>
            <ThemeMode />
            <div className='title'>
                <span className="bub-title">Bub</span>
                <span className="bl-title">bl</span>
                <span className="i-title">i</span>
                <span className="tz-title">tz</span>
                <span className="reg-title">&reg;</span>
                {/* <span className="date-title">&nbsp;{date}</span> */}
            </div>
        </div>
    )
}

export default Title