import './App.css'

function App() {
    const name = "Full name";
    const profession = "Full Stack AI Developer & Data Analyst";
    const projects = [
        {
            title: "project title 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget.",
            link: "#"
        },
        {
            title: "project title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget.",
            link: "#"
        }
    ]
    return (
        <div className='App'>
            {/* Header Section */}
            <header className='header'>
                <h1>{name}</h1>
                <p>{profession}</p>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* About Section */}
            <section id='about' className='about-section'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget. Integer tristique ornare urna at semper. Etiam ut felis mollis, aliquam purus sed, lobortis mi. Vestibulum porttitor libero quis bibendum faucibus. Phasellus dignissim sollicitudin libero, non tristique risus suscipit quis. </p>
            </section>

            <hr/>

            {/* Projects Section */}
            <section id='projects' className='projects-section'>
                <h2>Projects</h2>
                <div className='projects-list'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-item'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>
            </section>

            <hr/>

            {/* Contact Section */}
            <section id='contact' className='contact-section'>
                <h2>Contact</h2>
                <p>Description</p>
                <a href='mailto:addres@email.com'>email</a>
            </section>

            <hr/>

            {/* Footer Section */}
            <footer className='footer'>
                <p>2025. All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default App
