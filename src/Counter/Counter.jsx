import { useState } from 'react';

export default function Counter() {
    const [counterValue, setCounterValue] = useState(0);

  return (
    <div>
        <h2 data-testid="header">My Counter</h2>
        <h2 data-testid="counter">{counterValue}</h2>
        <button data-testid="subtract-btn">-</button>
        
        <button data-testid="add-btn">+</button>
    </div>
  );
}