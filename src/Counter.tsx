import React, { useState } from 'react';

const Counter: React.FC = () => {
    const initialNumber : number = 0;
    const initialStep : number = 1;
    const [count, setCount] = useState<number>(initialNumber);
    const [steps, setSteps] = useState<number>(initialStep);


    const increment = () => {
        setCount(count + steps);
    };
    const decrement = () => {
        setCount(count - steps);
    };

    // NOTE: State updates are async
    const incrementTwice = () => {
        // Count is not updated during the function, making the value of count to 0, 
        // meaning setting count to 0 + 1, then setting count to 0 + 1. 
        // Making the function to only increment one steps
        setCount(count + 1);
        setCount(count + 1);
    }

    return (
        <div className='contact-section'>
            <p>Count: {count}</p>
            <input type='number' value={steps} 
                onChange={(e) => setSteps(parseInt(e.target.value))}/>
            <button className='counterButton' onClick={increment}>Increment</button>
            <button className='counterButton' onClick={decrement}>Decrement</button>
            <button className='counterButton' onClick={incrementTwice}>+2</button>
        </div>
    );
};

export default Counter;
