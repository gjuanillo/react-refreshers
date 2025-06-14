import type { Project } from "./types";

type ProjectsProps = {
    project: Project[];
}

function Projects({ project }: ProjectsProps) {
    return (
        <section id='projects' className='projects-section'>
            <h2>Projects</h2>
            <div className='projects-list'>
                {project.map((project, index) => (
                    <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.documentationLink && (
                            <a href={project.documentationLink}>View Documentations</a>
                        )}
                        {project.repositoryLink && (
                            <a href={project.repositoryLink}>View Documentations</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;
