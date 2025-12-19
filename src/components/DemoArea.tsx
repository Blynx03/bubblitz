import { useContext, useEffect, useRef } from 'react'
import useContainerSize from '../utilities/useContainerSize';
import UserContext, { type UserContextType } from '../context/UserContext';
import animateContainer from '../utilities/animateContainer';

const DemoArea = () => {
    const demoContainerRef = useRef<HTMLDivElement | null>(null);
    const container = useContainerSize(demoContainerRef);
    const { gameLevel } = useContext(UserContext) as UserContextType;

    function showDemo() {
        if (!demoContainerRef) return;
        animateContainer(gameLevel, container, demoContainerRef);
            return (
                <div>

                </div>
            )
        
    }

    return (
        <div ref={demoContainerRef} className='demo-container'>
            {/* game logic needed here */}
            {showDemo()}
        </div>
    )
}

export default DemoArea