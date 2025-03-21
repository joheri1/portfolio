import { Grid } from "../ui/Grid";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <Grid background="primary">
      <section className="gallery-container">
        <div className="gallery">
          <img src="/assets/todo_list.png" alt="gallery-image-todo" className="image left" />
          <img src="/assets/happy.png" alt="gallery-image-happy" className="image middle" />
          <img src="/assets/portfolio_2.png" alt="gallery-image-portfolio" className="image right" />
        </div>
      </section>
    </Grid>
  );
};
