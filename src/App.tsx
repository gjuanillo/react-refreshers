import './App.css'
import useCounter from './useCounter';

function App() {
    const {count, increment, decrement} = useCounter();
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default App;
