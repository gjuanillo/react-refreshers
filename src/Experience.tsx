import { useState } from 'react';

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <h2>Experience</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {experiences.map((exp, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <button onClick={() => toggle(index)} style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {exp.role} @ {exp.company} ({exp.duration})
            </button>
            {expandedIndex === index && (
              <p style={{ marginTop: '0.5rem' }}>{exp.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
