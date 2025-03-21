import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography";

export const MyWords = () => {
  return (
    <Grid background="primary">
      <section id="words-name">
        <div className="words-container">
          <div className="words-content">
            <Typography variant="h2" className="my-words-title">My Words</Typography>
            <Typography variant="p" className="my-words-text">This is the My Words component.</Typography>
          </div>
        </div>
      </section>
    </Grid>
  );
};
