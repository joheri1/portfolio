import "./Gallery.css";

export const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="gallery">
        <img src="/todo_list.png" alt="gallery-image-todo" className="image left" />
        <img src="/happy.png" alt="gallery-image-happy" className="image middle" />
        <img src="/portfolio_2.png" alt="gallery-image-portfolio" className="image right" />
      </div>
    </section>
  );
};
