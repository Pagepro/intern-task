import React, { useEffect, useState } from 'react';
import './Dot.css';
import { generateRandomRGB, rgbArrayAsString } from './utils/utils.js';

const Dot = props => {
    const { myNumber, hideMe, setActiveNumberHandler } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [backgroundColorArray, setBackgroundColorArray] = useState([0, 0, 0]);

    const clickHandler = () => {
        !isVisible && setIsVisible(true);
        isHover && setIsHover(false);
        setBackgroundColorArray(generateRandomRGB(backgroundColorArray));
        setActiveNumberHandler(myNumber);
    }

    const onHoverHandler = () => {
        setIsHover(true)
    }
    const onLeaveHandler = () => {
        setIsHover(false)
    }
    useEffect(() => {
        if (hideMe) {
            isVisible && setIsVisible(false);
            setBackgroundColorArray([0, 0, 0]);
        }
    }, [hideMe, isVisible])
    return (
        <div className="dot"
            onClick={clickHandler}
            onMouseEnter={onHoverHandler}
            onMouseLeave={onLeaveHandler}
            style={{
                backgroundColor: `rgb(${isHover ? rgbArrayAsString() : rgbArrayAsString(backgroundColorArray)})`
            }}
        >
            {isVisible && <span> {myNumber}</span>}
        </div>
    );
};

export default React.memo(Dot);