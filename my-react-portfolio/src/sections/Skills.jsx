import skillsData from "/src/data/skills.json";
import { Tag } from "/src/ui/Tag.jsx";
import { Heading } from "/src/ui/Heading.jsx";
import { Grid } from "/src/ui/Grid.jsx";
import "./Skills.css";

export const Skills = () => {
  return (
    <Grid background="secondary">
    <section className="skill-section">
      <Heading heading="Skills" level={2} className="skills-heading" />
      <div className="skill-wrapper"> 
        {skillsData.skills.map((skill) => (
          <div key={skill.name} className="skill-category">
            <Tag sectionType="skill" text={skill.name} />
            <ul>
              {skill.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </section>
      </Grid>
  );
};

