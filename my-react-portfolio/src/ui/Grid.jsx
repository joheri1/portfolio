/* eslint-disable react/prop-types */
import "./Grid.css";

export const Grid = ({ background = "primary", textColor = "light", children }) => {
  return (
    <div
      className="grid-section"
      data-background={background}
      data-text={textColor}
    >
      {children}
    </div>
  );
};
