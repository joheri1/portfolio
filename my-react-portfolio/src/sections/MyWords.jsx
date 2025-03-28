import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography";

export const MyWords = () => {
  return (
    <Grid background="primary">
      <section id="article-name" className="article-section">
        <div className="article-content">
          <Typography variant="h2" className="article-title">My Words</Typography>
          <Typography variant="p" className="my-words-text">This is the My Words component.</Typography>
        </div>
      </section>
    </Grid>
  );
};
