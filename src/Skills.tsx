type Skill = {
  name: string;
  level: string;
};

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>
          {skill.name} - <strong>{skill.level}</strong>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
