import './App.css'
import { useState } from 'react';
import Counter from './Counter';

export interface CounterType {
    id: number;
    value: number;
}

function App() {
    const [counters, setCounters] = useState<CounterType[]>([{ id: 1, value: 0 }]);

    const addCounter = () => {
        const newId = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
        setCounters([...counters, { id: newId, value: 0 }]);
    };

    const incrementCounter = (id: number) => {
        setCounters(prev =>
            prev.map(c => (c.id === id ? { ...c, value: c.value + 1 } : c))
        );
    };

    const decrementCounter = (id: number) => {
        setCounters(prev =>
            prev.map(c => (c.id === id ? { ...c, value: c.value - 1 } : c))
        );
    };

    return (
        <>
            <button onClick={addCounter}>Add Counter</button>
            <ul>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={() => incrementCounter(counter.id)}
                        onDecrement={() => decrementCounter(counter.id)}
                    />
                ))}
            </ul>
        </>
    );
}

export default App;
