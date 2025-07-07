import React from 'react';
import type { CounterType } from './App';

interface CounterProps {
    counter: CounterType;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ counter, onIncrement, onDecrement }) => {
    return (
        <li>
            Counter {counter.id}: {counter.value}
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </li>
    );
};

export default Counter;
