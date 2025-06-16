import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='contact-section'>
            <p>Count: {count}</p>
            <button className='counterButton' onClick={increment}>Increase</button>
            <button className='counterButton' onClick={decrement}>Decrease</button>
        </div>
    );
};

export default Counter;
