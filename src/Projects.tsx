type Project = {
    title: string;
    description: string;
    documentationLink: string;
    repositoryLink: string;
}

type ProjectsProps = {
    project: Project[];
}

function Projects({project}: ProjectsProps){
    return (
            <section id='projects' className='projects-section'>
                <h2>Projects</h2>
                <div className='projects-list'>
                    {project.map((project, index) => (
                        <div key={index} className='project-item'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.documentationLink}>View Documentations</a>
                            <a href={project.repositoryLink}>Github Repository</a>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default Projects;
