import { Heading } from "../ui/Heading";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-section">
      <Heading heading="Hi there, I’m" level={2} className="welcome" />
      <Heading heading="Johanna Eriksson" level={1} className="name" />
      <Heading 
        heading="A senior system administrator transitioning into a developer role." 
        level={3} 
        className="intro-text" 
      />
    </header>
  );
};
