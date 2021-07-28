import { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    return (
        <div>
            <h2 data-testid="header">My Counter</h2>
            <h2
                data-testid="counter"
                className={`${counterValue >= 100 ? 'green' : ''}${counterValue <= -100 ? 'red' : ''}`}
            >
                {counterValue}
            </h2>
            <button
                data-testid="subtract-btn"
                onClick={() => {
                    setCounterValue(counterValue - inputValue);
                }}
            >
                -
            </button>
            <input
                data-testid="input"
                type="number"
                value={inputValue}
                className="text-center"
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value))
                }}
            />
            <button
                data-testid="add-btn"
                onClick={() => {
                    setCounterValue(counterValue + inputValue);
                }}
            >
                +
            </button>
        </div>
    );
}