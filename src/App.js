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
            {new Array(20).fill('#000000').map((_, i) => (
                <Dot key={i} myNumber={i} activeNumber={activeNumber} setActiveNumberHandler={setActiveNumberHandler} />
            ))}
        </div>
    );
}

export default App;
