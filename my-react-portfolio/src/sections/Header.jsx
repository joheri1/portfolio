import { Typography } from "/src/ui/Typography/Typography.jsx";
import { Grid } from "/src/ui/Grid.jsx";
import "./Header.css";

export const Header = () => {
  return (
    <Grid background="primary">
      <header className="header-section">
        <Typography variant="h4" className="welcome">Hi there, I’m</Typography>
        <Typography variant="h1" className="name">Johanna Eriksson</Typography>
        <Typography variant="h3" className="intro-text">A senior system administrator transitioning into a developer role.</Typography>
      </header>
      </Grid>
  );
};
