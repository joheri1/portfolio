import { Heading } from "../ui/Heading"
import "./Bio.css"

export const Bio = () => {
  return (
    <div className="bio-card">
      <Heading heading="Bio" className="bio-heading" level={2} />
      <div className="bio-text">
        <p>
          Johanna is a senior system administrator transitioning into a developer role. With a keen curiosity and a passion for learning, she thrives on tackling new challenges and exploring innovative solutions. Her creativity and attention to detail allow her to build intuitive, user-friendly applications, always with a focus on functionality and great design. Engaged and adaptable, she brings both structure and fresh ideas to every project she takes on.
        </p>
      </div>
    </div>
  );
};
