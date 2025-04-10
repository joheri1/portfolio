import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography";
import "./Tech.css";

export const Tech = () => {
  return (
    <Grid background="primary">
    <section id="contact" className="tech-section">
      <div className="tech-content-section">
      <Typography variant="h2" className="tech-heading">Tech</Typography>
        <Typography variant="p" className="tech-text">
            JSX, React Hooks, global state management, Mongoose, Tailwind CSS, fetch, Flexbox, async/await, error handling, media queries, component-based design, reusable components, Git workflow, pair-programming, mob-programming, .env, deployment, CSS animations.
        </Typography>
      </div>
      </section>
      </Grid>
  );
};
