import { useState } from 'react';
import './App.css';
import Dot from "./Dot";

function App() {
    const [activeNumber, setActiveNumber] = useState(null);
    const setActiveNumberHandler = newNumber => {
        activeNumber !== newNumber && setActiveNumber(newNumber);
    }
    return (
        <div className="dots-wrapper">
            {new Array(20).fill('#000000').map((_, i) => {
                const hideMe = i !== activeNumber;
                return <Dot key={i} myNumber={i} hideMe={hideMe} setActiveNumberHandler={setActiveNumberHandler} />
            }
            )}
        </div>
    );
}

export default App;
