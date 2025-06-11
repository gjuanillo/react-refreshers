import './App.css'

function App() {
    const name = "John Doe";
    const profession = "Full Stack AI Developer & Data Analyst";
    const projects = [
        {
            title: "project title 1",
            description: "description here",
            link: "#"
        },
        {
            title: "project title 2",
            description: "description here",
            link: "#"
        }
    ]
    return (
        <div className='App'>
           <header className='header'>
                <h1>{name}</h1>
                <p>{profession}</p>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header> 
        </div>
    )
}

export default App
