import React, { useEffect, useState } from 'react';
import './Dot.css';
import { generateRandomRGB } from './utils/utils.js';

const Dot = props => {
    const { myNumber, activeNumber, setActiveNumberHandler } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [backgroundColorArray, setBackgroundColorArray] = useState([0, 0, 0]);

    const clickHandler = () => {
        !isVisible && setIsVisible(true);
        setBackgroundColorArray(generateRandomRGB(backgroundColorArray));
        setActiveNumberHandler(myNumber);
    }

    useEffect(() => {
        if (activeNumber !== myNumber && isVisible) {
            setIsVisible(false);
            setBackgroundColorArray([0, 0, 0]);
        }
    }, [activeNumber, myNumber, isVisible])

    return (
        <div className="dot" onClick={clickHandler}
            style={{
                backgroundColor: `rgb(${backgroundColorArray.join(',')})`
            }}
        >
            {isVisible && <span> {myNumber}</span>}
        </div>
    );
};

export default Dot;
