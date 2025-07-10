import { ThemeContext } from './ThemeContext';
import './App.css'
import ComponentA from './ComponentA';

function App() {

    return (
        <ThemeContext.Provider value='system'>
            <div style={{ border: '2px solid black', padding: '10px', justifyItems: 'center' }}>
                <h2>App Component</h2>
                <ComponentA />
            </div>
        </ThemeContext.Provider>
    )

}

export default App;
