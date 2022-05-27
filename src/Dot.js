import React, { useEffect, useState } from 'react';
import './Dot.css';
import { generateRandomRGB, getRgbArrayAsString, hexToRgb } from './utils/utils.js';

const Dot = props => {
    const { myNumber, hideMe, setActiveNumberHandler, baseColor } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [backgroundColorArray, setBackgroundColorArray] = useState(hexToRgb(baseColor));

    const clickHandler = () => {
        !isVisible && setIsVisible(true);
        isHover && setIsHover(false);
        setBackgroundColorArray(generateRandomRGB(backgroundColorArray));
        hideMe && setActiveNumberHandler(myNumber);
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
            setBackgroundColorArray(hexToRgb(baseColor));
        }
    }, [hideMe, isVisible, baseColor])
    return (
        <div className="dot"
            onClick={clickHandler}
            onMouseEnter={onHoverHandler}
            onMouseLeave={onLeaveHandler}
            style={{
                backgroundColor: `rgb(${isHover ? getRgbArrayAsString() : getRgbArrayAsString(backgroundColorArray)})`
            }}
        >
            {isVisible && <span> {myNumber}</span>}
        </div>
    );
};

export default React.memo(Dot);