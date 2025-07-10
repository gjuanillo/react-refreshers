import './App.css'

function ComponentA({ theme }: { theme: string }) {
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Component A</h2>
            <ComponentB theme={theme}/>
        </div>
    )
}

function ComponentB({ theme }: { theme: string }) {
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Component B</h2>
            <ThemedComponent theme={theme}/>
        </div>
    )
}
function ThemedComponent({ theme }: { theme: string }){
    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>Themed Component</h2>
            <p>The current theme is: {theme}</p>
        </div>
    )
}

function App() {
    const theme: string = 'dark';

    return (
        <div style={{border:'2px solid black', padding:'10px', justifyItems:'center'}}>
            <h2>App Component</h2>
            <ComponentA theme={theme}/>
        </div>
    )

}

export default App;
