/* eslint-disable react/prop-types */
import "./Heading.css";

export const Heading = ({ heading, level = 2, className = "" }) => {
  const validLevel = Math.min(Math.max(level, 1), 6); 
  const Tag = `h${validLevel}`;

  return <Tag className={`heading heading${validLevel} ${className}`.trim()}>{heading}</Tag>;
};

