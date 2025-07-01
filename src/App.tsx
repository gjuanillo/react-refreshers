import About from './About';
import './App.css'
import Contact from './Contact';
import Counter from './Counter';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import type { Project } from './types';

function App() {

    const fullName: string = "John Doe";
    const profession: string = "Full Stack AI Engineer & Data Analyst";
    const technologies = [
        {
            name: "Spring Framework",
            definition: "A powerful, open-source Java framework used for building enterprise-level applications, particularly web services and APIs."
        },
        {
            name: "React Typescript",
            definition: "A combination of the React library for building user interfaces and TypeScript, a statically typed superset of JavaScript, enabling safer and more scalable front-end development."
        },
        {
            name: "Postgresql",
            definition: "An advanced, open-source relational database management system known for its robustness, extensibility, and standards compliance."
        },
        {
            name: "Amazon Web Services",
            definition: "A comprehensive cloud computing platform by Amazon offering scalable infrastructure and services such as computing power, storage, and databases."
        }
    ];
    const techDef = (tech: string, definition: string): void => {
        alert(`Definition for ${tech}: ${definition}`)
    }
    const projects: Project[] = [
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
    const skills = [
        { name: "TypeScript", level: "Advanced" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "Docker", level: "Beginner" }
    ];
    const testimonials = [
        { author: "Alice Smith", content: "Working with John was a breeze!", role: "Product Manager" },
        { author: "Bob Lee", content: "He delivered every milestone on time.", role: "Team Lead" },
        { author: "Carla Gomez", content: "Very professional and communicative.", role: "CTO" }
    ];
    return (
        <div className='App'>
            {/* Header Section */}
            <Header fullName={fullName} profession={profession} />
            {/* About Section */}
            <About technologies={technologies} onDefClick={techDef} />
            <hr />
            {/* Projects Section */}
            <Projects project={projects} />
            <Skills skills={skills} />
            <Testimonials testimonials={testimonials}/>
            <Counter />
            <hr />
            {/* Contact Section */}
            <Contact />
            <hr />
            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default App
