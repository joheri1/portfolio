/* eslint-disable react/prop-types */
import "./Tag.css";

export const Tag = ({ sectionType, text }) => {
  return (
    <p className={`${sectionType}-tag`}>{text}</p>
  );
};