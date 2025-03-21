import skillsData from "/src/data/skills.json";
import { Tag } from "/src/ui/Tag.jsx";
import { Typography } from "/src/ui/Typography/Typography.jsx";
import { Grid } from "/src/ui/Grid.jsx";
import "./Skills.css";

export const Skills = () => {
  return (
    <Grid background="secondary">
      <section className="skill-section">
        <Typography variant="h2" className="skills-heading">Skills</Typography>
        <div className="skill-wrapper">
          {skillsData?.skills?.length > 0 ? (
            skillsData.skills.map((skill) => (
              <div key={skill.name} className="skill-category">
                <Tag sectionType="skill" text={skill.name} />
                <ul>
                  {skill.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <Typography variant="p" className="loading-text">Loading skills...</Typography>
          )}
        </div>
      </section>
    </Grid>
  );
};

