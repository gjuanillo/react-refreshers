import About from './About';
import './App.css'
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects';
import type { Project } from './types';

function App() {

    const fullName : string = "John Doe";
    const profession : string = "Full Stack AI Engineer & Data Analyst";
    const technologies : string[] = ["Spring Framework", "React Typescript", "Postgresql", "Amazon Web Services"];
    const techDef = (definition : string) : void => {
        alert(`Definition for ${definition}`)
    }
    const projects : Project[] = [
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
        },
        {
            title: "Project Title 3",
            description: "The description"
        }
    ]
    return (
        <div className='App'>
            {/* Header Section */}
            <Header fullName={fullName} profession={profession}/>
            {/* About Section */}
            <About technologies={technologies} onDefClick={techDef}/>
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
