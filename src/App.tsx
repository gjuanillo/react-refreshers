import { useRef } from 'react';
import './App.css'

function App() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const focusInput = (): void => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = 'cyan';
        }
    };

    return (
        <>
            <div>
                <h1>Learn React</h1>
                <input ref={inputRef} type='text' placeholder='Focus me' />
                <button onClick={focusInput}>Focus</button>
            </div>
        </>
    )

}

export default App;
