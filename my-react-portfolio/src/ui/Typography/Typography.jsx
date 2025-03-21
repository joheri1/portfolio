/* eslint-disable react/prop-types */
import "./Typography.css";

export const Typography = ({ variant = "p", className = "", children }) => {
  const Tag = variant; // h1, h2, h3, h4, h5, h6, p, span

  return <Tag className={`typography ${variant} ${className}`.trim()}>{children}</Tag>;
};

