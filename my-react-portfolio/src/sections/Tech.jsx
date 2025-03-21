import { Heading } from "../ui/Typography/Typography";
import "./Tech.css";

export const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-content-section">
      <Heading heading="Tech" level={2} className="tech-heading" />
        <p>
          HTML, CSS, Flexbox, JavaScript,
          JSX, React, React Hooks, Zustand, Node.js,
          Mongo DB, Accessibility, Styled Components, RESTful APIs, Tailwind CSS, mob-programming, pair-programming, GitHub.
        </p>
      </div>
    </section>
  );
};
