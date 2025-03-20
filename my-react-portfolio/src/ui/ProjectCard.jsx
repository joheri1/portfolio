/* eslint-disable react/prop-types */
import { Heading } from "./Heading";
import { Button } from "./Button";
import iconWeb from "../assets/iconWeb.svg";
import iconGithub from "../assets/iconGithub.svg";
import "./ProjectCard.css";

export const ProjectCard = ({
  image,
  tags = [],
  title,
  description,
  button1Link,
  button2Link,
  button1Text = "Live Demo",
  isArticle = false, 
}) => {
  return (
    <div className="project-card">
      {/* Project image */}
      {image && <img src={image} alt={title} className="project-image" />}

      {/* Project Content */}
      <div className="project-content">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Project heading and description */}
        <Heading heading={title} level={3} className="project-title" />
        <p className="project-description">{description}</p>

        {/* Buttons */}
        <div className="buttons">
          {isArticle ? (
            <Button
              text="Read Article"
              onClick={() => window.open(button1Link, "_blank")}
              className="button-secondary"
            />
          ) : (
            <>
              <Button
                text={button1Text}
                onClick={() => window.open(button1Link, "_blank")}
                icon={iconWeb}
              />
              <Button
                text="View Code"
                onClick={() => window.open(button2Link, "_blank")}
                icon={iconGithub}
                className="button-secondary"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
