import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography";
import "./Tech.css";

export const Tech = () => {
  return (
    <Grid background="primary">
    <section className="tech-section">
      <div className="tech-content-section">
      <Typography variant="h2" className="tech-heading">Tech</Typography>
        <Typography variant="p" className="tech-text">
          HTML, CSS, Flexbox, JavaScript,
          JSX, React, React Hooks, Zustand, Node.js,
          Mongo DB, Accessibility, Styled Components, RESTful APIs, Tailwind CSS, mob-programming, pair-programming, GitHub.
        </Typography>
      </div>
      </section>
      </Grid>
  );
};
