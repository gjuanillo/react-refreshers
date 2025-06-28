import React, { useState } from 'react';

const Counter: React.FC = () => {
    const message : string = "Text";
    const [count, setCount] = useState<string>(message);

    const message1 : string = "UpdatedText1";
    const message2 : string = "UpdatedText2";

    const increment = () => {
        setCount(message1);
    };
    const decrement = () => {
        setCount(message2);
    };

    return (
        <div className='contact-section'>
            <p>Count: {count}</p>
            <button className='counterButton' onClick={increment}>Update</button>
            <button className='counterButton' onClick={decrement}>Update</button>
        </div>
    );
};

export default Counter;
