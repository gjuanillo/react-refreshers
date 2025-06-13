import About from './About';
import './App.css'
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects';

function App() {
    const fullName : string = "John Doe";
    const profession : string = "AI-Equiped Full Stack Engineer & Data Analyst";
    const projects = [
        {
            title: "Project Title 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget.",
            documentationLink: "#",
            repositoryLink: "#"
        },
        {
            title: "Project Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget.",
            documentationLink: "#",
            repositoryLink: "#"
        }
    ]
    return (
        <div className='App'>
            {/* Header Section */}
            <Header fullName={fullName} profession={profession}/>
            {/* About Section */}
            <About/>
            <hr />
            {/* Projects Section */}
            <Projects project={projects}/>
            <hr />
            {/* Contact Section */}
            <Contact/>
            <hr />
            {/* Footer Section */}
            <Footer/>
        </div>
    )
}

export default App
