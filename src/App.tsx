import { ThemeContext } from './ThemeContext';
import './App.css'
import ComponentA from './ComponentA';
import { useState } from 'react';

function App() {
    type Theme = 'light' | 'dark';
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = (): void => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    const changeBackground = (theme: Theme): string => {
        return theme === 'light' ? '#e3d1cd' : '#242424'
    }

    const containerStyle = {
        border: '2px solid black',
        padding: '10px',
        justifyItems: 'center',
        backgroundColor: changeBackground(theme)
    }

    return (
        <>
        <ThemeContext.Provider value={theme}>
            <div style={containerStyle}>
                <h2>App Component</h2>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ComponentA />
            </div>
        </ThemeContext.Provider>
        </>
    )

}

export default App;
