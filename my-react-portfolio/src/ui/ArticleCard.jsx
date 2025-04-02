/* eslint-disable react/prop-types */
import { Typography } from "./Typography/Typography";
import { Button } from "./Button";
import { Tag } from "./Tag";
import iconWeb from "../assets/iconWeb.svg";
import "./ArticleCard.css";

export const ArticleCard = ({
  image,
  date,
  title,
  description,
  link,
  className = "",
}) => {
  return (
    <div className={`article-card ${className}`}>
      <div className="article-image-wrapper">
        {image && <img src={image} alt={title} className="article-image" />}
      </div>

      <div className="article-content">
        <div className="tag-container">
          <Tag text={date} sectionType="article" />
        </div>

        <Typography variant="h3" className="article-title">{title}</Typography>
        <Typography variant="p" className="article-description">{description}</Typography>

        <div className="buttons">
          
          <Button
            icon={iconWeb}
            text="Read article"
            onClick={() => window.open(link, "_blank")}
            className="button"
          />
        </div>
      </div>
    </div>
  );
};

