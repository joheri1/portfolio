/* eslint-disable react/prop-types */
import "./Grid.css";

export const Grid = ({ background = "primary", children }) => {
  return (
    <div
      className="grid-section"
      data-background={background}
    >
      {children}
    </div>
  );
};
