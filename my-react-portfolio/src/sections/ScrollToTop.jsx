import "./ScrollToTop.css";
import { Button } from "../ui/Button";
import iconArrow from "/src/assets/iconArrow.svg";
import { Grid } from "/src/ui/Grid.jsx";

export const ScrollToTop = () => {
  return (
    <Grid background="primary">
    <section className="scroll-to-top-section">
      <Button
        text="Back to Top"
        icon={iconArrow}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="white-button rotate-icon"
      />
      </section>
      </Grid>
  );
};
