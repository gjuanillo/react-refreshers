type AboutProps = {
    technologies: string[];
    onDefClick: (definition: string) => void;
}

function About({ technologies, onDefClick}: AboutProps) {
    return (
        <section id='about' className='about-section'>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum lacus vitae magna congue, sed pellentesque eros iaculis. Integer tempor eleifend dolor, id eleifend turpis laoreet eget. Integer tristique ornare urna at semper. Etiam ut felis mollis, aliquam purus sed, lobortis mi. Vestibulum porttitor libero quis bibendum faucibus. Phasellus dignissim sollicitudin libero, non tristique risus suscipit quis. </p>
            {
                technologies.map((technology, index) => (
                    <p key={index} 
                        onClick={() => onDefClick(technology)}>
                        {technology}
                    </p>
                ))
            }
        </section>
    )
}

export default About;
