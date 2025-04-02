import "./ScrollToTop.css";
import { Button } from "../ui/Button";
import iconArrow from "/src/assets/iconArrow.svg";
import { Grid } from "/src/ui/Grid.jsx";

export const ScrollToTop = () => {
  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid background="primary">
      <section className="scroll-to-top-section">
        <Button
          text="Back to Top"
          icon={iconArrow}
          onClick={scrollToTop}
          className="white-button scroll-to-top-button"
        />
      </section>
    </Grid>
  );
};
