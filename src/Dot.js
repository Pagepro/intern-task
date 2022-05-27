import React, { useEffect, useState } from 'react';
import './Dot.css';
import { generateRandomRGB } from './utils/utils.js';

const Dot = props => {
    const { myNumber, hideMe, setActiveNumberHandler } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [backgroundColorArray, setBackgroundColorArray] = useState([0, 0, 0]);

    const clickHandler = () => {
        !isVisible && setIsVisible(true);
        setBackgroundColorArray(generateRandomRGB(backgroundColorArray));
        setActiveNumberHandler(myNumber);
    }

    useEffect(() => {
        if (hideMe) {
            isVisible && setIsVisible(false);
            setBackgroundColorArray([0, 0, 0]);
        }
    }, [hideMe, isVisible])

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

export default React.memo(Dot);