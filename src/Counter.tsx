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

    return (
        <div className='contact-section'>
            <p>Count: {count}</p>
            <input type='number' value={steps} 
                onChange={(e) => setSteps(parseInt(e.target.value))}/>
            <button className='counterButton' onClick={increment}>Increment</button>
            <button className='counterButton' onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
