import { Heading } from "../ui/Heading";
import "./Bio.css";

export const Bio = () => {
  return (
    <section className="bio-section">
      <div className="bio-card">
        <Heading heading="Bio" level={2} className="bio-heading" />
        <div className="bio-text">
          <p>
            With a keen curiosity and a passion for learning, Johanna thrives on tackling new 
            challenges and exploring innovative solutions. Engaged, creative and adaptable, she brings both 
            structure and fresh ideas to every project she takes on.
          </p>
        </div>
      </div>
    </section>
  );
};
