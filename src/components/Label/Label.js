import React from "react";
import "./Label.css";

const Label = ({ label }) => {
  const rgbColor = parseInt(label.color, 16);
  const style = {
    backgroundColor: `rgba(${(rgbColor >> 16) & 255},${(rgbColor >> 8) & 255},${rgbColor & 255},0.3)`,
    border: `1px solid #${label.color}`,
    color: `black`,
  };
  return (
    <span className="Label" style={style}>
      {label.name}
    </span>
  );
};

export default Label;
