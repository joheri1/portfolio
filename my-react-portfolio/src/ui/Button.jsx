/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, onClick, className = "", icon }) => {
  return (
    <button onClick={onClick} className={`button ${className}`.trim()}>
      {icon && <img src={icon} alt="" className="button-icon" />}
      <span>{text}</span>
    </button>
  );
};

