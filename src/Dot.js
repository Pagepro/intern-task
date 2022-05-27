import React, { useState } from 'react';
import './Dot.css';

const Dot = props => {
    const { myNumber } = props;
    const [isVisible, setIsVisible] = useState(false);

    const clickHandler = () => {
        !isVisible && setIsVisible(true);
    }

    return (
        <div className="dot" onClick={clickHandler}>
            {isVisible && <span> {myNumber}</span>}
        </div>
    );
};

export default Dot;
