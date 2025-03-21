import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography.jsx";
import "./Contact.css";

export const Contact = () => {
  return (
    <Grid background="secondary">
      <section id="contact-name">
        <div className="contact-container">
          <div className="contact-content">
            <Typography variant="h2" className="Contact">Contact</Typography>
            <Typography variant="p">This is Contact Component</Typography>
          </div>
        </div>
      </section>
    </Grid>
  );
};

