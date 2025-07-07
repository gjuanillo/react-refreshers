import './App.css'
import { useState } from 'react';

function App() {

    const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

    const addCounter = () => {
        setCounters([...counters, { id: (counters.length + 1), value: 0 }]);
    };

    const incrementCounter = (id: number) => {
        setCounters(
            counters.map(c => c.id === id ? { ...c, value: (c.value + 1) } : c)
        );
    }

    return (
        <>
            <button onClick={addCounter}>Add Counter</button>
            <ul>
                {counters.map(c => (
                    <li key={c.id}>
                        Counter {c.id}: {c.value}
                        <button onClick={() => incrementCounter(c.id)}>Increment</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
