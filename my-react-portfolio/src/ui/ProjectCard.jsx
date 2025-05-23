/* eslint-disable react/prop-types */
import { Typography } from "./Typography/Typography";
import { Button } from "./Button";
import iconWeb from "../assets/iconWeb.svg";
import iconGithubWhite from "../assets/iconGithubWhite.svg";
import { Tag } from "./Tag";
import "./ProjectCard.css";

export const ProjectCard = ({
  image,
  tags = [],
  title,
  description,
  button1Link,
  button2Link,
  button1Text = "Live Demo",
  isReversed = false,
  className = "",
}) => {
  return (
    <div className={`project-card ${isReversed ? "reversed" : ""} ${className}`}>
      <div className="project-image-wrapper">
        {image && <img src={image} alt={title} className="project-image" />}
      </div>

      <div className="project-content">
        <div className="tag-container">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} sectionType="project" />
          ))}
        </div>

        <Typography variant="h3" className="project-title">{title}</Typography>
        <Typography variant="p" className="project-description">{description}</Typography>

        <div className="buttons">
          <Button
            text={button1Text}
            onClick={() => window.open(button1Link, "_blank")}
            icon={iconWeb}
          />
          <Button
            text="View Code"
            onClick={() => window.open(button2Link, "_blank")}
            icon={iconGithubWhite}
            className="button-secondary"
          />
        </div>
      </div>
    </div>
  );
};

