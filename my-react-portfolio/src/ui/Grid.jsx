/* eslint-disable react/prop-types */
import "./Grid.css";

export const Grid = ({ background = "primary", children }) => {
  return (
    <div className={`grid-section`} style={{ backgroundColor: `var(--${background}-color)` }}>
      {children}
    </div>
  );
};
