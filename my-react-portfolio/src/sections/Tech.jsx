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
        JSX • React Hooks • Global state mgmt • Mongoose • Tailwind CSS • Flexbox • Media queries • Component-based design • Pair-programming • Mob-programming • .env
        </Typography>
      </div>
      </section>
      </Grid>
  );
};
