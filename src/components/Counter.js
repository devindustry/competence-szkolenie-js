import React, { useState } from 'react';

const INITIAL_COUNTER = 0;

const Counter = () => {
    const [counterValue, setCounterValue] = useState(INITIAL_COUNTER);

    const handleIncrementCounter = () => {
        setCounterValue(counterValue + 1);
    };

    const handleDecrementCounter = () => {
        setCounterValue(counterValue - 1);
    };

    const handleResetCounter = () => {
        setCounterValue(INITIAL_COUNTER);
    };

    return (<div>
        Counter: {counterValue}
        <button onClick={handleIncrementCounter}>+</button>
        <button onClick={handleDecrementCounter}>-</button>
        <button onClick={handleResetCounter}>RESET</button>
    </div>)
}
export default Counter;