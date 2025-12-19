const getTrueOrFalse = () => {
    const randomValue = Math.floor(Math.random() * 2);
    if (randomValue === 0) 
        return false
    else 
        return true
}

export default getTrueOrFalse