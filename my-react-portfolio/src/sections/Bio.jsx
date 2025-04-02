import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography.jsx";
import "./Bio.css";

export const Bio = () => {
  return (
  <Grid background="primary">
    <section id="bio" className="bio-section">
      <div className="bio-card">
        <Typography variant="h2" className="bio-heading">Bio</Typography>
        <Typography variant="p" className="bio-text">
          With a keen curiosity and a passion for learning, Johanna thrives on tackling new 
          challenges and exploring innovative solutions. Engaged, creative and adaptable, she brings both structure and fresh ideas to every project she takes on.
          </Typography>
      </div>
    </section>
  </Grid>
  );
};