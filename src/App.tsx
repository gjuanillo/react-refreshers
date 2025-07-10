import { createContext, useContext } from 'react';
import './App.css'

function ComponentA() {
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Component A</h2>
            <ComponentB/>
        </div>
    )
}

function ComponentB() {
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Component B</h2>
            <ThemedComponent/>
        </div>
    )
}
function ThemedComponent(){
    const theme = useContext(ThemeContext);
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Themed Component</h2>
            <p>The current theme is: {theme}</p>
        </div>
    )
}

const ThemeContext = createContext<string>('dark');
function App() {

    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>App Component</h2>
            <ComponentA/>
        </div>
    )

}

export default App;
